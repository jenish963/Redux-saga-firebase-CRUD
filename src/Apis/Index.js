import axios from "axios";

axios.defaults.baseURL = 'https://redux-crud-38266-default-rtdb.firebaseio.com/form.json'

export const deleteUserByIdAPI = (id) => {
    axios.delete(`https://redux-crud-38266-default-rtdb.firebaseio.com/form/${id}.json`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const createUserAPI = (user) => {
    axios.post('https://redux-crud-38266-default-rtdb.firebaseio.com/form.json', user )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

export const getUserAPI = async () => axios.get()

export const updateUserAPI = (user) => {
    axios.patch(`https://redux-crud-38266-default-rtdb.firebaseio.com/form/${user.id}.json`, user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}