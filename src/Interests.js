import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import paperStyle from "./Certifications";
import { RiCodepenFill } from "react-icons/ri";
import { VscDebugAlt } from "react-icons/vsc";
import { BiCycling } from "react-icons/bi";
import { GiShuttlecock } from "react-icons/gi";
import { GiVolleyballBall } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FiActivity} from "react-icons/fi";

function Interests() {
  const dividerStyle = {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    flexdirection: "column",
  };
  const paperStyle = {
    backgroundColor: "transparent",
    color: "white",
    padding: "0em",
    textAlign: "center",
    borderRadius: "2.5em",
    borderColor: "white"
  };
  const horiDivStyle = {
    backgroundColor: "#0b46ed30",
    width: "75%",
    height: ".09em ",
    display: "flex",
    justifyContent: "center",
    flexdirection: "column",
    marginLeft: "15%",
  };
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "80vh",
    alignContent: "space-evenly",
    fontSize: "1.5em"
  };
  
  const webdesign = {
    backgroundColor: "#b8465d",
    borderRadius: "50%",
    width: "2em",
    height: "2em",
    padding: ".2em",
    margin: ".5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E362F",
  };
  const debug = {
    backgroundColor: "#4fb846",
    borderRadius: "50%",
    width: "2em",
    height: "2em",
    padding: ".2em",
    margin: ".5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E362F",
  };
  const stycycle = {
    backgroundColor: "#46b8a6",
    borderRadius: "50%",
    width: "2em",
    height: "2em",
    padding: ".2em",
    margin: ".5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E362F",
  };
  const Shuttlecock = {
    backgroundColor: "#aeb846",
    borderRadius: "50%",
    width: "2em",
    height: "2em",
    padding: ".2em",
    margin: ".5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E362F",
  };
  const VolleyBall = {
    backgroundColor: "#b84646",
    borderRadius: "50%",
    width: "2em",
    height: "2em",
    padding: ".2em",
    margin: ".5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E362F",
  };
  const Music = {
    backgroundColor: "#b88746",
    borderRadius: "50%",
    width: "2em",
    height: "2em",
    padding: ".2em",
    margin: ".5em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#3E362F",
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
          }}
        >
          <div  style={{
                  fontSize: "2em",
                  justifyContent: "center",
                  display: "flex",
                  fontWeight: "bold",
                  color:"white",
                  padding:".5em .5em",
                  margin:"1em 1em"
                }}
          >
            <FaWpexplorer size="1.5em"/>INTERESTS</div>
          <Grid container spacing={2} justify="center">
            <Grid item xs={5}>
            <div style={divStyle}>
              <Paper style={paperStyle} variant="outlined">
              <div style={{ textAlign: "center", fontSize: "1.5em", padding: "1em" }}>
                    <FiActivity size="1.2em"/>Activities</div>
                  <p style={{ fontSize: "1em", padding: "0em", margin: ".3em" }}>
                    D/Cipher Hackathon
                  </p>
                  <p style={{ padding: "0em", fontSize: ".8em" }}>2 day hackathon for developing a website by
                    KiTE</p>
                  <Divider style={horiDivStyle} />
                  <p>Honoured and awarded for Proficiency in first semester.</p>
                  <Divider style={horiDivStyle} />
                  <p>Winner of Debugging Competition</p>
                
              </Paper>
              </div>
            </Grid>

            <Grid item xs={5}>
              <div style={divStyle}>
                <Paper style={paperStyle} variant="outlined">
                  <div style={{ textAlign: "center", fontSize: "1.5em", padding: "1em" }}>
                    <AiOutlineFieldTime size="1.2em"/>My Hobbies</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={webdesign }>
                      <RiCodepenFill size="1em " />
                    </div>
                    <p style={{ fontSize: "medium" }}>Web Designing</p>
                    <div style={debug}>
                      <VscDebugAlt size="1em " />
                    </div>
                    <p style={{ fontSize: "medium" }}>Debugging</p>
                    <div style={stycycle } >
                      <BiCycling size="1em" />
                    </div>
                    <p style={{ fontSize: "medium", padding: "0em" }}>Cycling</p>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={Shuttlecock}>
                      <GiShuttlecock size="1em " />
                    </div>
                    <p style={{ fontSize: "medium" }}>Shuttlecock</p>
                    <div style={VolleyBall}>
                      <GiVolleyballBall size="1em " />
                    </div>
                    <p style={{ fontSize: "medium" }}>Volley Ball</p>
                    <div style={Music}>
                      <FaHeadphonesAlt size="1em" />
                    </div>
                    <p style={{ fontSize: "medium" }}>Music</p>
                  </div>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default Interests;
