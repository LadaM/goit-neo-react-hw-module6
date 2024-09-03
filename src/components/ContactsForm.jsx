import { useDispatch } from 'react-redux';
import { addContact } from '../redux/operations.js';
import css from './ContactsForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits')
    .required('Phone number is required'),
});

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.contactForm}>
          <div>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Contact name..."
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div>
            <Field
              type="text"
              name="phone"
              className={css.input}
              placeholder="Phone number..."
            />
            <ErrorMessage name="phone" component="div" className={css.error} />
          </div>
          <button
            type="submit"
            className={css.addButton}
            disabled={isSubmitting}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactsForm;
