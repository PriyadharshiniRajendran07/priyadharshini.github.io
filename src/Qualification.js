import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiFontFamily } from "react-icons/bi";
function Qualification() {
  const paperStyle = {
    backgroundColor: "#7f787817",
    color: "black",
    padding: "0px",
    textAlign: "center",
    borderRadius: "15px",
    borderColr: "black",
    display: "flex",
    flexDirection: "column",
    marginLeft:"20px",
  
  };
  const standStyle = {
    fontSize: "1.2em",
    fontFamily:"cursive",
    fontWeight: "750",
    padding:".2em",
    margin:".3em"
  };
  const dat_per_Style = {
    fontSize: ".8em",
    fontWeight: "500",
    margin: ".8em",
    padding:"0em"
  };
  const schStyle = {
    fontSize: ".8em",
    fontWeight: "650",
    margin: ".8em",
    padding:".1em"
  };
  const atag ={
    color: "black", 
    textDecoration: "none"
  }

  return (
    <div>
      <div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ffffffd4",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

          }}
        >
          <Grid container spacing={2}>
            <Grid items xs={5} >
              <div style={{display:"flex",height:"100%",justifyContent:"center",alignItems:"center",fontSize:"3em",fontWeight:"400"}}>
              <GiGraduateCap/>
              EDUCATION
              </div>
             
            </Grid>
            <Grid items xs={6} alignItems="center">
              <div style={{ padding: "0px" }}>
                <Paper style={paperStyle} elevation={3}>
                  <p style={dat_per_Style}> 06/2019 - Present</p>
                  <p style={standStyle}>
                    <FaUniversity />
                    &nbsp; &nbsp;Bachelor of Science - Computer Science
                  </p>
                  <a
                    href="https://www.kgcas.com/"
                    target="_blank"
                    style={atag}
                  >
                    <p style={schStyle}>KG College of Arts and Science</p>
                  </a>
                </Paper>
                <br />
                <Paper style={paperStyle} elevation={1}>
                  <p style={dat_per_Style}>06/2018 - 06/2019</p>

                  <p style={standStyle}>
                    <FaSchool />
                    &nbsp; &nbsp; Higher Secondary Certificate(HSC)
                    <br />
                  </p>
                  <p style={dat_per_Style}>Pursued with 90.5%.</p>

                  <a
                    href="http://vimaljyothischool.org/#"
                    target="_blank"
                    style={atag}
                  >
                    <p style={schStyle}>
                      Vimal Jyothi Convent Matric Higher Secondary School
                    </p>
                  </a>
                </Paper>
                <br />
                <Paper style={paperStyle} elevation={3}>
                  <p style={dat_per_Style}>06/2017 - 06/2018</p>

                  <p style={standStyle}>
                    <FaSchool />
                    &nbsp; &nbsp; Secondary School Leaving Certificate(SSLC)
                  </p>
                  <p style={dat_per_Style}>Pursued with 93.8%.</p>
                  <a
                    href="http://vimaljyothischool.org/#"
                    target="_blank"
                    style={atag}
                  >
                    <p style={schStyle}>
                      Vimal Jyothi Convent Matric Higher Secondary School
                    </p>
                  </a>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default Qualification;
/*
style={{
          height: "550px",
          width: "800px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}*/
