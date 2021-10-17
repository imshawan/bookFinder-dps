import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav } from 'reactstrap';
import { Component } from 'react';
import Books from './components/bookComponent';
import Homepage from './components/homeComponent';
import Aboutpage from './components/aboutComponent';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 render() {
    return (
      <div className="App">
      <Router>
        <Navbar dark color="dark" expand="md">
          <div className="container">
            <NavbarBrand href="/"><h2>Book Finder App</h2></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/"><h6>Home</h6></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about"><h6>About</h6></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/books"><h6>View Books</h6></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/addBooks"><h6>Add Books</h6></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/search"><h6>Search</h6></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={Aboutpage} />
          <Route path="/books" component={Books} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
