import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Image from "./NIL2020";
import { GrCertificate } from "react-icons/gr";   
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Certifications() {
  const paperStyle1 = {
    backgroundColor:"#ebeaea",
    color: "black",
    padding: "8px 15px",
    textAlign: "center",
    borderRadius: "10px",
    borderColor:"#00000045"
    
  };
  const paperStyle2 = {
    backgroundColor:"#00000040",
    color: "black",
    padding: "8px 15px",
    textAlign: "center",
    borderRadius: "10px",
    borderColor:"#786c6cbd"
   
  };
  const dividerStyle = {
    backgroundColor: "#989898",
    width: "70%",
    height: "2px ",
    display: "flex",
    justifyContent: "center",
    flexdirection: "column",
    marginLeft: "15%",
  };
  const paraStyle = {
    fontSize: "20px",
    
  };
  
  return (
    <div>
      <div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <br />
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div
                style={{
                  fontSize: "2em",
                  justifyContent: "center",
                  display: "flex",
                  fontWeight: "bold",
                  color:"black",
                  padding:".5em .5em",
                  margin:"1em 1em"
                }}
              >
                <GrCertificate/>
              
               CERTIFICATIONS
                
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper style={paperStyle1} variant="outlined">
                <p style={{ fontSize: "1em" }}>
                  (On going) React JS Frontend Web Development for Beginners
                </p>
                <p>Certification by Udmey</p>
              </Paper>
             <br/>
            
              <Paper style={paperStyle2} variant="outlined">
                <p style={{ fontSize: "1em" }}>
                  NEW INDIA LEARNATHON - 2020 (1 month Course)
                </p>
                <p>
                  Completed 13 courses which includes Cloud Computing.
                  <br />
                  <br />
                  Certification by ICT ACADEMY .
                </p>
              </Paper>
              <br/>
              <Paper style={paperStyle1} variant="outlined">
                <p style={{ fontSize: "1em" }}>
                  Certified in HTML and Oracle.
                </p>
                <p>Certification by KGISL</p>
              </Paper>
            </Grid>

            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default Certifications;
