import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import * as R from 'ramda';

import FolderFinder from 'components/FolderFinder';
import { RouteTitle} from 'constants/index';
import { getPath, getUserToken, normalizePermalink} from 'utils/index';

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
} from './NewFolderStyle';
import { createFolder } from './NewFolderApiCalls';
import { FormValues } from './NewFolderTypes';

const initialValues: FormValues = {
  title: '',
  permalink: '',
  parentId: '',
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
            <Title>Create a folder</Title>
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
              {R.not(isSubmitting) && 'CREATE'}
              {isSubmitting && <LoadingSpinner />}
            </Button>
          </Inner>
        </Form>
      </Container>
    </main>
  );
};

interface FormProps {
  parentId?: string;
  token: string | null;
}

type NewFolderProps = FormProps & RouteComponentProps;

const NewFolder = withFormik<NewFolderProps, FormValues>({
  mapPropsToValues: (props: NewFolderProps) => ({
    ...initialValues,
    parentId: props.parentId || initialValues.parentId,
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
    const { history, token } = props;

    if (token) {
      setSubmitting(true);
      const folder = await createFolder(data, token)
        .catch((error) => (
          setErrors(error)
        ));
      setSubmitting(false);

      if (folder) {
        const params = { id: folder.id, permalink: folder.permalink };
        history.push(getPath(params, RouteTitle.Folder));
      }
    }
  },
})(InnerForm);

interface NewFolderRouteParams {
  parentId?: string;
}

type NewFolderWrapperProps = RouteComponentProps<NewFolderRouteParams>;

const NewFolderWrapper: React.FC<NewFolderWrapperProps> = (props: NewFolderWrapperProps) => {
  const { history, match } = props;
  const { parentId } = match.params;
  const token = getUserToken();

  if (R.or(R.isEmpty(token), R.isNil(token))) {
    history.push(getPath({}, RouteTitle.Login));
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <NewFolder parentId={parentId} token={token} {...props} />;
};

export default withRouter(NewFolderWrapper);
