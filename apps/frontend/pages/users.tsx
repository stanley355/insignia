import axios from 'axios';
import AddUserForm from '../components/AddUserForm';

const UsersPage = ({ users }) => {
  const handleDelete = async (userID) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}api/users/?id=${userID}`
    );

    if (res && res.data) {
      window.location.reload();
    } else {
      alert('Hapus gagal');
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-lg font-bold">Users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border border-black p-2 mb-2">
                <span>{user.name}</span>
                <span className='ml2'>{user.email}</span>
                <button
                  type="button"
                  onClick={() => handleDelete(user.id)}
                  className="border px-2 hover:bg-red-500 hover:text-white ml-2"
                >
                  Delete
                </button>
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
