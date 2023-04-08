import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddUserForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required("Wajib password")
  });

  const handleSubmit = async (values, { resetForm }) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/users/`, {
      method: 'POST',
      headers: {
        'api-token': 'abc'
      },
      body: JSON.stringify(values),
    });
    
    if (res && res.data) {
        window.location.reload();
    }
    resetForm();
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Add User</h2>
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
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" className="px-2 border border-black rounded ml-2" />
              <ErrorMessage name="password" component="div" className='text-red-400'/>
            </div>
            <button type="submit" className='w-full border rounded text-lg'>Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUserForm;