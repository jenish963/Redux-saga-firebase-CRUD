import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit" 
import { rootSaga } from "."
import user from "./Slice/User"
import users from "./Slice/Users"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        user,
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store