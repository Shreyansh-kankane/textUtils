
import React, {useState} from 'react'

export default function TextForm(props){

    const [text,setText] = useState('');

    const count=(text)=>{
        let c = text.trim().split(/\s+/).length;
        if(text.length===0){
            return {chars:0,word:0};
        }else if(text[text.length-1]===' '){
            return {chars:text.length-1,word:c};
        }else{
            return {chars:text.length,word:c};
        }
    };
    const handleUpClick = ()=>{
        if(text.length===0){
            props.showAlert("Text-box is empty","warning");
            return;
        }
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("changed to upper case successfully","success");
    };
    const handleLoClick=(event)=>{
        if(text.length===0){
            props.showAlert("Text-box is empty","warning");
            return;
        } 
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("changed to lower case successfully","success");
    }
    const handleClearClick=(event)=>{
        if(text.length===0){
            props.showAlert("Text-box is empty","warning");
            return;
        }
        let newtext="";
        setText(newtext);
        props.showAlert("Textbox cleared successfully","success");
    }
    const handleExtraSpace =(event)=>{
        if(text.length===0){
            props.showAlert("Text-box is empty","warning");
            return;
        } 
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed successfully","success");
    }
    const handleCopyClick=(event)=>{
        if(text.length===0){
            props.showAlert("Text-box is empty","warning");
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard successfully","success");
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    
    return (
        <>
        
        <div className="form-group container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <label htmlFor="mybox">{props.title}</label>
            <textarea className="form-control gcse-search" id="mybox" rows="10" value={text} onChange={handleOnChange} ></textarea>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleClearClick}>Clear text</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleCopyClick}>Copy text</button>
            <button type="button" className="btn btn-secondary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{count(text).word} words and {count(text).chars} characters</p>
            <p>{text.length===0?0:0.008* count(text).word} min time required to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text to textbox to get preview"}</p>
        </div>
        <script async src="https://cse.google.com/cse.js?cx=3371b2e4a5d9c430f">
        </script>
        </>
    );
};

// text="lcbwvwn" // wrong way
// setText("Hello") // right way