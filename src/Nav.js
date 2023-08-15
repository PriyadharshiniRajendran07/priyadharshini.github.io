import { isCompositeComponentWithType } from "react-dom/test-utils";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  
  return (
    
      
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "20px",
        listStyle: "none",
      }}
    >

       <ul className="nav-links">
         <a href="#home" style={navStyle}>
           Home
         </a>
         <a href="#qualification" style={navStyle}>
         Qualification
         </a>
         <a href="#skills" style={navStyle}>
         Skills
         </a>
         <a href="#certifications" style={navStyle}>
         Certifications
         </a>
         <a href="#interests" style={navStyle}>
         Interests
         </a>
        {/* <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/qualification" style={navStyle}>
          <li>Qualification</li>
        </Link>
        <Link to="/skills" style={navStyle}>
          <li>Skills</li>
        </Link>
        <Link to="/certifications" style={navStyle}>
          <li>Certifications</li>
        </Link>

        <Link to="/interests" style={navStyle}>
          <li>Interests</li>
        </Link> */}
      </ul> 
     
   </nav>
  );
}
export default Nav;
