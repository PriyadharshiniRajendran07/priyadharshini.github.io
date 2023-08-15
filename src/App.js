import "./App.css";
// import hcbgImage from "./hcbg.jpg";
import Nav from "./Nav.js";
import Home from "./Home";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Certifications from "./Certifications";
import shutterstock_407554567 from "./shutterstock_407554567.jpg";

import Interests from "./Interests";


function App() {
  return (
    <div>
      <div
        className="App"
        style={{
          backgroundImage: "url(" + shutterstock_407554567 + ")",
          backgroundSize: "cover",
          // height: "100vh",
          // color: "#f5f5f5",
        }}
      >
        <Nav/>
      <section id="home">
        <Home/>
      </section>
  
      <section  id="qualification">
        <Qualification/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section  id="certifications">
        <Certifications/>
      </section>
      <section id="interests">
        <Interests/>
      </section>
        
      </div>
    </div>
  );
}

export default App;

/*
<Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/qualification">
              <Qualification />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/certifications">
              <Certifications />
            </Route>
            <Route path="/nil2020">
              <NIL2020 />
            </Route>
            <Route path="/interests">
              <Interests />
            </Route>
          </Switch>
        </Router>
*/