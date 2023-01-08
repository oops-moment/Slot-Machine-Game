import react from "react";
import "./index.css";

const Slotm = (props) => {
  console.log("hi");
  
  if (props.x == props.y && props.y == props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <br/>
          <h1>SLOT IS MATCHING </h1>
          <br/>
          <hr/>
        </div>
      </>
    
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <br></br>
          <h1>SLOT IS NOT MATCHING </h1>
          <br/>
          <hr/>
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        {" "}
        Welcome to{" "}
        <span style={{ fontWeight: "bold" ,backgroundColor:"yellow" , fontStyle:"italic" }}>  🎰 Slot MAchine game  🎰 </span>{" "}
      </h1>
      <div className="slotMachine">
       
          <Slotm x= " 🌓 " y= "🏑 " z="🦒 "
          />
          <Slotm x="🔥" y ="🔥" z= "🔥"/>
          <Slotm z="😻 " x= "🦒 " y="🏑"/>
          <Slotm z= "😻 " x="😻 " y="😻 " />
        
      </div>
    </>
  );
};
export default App;
