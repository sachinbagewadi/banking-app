import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom' 
import Home from './Home.js'
import Create from './Create.js'
import Login from './Login.js'


function App() {
    return(
        <BrowserRouter>
        <div>
            <h2>Banking System</h2>
            <Link to="/">Home||</Link>
            <Link to="/create">Create Account||</Link>
            <Link to="login">LogIn</Link>

 
            <Route path="/" component={Home} exact={true} />
            <Route path="/create" component={Create} />
            <Route path="/login" component={Login}  />


        
        </div>
        
        </BrowserRouter>
    )
}

export default App