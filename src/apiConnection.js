const server = 'http://192.168.0.153:5000';

const get = (path, body) => {
  var url = new URL(`${server}${path}`)
  Object.keys(body).forEach(key => url.searchParams.append(key, body[key]))

  return fetch(url.toString()).then(res => { return res.json()})
}

const post = () => {
  
}

export const getAllExpenses = body => { return get('/expense/get_all', body) };