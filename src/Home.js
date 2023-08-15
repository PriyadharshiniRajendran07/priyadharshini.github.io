import Grid from "@material-ui/core/Grid";
import { RiInstagramLine } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BsPersonBoundingBox } from "react-icons/bs";

function Home() {
  const screenstyle ={
    height: "100%"
  }
  const divStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignitems: "center",
   height:"calc( 100% - div_height )",
    textAlign: "center",
    position: "relative",
  };
  return (
    <div style={screenstyle}>
      <div style={divStyle}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <div style={{height:"590px"}}>
              <div style={{ color: "#1265e0" }}>
                <a
                  href="https://www.instagram.com/__priya_rajendran__"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <RiInstagramLine size="2em" color="#1265e0" />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/priyadharshinirajendran"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <GrLinkedinOption size="2em" color="#1265e0" />
                  &nbsp;&nbsp;&nbsp;
                </a>
                <a
                  href="https://github.com/Priyadharshini-Rajendran"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <GrGithub size="2em" color="#1265e0" />
                </a>
              </div>
              <div style={{color:"white" }}>
              <p style={{fontSize:"3em",fontFamily:"cursive",textAlign:"left",margin:".5em 2em"}} >
                Hi, 
                <br/>
                I'm Priyadharshini
              </p>
              <p style={{fontSize:"1.5em",fontFamily:"cursive",textAlign:"left",margin:"1em 2.5em"}}>A Student</p>
              
              </div>
            </div>
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}
export default Home;
