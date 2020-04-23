const server = 'http://192.168.0.153:5000';

const get = (path, body={}) => {
  var url = new URL(`${server}${path}`)
  Object.keys(body).forEach(key => url.searchParams.append(key, body[key])) 

  return fetch(url.toString()).then(res => { return res.json()})
}

const post = () => {
  
}

export const getAllExpenses = id_user => { return get('/expense/get_all', {"id_user": id_user}) };
export const getExpensesByCategory = (id_user, category) => { return get('/expense/get_by/category/', {id_user: id_user, category: category}) };
export const getCategories = body => { return get('/category/get_all') };