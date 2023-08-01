# React Router

## Set-Up
1. npm install react-router-dom
2. in Main.jsx, wrap <App /> with <BrowserRouter>
3. import {Routes, Route} from "react-router-dom"

## Components
  <Routes> is a container for all <Route> components
  <Route> 
    path="subdirectory" handles which component gets rendered when a url contains the passed subdirectory
    element={component} handles which component gets rendered when the subdirectory is called
  <Link> component allows navigating to different pages without losing variables
  useNavigate() returns function for a hook that allows developer to pass a subdomain
    - note: declare a variable to use this b/c useNavigate() only returns the function