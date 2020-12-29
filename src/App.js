import React, { Component } from 'react';
import Apicall from './Apicall';
import CreateUser from './CreateUser';
import FtableData from './FtableData';
import Functional from './Functional';
import Lifecycle from './Lifecycle';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export default class App extends Component {

  render() {
    return (
     
      <div className='App'>
         <Router>
       
        
        
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="Lifecycle">Lifecycle</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="CreateUser">CreateUser</Nav.Link>
      <Nav.Link href="FtableData">FtableData</Nav.Link>
      <Nav.Link href="functional">functional</Nav.Link>
      <Nav.Link href="Apicall">Apicall</Nav.Link>
    </Nav>
   
  </Navbar>
<Switch>
  <Route exact path= '/Lifecycle'>
    <Lifecycle/>
  </Route>
  <Route exact path= '/CreateUser'>
    <CreateUser/>
  </Route>
  <Route exact path= '/FtableData'>
    <FtableData/>
  </Route>
  <Route exact path= '/functional'>
    <Functional/>
  </Route>
  <Route exact path= '/Apicall'>
    <Apicall/>
  </Route>
</Switch>

 
        </Router>
      </div>
    )
  }
}
