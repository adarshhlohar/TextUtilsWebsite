import React,{useState} from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const ClearText = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Clearing the text","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking.......","success");
    }

    const copyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const handleOnChange = (event) =>{
        // console.log("OnChange");
        setText(event.target.value);
    }

    const removeSpaces = ()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removing the spaces","success");
    }

    const [Text,setText] = useState("Enter the text here");
    // Text = "New text" //wrong way to change the state
    // setText("new Text");  //right way to change the state
    // console.log(Text);


return<div>
    <div className="container" style={props.mode === "dark"? {backgroundColor:"#0a1a29", color:"white"} : {backgroundColor:"white", color:"black"}}>
    <h3 className="my-2">{props.heading}</h3>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" data-gramm="false" rows="8" value={Text} onChange={handleOnChange} style={props.mode === "dark"? {backgroundColor:"grey", color:"white"} : {backgroundColor:"white", color:"black"}}wt-ignore-input="true"></textarea>
    </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick} >Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={ClearText} >Clear Text</button>
        <button className="btn btn-warning mx-2 my-2" onClick={speak} >Speak</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText} >Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeSpaces} >Remove Space</button>
    </div>
    <div className="container" style={props.mode === "dark"? {backgroundColor:"#0a1a29", color:"white"} : {backgroundColor:"white", color:"black"}}>
        <h3 className="my-2">Youre text Summary</h3>
        <p>Total word {Text.split(" ").length} and character {Text.length}</p>
        <p>{0.08 * Text.split(" ").length}  Minutes Read</p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text :  "Enter Text Above textBox to Preview it"}</p>
    </div>
</div>;

}
