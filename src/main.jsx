import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jobdetail from './components/Jobdetails.jsx'
import Home from './pages/Home.jsx'
import JobSearch from './pages/Jobsearch.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
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
    path:"/job/:slug",
    element:<Jobdetail/>
  }]
}])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <Provider store={store}>
          <RouterProvider router={router}/>
          </Provider>
        </React.StrictMode>,
)
