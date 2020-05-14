const server = 'http://192.168.0.236:5000';

const get = (path, body={}) => {
  var url = new URL(`${server}${path}`);
  Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));

  return fetch(url.toString()).then(res => { return res.json()})
}

const post = (path, body) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  
  const url = new URL(`${server}${path}`);
  
  fetch(url, requestOptions).then(response => { return response.json() })
}

export const getAllExpenses = id_user => { return get('/expense/get_all', {"id_user": id_user}) };
export const getExpensesByCategory = (id_user, category) => { return get('/expense/get_by/category', {"id_user": id_user, "category": category}) };
export const getCategories = body => { return get('/category/get_all') };
export const getTotalAmount = id_user => { return get('/expense/get_total_by/user', {"id_user": id_user}) }
export const getTotalCategoryAmount = (id_user, category) => { return get('/expense/get_total_by/category', {"id_user": id_user, "category": category}) };
export const getLastestExpenses = id_user => { return get('/expense/get_lastest', {"id_user": id_user}) }
export const addExpense = body => { return post('/expense/add', {"body": body}) }