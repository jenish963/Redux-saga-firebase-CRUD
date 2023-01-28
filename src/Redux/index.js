import { watchUserAsync } from "./Sagas/types/user"
import { all } from "redux-saga/effects"

export function* rootSaga(){
    yield all([
        watchUserAsync()
    ])
}