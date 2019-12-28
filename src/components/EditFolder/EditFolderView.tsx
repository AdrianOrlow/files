import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import * as R from 'ramda';

import FolderFinder from 'components/FolderFinder';
import { RouteTitle } from 'constants/index';
import { getPath, getUserToken, normalizePermalink } from 'utils/index';
import Loading from 'shared/Loading';
import { Folder } from 'types';

import {
  Button,
  Container,
  Error,
  FolderFinderWrapper,
  Form,
  Header,
  Inner,
  Input,
  LoadingSpinner,
  PermalinkWrapper,
  Textarea,
  Title,
  TitleWrapper,
} from './EditFolderStyle';
import { updateFolder, getFolder } from './EditFolderApiCalls';
import { FormValues } from './EditFolderTypes';

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
    initialValues,
  } = props;

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
            <Title>Edit a folder</Title>
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
            <PermalinkWrapper>
              <Textarea
                type="text"
                name="permalink"
                placeholder="Permalink *"
                required
                onChange={handleChange}
                onBlur={handlePermalinkBlur}
                value={values.permalink}
              />
              {errors.permalink && (<Error>{errors.permalink}</Error>)}
            </PermalinkWrapper>
            <FolderFinderWrapper>
              <FolderFinder
                name="parentId"
                placeholder="Parent ID *"
                value={values.parentId}
                onChange={handleChange}
              />
              {errors.parentId && (<Error>{errors.parentId}</Error>)}
            </FolderFinderWrapper>
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
  folderData: Folder;
  token: string | null;
}

type EditFolderProps = FormProps & RouteComponentProps;

const EditFolder = withFormik<EditFolderProps, FormValues>({
  mapPropsToValues: (props: EditFolderProps) => ({
    ...props.initialValues,
  }),

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    permalink: Yup.string().required('Permalink is required'),
    parentId: Yup.string().required('Folder ID is required'),
  }),

  async handleSubmit(
    data: FormValues,
    { props, setSubmitting, setErrors },
  ) {
    const { history, token, folderData } = props;

    if (token) {
      setSubmitting(true);
      const folder = await updateFolder(folderData.id, data, token)
        .catch((error) => (
          setErrors(error)
        ));
      setSubmitting(false);

      if (folder) {
        const folderPath = getPath(
          { id: folder.id, permalink: folder.permalink },
          RouteTitle.Folder,
        );
        history.push(folderPath);
      }
    }
  },
})(InnerForm);

interface EditFolderRouteParams {
  id: string;
}

type EditFolderWrapperProps = RouteComponentProps<EditFolderRouteParams>;

const EditFolderWrapper: React.FC<EditFolderWrapperProps> = (props: EditFolderWrapperProps) => {
  const { history, match } = props;
  const { id } = match.params;

  const [loading, setLoading] = useState<boolean>(true);
  const [initialValues, setInitialValues] = useState<FormValues | null>(null);
  const [folderData, setFolderData] = useState<Folder | null>(null);

  const token = getUserToken();
  const tokenNotExists = R.or(R.isEmpty(token), R.isNil(token));
  const initialValuesNotExists = R.and(R.isNil(initialValues), R.not(loading));

  if (R.or(R.isEmpty(token), R.isNil(token))) {
    history.push(getPath({}, RouteTitle.Login));
  }

  const init = (): Promise<void> => (
    getFolder(id)
      .then((folder: Folder): void => {
        setInitialValues({
          title: folder.title,
          permalink: folder.permalink,
          parentId: folder.parentId,
        });
        setFolderData(folder);
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

  return loading || initialValuesNotExists || initialValues == null || folderData == null
    ? <LoadingView />
    // eslint-disable-next-line react/jsx-props-no-spreading
    : <EditFolder initialValues={initialValues} folderData={folderData} token={token} {...props} />;
};

export default withRouter(EditFolderWrapper);
