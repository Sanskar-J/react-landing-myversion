// import Accord from './Accord';
// import Courses from './Courses';

import 'bootstrap/dist/css/bootstrap.min.css';
import RoundNav from './RoundNav';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import SideNav from './Sidenav';
function App() {
  return (
  <div className="main">
    
    {/* <Accord/> */}
    {/* <Courses /> */}
    <div className="logo">LOGO</div>
    <RoundNav />
    <div className="container">
      <SideNav className="nav-container"/>
      <Home className="pg1"/>
      <About className="pg2"/>
      <Contact className="pg3"/>
    </div>
    </div>
  );
}

export default App;
