import { configureStore,combineReducers } from "@reduxjs/toolkit"; 
import cartReducer from './cartRedux'
import userReducer from './cartRedux'
import {useDispatch} from 'react-redux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({user:userReducer,cart:cartReducer});
const persistedReducer = persistReducer(persistConfig, userReducer)
  


export const store =()=>configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)