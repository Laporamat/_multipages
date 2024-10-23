import "./Components.css";
import Add from "../../Conclusion/Add/Add";
import Counter from "../../Conclusion/Counter/Counter";
import Temp from "../../Conclusion/Temp/Temp";
import Timer from "../../Conclusion/Timer/Timer";

function Components() {
    return (
        <div className="main-container"> 
            <Counter />
            <Timer />
            <Add />           
            <Temp />           
        </div>
    );
}

export default Components;
