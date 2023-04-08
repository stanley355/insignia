import axios from 'axios';

const contactHandler = async (req, res) => {
  const { method } = req;

  const USER_ENDPOINT = `${process.env.BACKEND_URL}contact/`;

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
      const postRes = await axios.post(USER_ENDPOINT, req.body, config);
      res.json(postRes.data);
      break;
    case 'PUT':
      const putRes = await axios.put(`${USER_ENDPOINT}${req.body.id}`, config);
      res.json(putRes.data);
      break;
    case 'DELETE':
      const delRes = await axios.delete(
        `${USER_ENDPOINT}${req.query.id}`,
        config
      );
      res.json(delRes.data);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default contactHandler;
