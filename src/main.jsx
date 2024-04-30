import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Usercontextpovider from "./Context/Usercontextprovider.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
         <Provider store={store}>
    <Usercontextpovider>
        <App />
    </Usercontextpovider>
   </Provider>
    // </React.StrictMode>

)
