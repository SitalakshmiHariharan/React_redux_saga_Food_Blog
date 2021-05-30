import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import FoodList from './Components/FoodList'
import Home from './Components/Home'
import Notfound from './Components/NotFound'
import FoodDetails from './Components/FoodDetails'

import {Route, Switch} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const path=['/','/foods'] 
const regPath=/food/;
const App =()=>{
    
    const currentPath=useLocation().pathname

    return (

        <div>          
           {path.includes(currentPath) || regPath.test(currentPath) ?<Header/>:null} 
           <Switch>
              <Route exact path='/' component={Home}></Route>             
              <Route path='/foods' component={FoodList}></Route>
              <Route path='/food/:id' component={FoodDetails}></Route>
              <Route component={Notfound}></Route>
           </Switch>    
           {path.includes(useLocation().pathname) ||regPath.test(currentPath) ?<Footer/>:null}
        </div>
      
        
    )
}

export default App