import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "Components/PrivateRoute"
import Login from "Containers/Login"
import Home from 'Containers/Home'
import AboutUs from 'Containers/AboutUs'
import Overview from 'Containers/Overview'
import HelpCenter from 'Containers/HelpCenter'
import Payroll from 'Containers/Payroll'
import HelpCenterDetail from 'Containers/HelpCenterDetail'
import Lenders from 'Containers/Lenders'

const App = () => {
  return (
    <div>
      <Router>
        <PrivateRoute path="/app" component={Home}/> 
        <PrivateRoute path="/app/about-us" component={AboutUs}/> 
        <PrivateRoute path="/app/overview" component={Overview}/> 
        <PrivateRoute path="/app/help-center" component={HelpCenter}/> 
        <PrivateRoute path="/app/payroll" component={Payroll}/>
        <PrivateRoute path="/app/help-center/detail" component={HelpCenterDetail}/>
        <PrivateRoute path="/app/lenders" component={Lenders}/>
        <Login path="/app/login" />
      </Router>
    </div>
  )
}

export default App