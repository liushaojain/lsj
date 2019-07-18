import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './style.css'
import Home from './Home/Home'


ReactDOM.render(<Router>

    <Router forceRefresh={false}>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            
        </div>
    </Router>
    
</Router>,document.getElementById('root'));

