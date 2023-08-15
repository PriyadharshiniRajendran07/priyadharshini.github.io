import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { GrHtml5 } from "react-icons/gr";
import { GrCss3 } from "react-icons/gr";
import { BiCopyright } from "react-icons/bi";
import { CgCPlusPlus } from "react-icons/cg";
import { SiJava } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { GrOracle } from "react-icons/gr";
import { BsUiChecksGrid } from "react-icons/bs";   

function Skills() {
  const divStyle = {
    textAlign: "center",
    width: "12vw",
    height: "30vh",
  };
  const paraStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    margin: "0px",
  };
  const innerPara = {
    margin: "0px",
    fontSize: "20px",
    fontWeight: "500",
  };

  return (
    <div>
      <div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#00000080",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height:"600px"
          }}
        >
          <div>
            <div style={{
                  fontSize: "2em",
                  justifyContent: "center",
                  display: "flex",
                  fontWeight: "bold",
                  color:"white",
                  padding:".5em .5em",
                  margin:"1em 1em"
                }}>
                <div><BsUiChecksGrid/> TECH - SKILLS</div>
                
                
               
              
            </div>
            <Grid container spacing={4} justify="center">
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#61aab3",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GrHtml5 size="70px" />
                    <br />
                    <p style={paraStyle}>HTML</p>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#fbe5b9cf",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GrCss3 size="70px" />
                    <br />
                    <p style={paraStyle}> CSS</p>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#f8aa5cd4",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BiCopyright size="70px" />
                    <br />
                    <p style={paraStyle}> C </p>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#72e443b3",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CgCPlusPlus size="70px" />
                    <br />
                    <p style={paraStyle}> C++</p>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
          <br />
          <div>
            <Grid container spacing={4} justify="center">
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#e9c31df2",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <SiJava size="70px" />
                    <br />
                    <p style={paraStyle}>Java</p>
                    <p style={innerPara}>Basics</p>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#ec8104ed",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GrReactjs size="70px" />
                    <br />
                    <p style={paraStyle}> React JS </p>
                    <p style={innerPara}>Basics</p>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={6} sm={2}>
                <div style={divStyle}>
                  <Paper
                    style={{
                      backgroundColor: "#dd2f42d9",
                      height: "25vh",
                      padding: "10px 10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GrOracle size="70px" />
                    <br />
                    <p style={paraStyle}>Oracle</p>
                    <p style={innerPara}>Basics</p>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
