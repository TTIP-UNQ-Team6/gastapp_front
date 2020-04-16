import axios from 'axios';

const server = 'http://localhost:5000';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const getAllExpenses = body => request('get', '/expense/get_all');