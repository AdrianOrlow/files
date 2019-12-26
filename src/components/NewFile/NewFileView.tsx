import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import * as R from 'ramda';

import FolderFinder from 'components/FolderFinder';
import { RouteTitle } from 'constants/index';
import { getPath, getUserToken, normalizePermalink } from 'utils/index';

import {
  Button,
  Container,
  DescriptionWrapper,
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
} from './NewFileStyle';
import { fileNameWithoutExtension, normalizeFileName } from './NewFileUtils';
import { createFile } from './NewFileApiCalls';
import { FormValues } from './NewFileTypes';

import FileInput from './FileInput';

const initialValues: FormValues = {
  title: '',
  description: '',
  file: null,
  password: '',
  permalink: '',
  fileName: '',
  folderId: '',
};

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileNameSnakeCase = normalizeFileName(file.name);
      const fileNameWithoutExt = fileNameWithoutExtension(fileNameSnakeCase);
      const permalink = normalizePermalink(fileNameWithoutExt);

      setFieldValue('file', file);
      setFieldValue('fileName', fileNameSnakeCase);
      setFieldValue('permalink', permalink);
    }
  };

  const handleFileCancel = (): void => (
    setFieldValue('file', null)
  );

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
            <Title>Upload a file</Title>
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
            <FileInput
              errors={errors.file}
              file={values.file}
              onUpload={handleFileUpload}
              onCancel={handleFileCancel}
            />
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
              {R.not(isSubmitting) && 'UPLOAD'}
              {isSubmitting && <LoadingSpinner />}
            </Button>
          </Inner>
        </Form>
      </Container>
    </main>
  );
};

interface FormProps {
  folderId?: string;
  token: string | null;
}

type NewFileProps = FormProps & RouteComponentProps;

const NewFile = withFormik<NewFileProps, FormValues>({
  mapPropsToValues: (props: NewFileProps) => ({
    ...initialValues,
    folderId: props.folderId || initialValues.folderId,
  }),

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    file: Yup
      .mixed()
      .required('File is required')
      .test(
        'fileSize',
        'File is too large (> 128 MB)',
        (value: File) => value && value.size <= 128 * 1024 * 1024,
      ),
    password: Yup.string(),
    permalink: Yup.string().required('Permalink is required'),
    fileName: Yup.string().required('Filename is required'),
    folderId: Yup.string().required('Folder ID is required'),
  }),

  async handleSubmit(
    data: FormValues,
    { props, setSubmitting, setErrors },
  ) {
    const { history, token } = props;

    if (token) {
      setSubmitting(true);
      const file = await createFile(data, token)
        .catch((error) => (
          setErrors(error)
        ));
      setSubmitting(false);

      if (file) {
        history.push(getPath({ id: file.id }, RouteTitle.File));
      }
    }
  },
})(InnerForm);

interface NewFileRouteParams {
  folderId?: string;
}

type NewFileWrapperProps = RouteComponentProps<NewFileRouteParams>;

const NewFileWrapper: React.FC<NewFileWrapperProps> = (props: NewFileWrapperProps) => {
  const { history, match } = props;
  const { folderId } = match.params;
  const token = getUserToken();

  if (R.or(R.isEmpty(token), R.isNil(token))) {
    history.push(getPath({}, RouteTitle.Login));
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NewFile folderId={folderId} token={token} {...props} />;
};

export default withRouter(NewFileWrapper);
