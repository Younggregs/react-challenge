import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'


    class App extends React.Component {
        render() {
          return (
            <Router>
              <div>
                <Route exact path="/" component={Home}/>
              </div>
            </Router>
           )
         }
       }

     ReactDOM.render(
       <App/>,
       document.getElementById('app')
     );
