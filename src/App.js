import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo.js';

// We took this code out in 3.1, but then added back by the end of 3.1
const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer/>
    </div>
  );
}

// We added this code in 3.1 (Calling Functional Components), but then took it out by the end of 3.1:
// class App extends Component {
//   render() {
//     return (
//       <div>  
//         <FunctionalComponentDemo />
//       </div>
//     );
//   }
// }

export default App;
