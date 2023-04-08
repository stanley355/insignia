import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: "",
    address: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required("Wajib isi"),
    address: Yup.string().required("Wajib isi"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/contact/`, {
      method: 'POST',
      body: JSON.stringify(values),
    });
    
    if (res && res.data) {
        window.location.reload();
    }
    resetForm();
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Add Contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='mb-2'>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" className="px-2 border border-black rounded ml-2" />
              <ErrorMessage name="name" component="div" className='text-red-500' />
            </div>
            <div className='mb-2'>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" className="px-2 border border-black rounded ml-2" />
              <ErrorMessage name="email" component="div" className='text-red-400'/>
            </div>
            <div className='mb-2'>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="phoneNumber" name="phoneNumber" id="phoneNumber" className="px-2 border border-black rounded ml-2" />
              <ErrorMessage name="phoneNumber" component="div" className='text-red-400'/>
            </div>
            <div className='mb-2'>
              <label htmlFor="address">Address</label>
              <Field type="address" name="address" id="address" className="px-2 border border-black rounded ml-2" />
              <ErrorMessage name="address" component="div" className='text-red-400'/>
            </div>
            <button type="submit" className='w-full border rounded text-lg'>Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddContactForm;