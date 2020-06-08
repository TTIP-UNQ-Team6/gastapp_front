const server = 'http://192.168.0.153:5000';

const get = (path, body={}) => {
  var url = new URL(`${server}${path}`);
  Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));

  return fetch(url.toString()).then(res => { return res.json() })
}

const post = (path, body) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  
  const url = new URL(`${server}${path}`);
  
  return fetch(url, requestOptions).then(res => res.json().then(data => { return {data: data, status: res.status } }))
  
}

export const getAllExpenses = user_email => { return get('/expense/get_all', {"user_email": user_email}) };
export const getExpenseCategories = body => { return get('/category/expense/get_all') };
export const getTotalExpensesAmount = user_email => { return get('/expense/get_total_by/user', {"user_email": user_email}) };
export const getLastestExpenses = user_email => { return get('/expense/get_latest', {"user_email": user_email}) };
export const getExpenseAccounts = body => { return get('/account/expense/get_all') };
export const getExpenseTypes = body => { return get('/expense/get_types') }
export const addExpense = body => { return post('/expense/add', {"body": body}) }
export const editExpense = body => { return post('/expense/edit_expense', {"body": body}) }
export const deleteExpense = body => { return post('/expense/delete', {"body": body}) }
export const filterExpenses = body => { return post('/expense/filter', {"body": body}) }

export const getAllIncomes = user_email => { return get('/income/get_all', {"user_email": user_email}) };
export const getIncomeCategories = body => { return get('/category/income/get_all') };
export const getLastestIncomes = user_email => { return get('/income/get_latest', {"user_email": user_email}) };
export const getTotalIncomesAmount = user_email => { return get('/income/get_total_by/user', {"user_email": user_email}) };
export const getIncomeAccounts = body => { return get('/account/income/get_all') };
export const getIncomeTypes = body => { return get('/income/get_types') }
export const addIncome = body => { return post('/income/add', {"body": body}) };
export const editIncome = body => { return post('/income/edit_expense', {"body": body}) }
export const deleteIncome = body => { return post('/income/delete', {"body": body}) }
export const filterIncomes = body => { return post('/income/filter', {"body": body}) }

export const loginUser = (email, password) => { return post('/login', {"email": email, "password": password}) };
export const registerUser = (username, email, password) => { return post('/register', {"name": username, "email": email, "password": password}) };