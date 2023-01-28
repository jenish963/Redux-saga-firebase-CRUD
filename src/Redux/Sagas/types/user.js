import { createUserAPI, deleteUserByIdAPI, getUserAPI, updateUserAPI } from "../../../Apis/Index"
import { addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice } from "../../Slice/Users"
import {put, takeEvery} from 'redux-saga/effects'
import { GET_USER, CREATE_USER, UPDATE_USER_BY_ID, DELETE_USER_BY_ID } from "."

export function* getUserSaga() {
    const users = yield getUserAPI()
    yield put(getUsersSlice(Object.keys(users.data).map((key) => {
        return {...users.data[key], id: key}
    })))
}

export function* createUserSaga(action) {
    yield createUserAPI(action.user)
    yield put(addUserSlice(action.user))
}

export function* updateUserSaga(action) {
    yield updateUserAPI(action.user)
    yield put(editUserSlice(action.user))
}

export function* deleteUserSaga(action) {
    yield deleteUserByIdAPI(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUserAsync() {
    yield takeEvery(GET_USER, getUserSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserSaga)
}