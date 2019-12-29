import React, { useState, useEffect } from 'react';
import { File } from 'types';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import * as R from 'ramda';

import FolderFinder from 'components/FolderFinder';
import { RouteTitle } from 'constants/index';
import { getPath, getUserToken, normalizePermalink } from 'utils/index';
import Loading from 'shared/Loading';

import {
  Button,
  Container,
  DescriptionWrapper,
  FileInfoWrapper,
  FileContainer,
  FileDescription,
  Error,
  FolderFinderWrapper,
  Form,
  Header,
  InlineInputs,
  Inner,
  Input,
  InputWrapper,
  Textarea,
  Title,
  TitleWrapper,
  LoadingSpinner,
} from './EditFileStyle';
import { updateFile, getFile } from './EditFileApiCalls';
import { FormValues } from './EditFileTypes';

const LoadingView: React.FC = () => (
  <main>
    <Container>
      <Loading />
    </Container>
  </main>
);

export const InnerForm: React.FC<FormikProps<FormValues>> = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = props;

  const { initialValues } = props;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const title = event.target.value;
    const permalink = normalizePermalink(title);
    setFieldValue('permalink', permalink);
    handleChange(event);
  };

  const handlePermalinkBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const permalink = normalizePermalink(event.target.value);
    setFieldValue('permalink', permalink);
    handleBlur(event);
  };

  return (
    <main>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Header>
            <Title>Edit a file</Title>
          </Header>
          <Inner>
            <TitleWrapper>
              <Input
                type="text"
                name="title"
                placeholder="Title *"
                required
                onChange={handleTitleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && (<Error>{errors.title}</Error>)}
            </TitleWrapper>
            <DescriptionWrapper>
              <Textarea
                type="text"
                name="description"
                placeholder="Description *"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && (<Error>{errors.description}</Error>)}
            </DescriptionWrapper>
            <FileInfoWrapper>
              <FileContainer>
                <FileDescription />
              </FileContainer>
            </FileInfoWrapper>
            <FolderFinderWrapper>
              <FolderFinder
                name="folderId"
                placeholder="Folder ID *"
                value={values.folderId}
                onChange={handleChange}
              />
              {errors.folderId && (<Error>{errors.folderId}</Error>)}
            </FolderFinderWrapper>
            <InlineInputs>
              <InputWrapper>
                <Input
                  type="text"
                  name="permalink"
                  placeholder="Permalink"
                  required
                  onChange={handleChange}
                  onBlur={handlePermalinkBlur}
                  value={values.permalink}
                />
                {errors.permalink && (<Error>{errors.permalink}</Error>)}
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && (<Error>{errors.password}</Error>)}
              </InputWrapper>
            </InlineInputs>
            <Button
              type="submit"
              disabled={
                isSubmitting
                || R.not(R.isEmpty(errors))
                || R.equals(values, initialValues)
              }
            >
              {R.not(isSubmitting) && 'UPDATE'}
              {isSubmitting && <LoadingSpinner />}
            </Button>
          </Inner>
        </Form>
      </Container>
    </main>
  );
};

interface FormProps {
  initialValues: FormValues;
  fileData: File;
  token: string | null;
}

type EditFileProps = FormProps & RouteComponentProps;

const EditFile = withFormik<EditFileProps, FormValues>({
  mapPropsToValues: (props: EditFileProps) => ({
    ...props.initialValues,
  }),

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    password: Yup.string(),
    permalink: Yup.string().required('Permalink is required'),
    folderId: Yup.string().required('Folder ID is required'),
  }),

  async handleSubmit(
    data: FormValues,
    { props, setSubmitting, setErrors },
  ) {
    const { history, token, fileData } = props;

    if (token) {
      setSubmitting(true);
      const file = await updateFile(fileData.id, data, token)
        .catch((error) => (
          setErrors(error)
        ));
      setSubmitting(false);

      if (file) {
        const filePath = getPath({ id: file.id, permalink: file.permalink }, RouteTitle.File);
        history.push(filePath);
      }
    }
  },
})(InnerForm);

interface EditFileRouteParams {
  id: string;
}

type EditFileWrapperProps = RouteComponentProps<EditFileRouteParams>;

const EditFileWrapper: React.FC<EditFileWrapperProps> = (props: EditFileWrapperProps) => {
  const { history, match } = props;
  const { id } = match.params;

  const [loading, setLoading] = useState<boolean>(true);
  const [initialValues, setInitialValues] = useState<FormValues | null>(null);
  const [fileData, setFileData] = useState<File | null>(null);

  const token = getUserToken();
  const tokenNotExists = R.or(R.isEmpty(token), R.isNil(token));
  const initialValuesNotExists = R.and(R.isNil(initialValues), R.not(loading));

  const init = (): Promise<void> => (
    getFile(id)
      .then((file: File): void => {
        setInitialValues({
          title: file.title,
          description: file.description,
          permalink: file.permalink,
          folderId: file.folderId,
          password: undefined,
        });
        setFileData(file);
      })
      .catch((error) => {
        console.error(error);
        history.push(getPath({}, RouteTitle.Error404));
      })
      .finally(() => {
        setLoading(false);

        if (R.or(tokenNotExists, initialValuesNotExists)) {
          history.push(getPath({}, RouteTitle.Login));
        }
      })
  );
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading || initialValuesNotExists || initialValues == null || fileData == null
    ? <LoadingView />
    // eslint-disable-next-line react/jsx-props-no-spreading
    : <EditFile initialValues={initialValues} fileData={fileData} token={token} {...props} />;
};

export default withRouter(EditFileWrapper);
