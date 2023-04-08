import axios from 'axios';

const userhandler = async (req, res) => {
  const { method } = req;

  const USER_ENDPOINT = `${process.env.BACKEND_URL}users/`;

  const config = {
    headers: {
      'api-token': 'abc',
    },
  };

  switch (method) {
    case 'GET':
      const getRes = await axios.get(USER_ENDPOINT, config);
      res.json(getRes.data);
      break;
    case 'POST':
      const postRes = await axios.post(USER_ENDPOINT, config);
      res.json(postRes.data);
      break;
    case 'PUT':
      const putRes = await axios.put(`${USER_ENDPOINT}${req.body.id}`, config);
      res.json(putRes.data);
      break;
    case 'DELETE':
      const delRes = await axios.delete(
        `${USER_ENDPOINT}${req.body.id}`,
        config
      );
      res.json(delRes.data);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default userhandler;
