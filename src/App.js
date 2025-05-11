import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For dropdowns, toggler, etc.
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
  
    <NavBar page1= "Home" page2 ="Learn" page3="Budget" page4="Expense" page5="Investment" page6="Community"/>
  );
}

export default App;
