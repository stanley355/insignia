import axios from 'axios';
import AddUserForm from '../components/AddUserForm';

const UsersPage = ({ users }) => {
  return (
    <div className="container mx-auto">
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="text-lg font-bold">Users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
        <AddUserForm />
      </div>
    </div>
  );
};

export default UsersPage;
export const getStaticProps = async () => {
  const users: any = await axios.get(`${process.env.FRONTEND_URL}api/users/`);

  return {
    props: {
      users: users.data,
    },
  };
};
