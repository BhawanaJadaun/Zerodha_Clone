import React from 'react'
import {Routes,Route} from "react-router-dom"
import WatchList from "./WatchList.jsx"
import Summary from "./Summary.jsx"
import Orders from "./Orders.jsx"
import Holdings from "./Holdings.jsx"
import Positions from "./Positions.jsx"
import Funds  from "./Funds.jsx"
import Apps from "./Apps.jsx"
import {GeneralContextProvider} from "./GeneralContext.jsx"
const Dashboard = () => {
  return (
 <div className="dashboard-container">
  <GeneralContextProvider>
  <WatchList/>
  </GeneralContextProvider>

<div className="content">
  <Routes>
    <Route exact path = "/" element = {<Summary/>}></Route>
    <Route exact path = "/orders" element = {<Orders/>}></Route>
    <Route exact path = "/holdings" element = {<Holdings/>}></Route>
    <Route exact path = "/positions" element = {<Positions/>}></Route>
    <Route exact path = "/funds" element = {<Funds/>}></Route>
    <Route exact path = "/apps" element = {<Apps/>}></Route>
  </Routes>
</div>
 </div>
  )
}

export default Dashboard