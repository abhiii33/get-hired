import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jobdetail from './components/Jobdetails.jsx'
import Home from './pages/Home.jsx'
import JobSearch from './pages/Jobsearch.jsx'
import {Provider} from 'react-redux'
import Savedjobs from './components/Savedjobs.jsx'
import store from './store/store.js'
import LoginScreen from "./pages/LoginScreen.jsx"
import Login2 from "./pages/Login2.jsx"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/home",
    element:<Home/>
  },{
    path:"/jobsearch",
    element:<JobSearch/>
  },{
    path:"/jobsearch/:slug",
    element:<Jobdetail/>
  },{
    path:"/savedjobs",
    element:<Savedjobs/> 
  },{
    path:"/login",
    element:<LoginScreen/>
  },{
    path:"/login2",
    element:<Login2/>
  }]
}])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <Provider store={store}>
          <RouterProvider router={router}/>
          </Provider>
        </React.StrictMode>,
)
