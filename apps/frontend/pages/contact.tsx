import axios from 'axios';
import AddContactForm from '../components/AddContactForm';

const ContactPage = ({ contact }) => {
  const handleDelete = async (userID) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}api/contact/?id=${userID}`
    );

    if (res) {
      alert("Hapus berhasil");
      window.location.reload();
    } else {
      alert('Hapus gagal');
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-lg font-bold">Contact</h1>
          <ul>
            {contact.map((user) => (
              <li key={user.id} className="border border-black p-2 mb-2">
                <span>{user.email}</span>
                <span className='ml2'>{user.phoneNumber}</span>
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
        <AddContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
export const getStaticProps = async () => {
  const contact: any = await axios.get(`${process.env.FRONTEND_URL}api/contact/`);

  return {
    props: {
      contact: contact.data,
    },
  };
};
