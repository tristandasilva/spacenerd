import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers'
import { productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
   orderCreateReducer,
   orderDetailsReducer,
   orderListUserReducer,
   orderPayReducer,
} from './reducers/orderReducers'
import {
   userLoginReducer,
   userRegisterReducer,
   userDetailsReducer,
   userUpdateProfileReducer,
   userListReducer,
   userDeleteReducer,
   userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   cart: cartReducer,
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateProfileReducer,
   userList: userListReducer,
   userDelete: userDeleteReducer,
   userUpdate: userUpdateReducer,
   orderCreate: orderCreateReducer,
   orderDetails: orderDetailsReducer,
   orderPay: orderPayReducer,
   orderUserList: orderListUserReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
   ? JSON.parse(localStorage.getItem('cartItems')) // Only strings can be stored in local storage, so we must parse it
   : []

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo')) // Only strings can be stored in local storage, so we must parse it
   : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
   ? JSON.parse(localStorage.getItem('shippingAddress'))
   : {}

const initialState = {
   cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
   },
   userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
)

export default store
