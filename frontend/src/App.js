//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav } from 'reactstrap';
import { Component } from 'react';
import Books from './components/bookComponent';
import Homepage from './components/homeComponent';
import Aboutpage from './components/aboutComponent';
import AddBooks from './components/addBooks';
import Search from './components/searchComponent';

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
            <NavbarBrand href="/"><h1>Book Finder</h1></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/"><h5>Home</h5></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about"><h5>About</h5></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/books"><h5>View Books</h5></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/addBooks"><h5>Add Books</h5></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/search"><h5>Search</h5></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/imshawan/bookFinder-dps"><h5>Github</h5></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={Aboutpage} />
          <Route path="/books" component={Books} />
          <Route path="/addBooks" component={AddBooks} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
