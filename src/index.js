import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './store'

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
      <Provider store={store}>
       <App/>
      </Provider>,
       document.getElementById('app')
     );
