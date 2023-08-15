import Img from "./Learnathon.jpeg";
export default function Image() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Img} width="800px" height="800px" />
      </div>
    </div>
  );
}
