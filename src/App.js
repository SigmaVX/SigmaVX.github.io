import React, { Component, Suspense } from 'react';
import Layout from "./containers/Layout/Layout";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Spinner from './components/UI/Spinner/Spinner';

// React Lazy Loading
const Home = React.lazy(() => import("./containers/Home/Home"));
const Portfolio = React.lazy(() => import("./containers/Portfolio/Portfolio"));


class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <Layout>
          <Switch>
          
            {/* React Lazy Load*/}
              <Route 
              path="/portfolio" 
              render={()=>(
                <Suspense fallback={<Spinner/>} >
                  <Portfolio {...this.props}/>
                </Suspense>
              )}
            />

            {/* React Lazy Load*/}
            <Route 
              path="/" 
              render={()=>(
                <Suspense fallback={<Spinner/>} >
                  <Home {...this.props}/>
                </Suspense>
              )}
            />

            {/* Sends Unknow Routes To Home*/}
            <Redirect to="/"/>
            
          </Switch>
        </Layout>
      </BrowserRouter>
       
    );
  }
}

export default App;
