import React, { useState,useEffect } from 'react'

function TextForm({mode,showAlert,heading}) {
    const [text, setText] = useState('');

    const handleUptext = () => {

        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Conver to UpperCase!","success");
    }
    const handleLotext = () => {

        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Conver to LowerCase!","success");
    }

    const handleCleartext = () =>{
        let newText = "";
        setText(newText);
        showAlert("Text its clear!","success");
    }

    const handleOnChange = (event) => {

        setText(event.target.value);

    }

    const handleCopytext = () =>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Text copy!","success");
    }
    const handleExtraspace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Remove extra space!","success");
    }

    const handleFirLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = []
        newText.forEach((element) => {
          let afterUp = element[0].toUpperCase();
          afterUp = afterUp.concat(element.substring(1))
          finalArr.push(afterUp);
        })
        setText(finalArr.join(" "));

        showAlert("Conver to firstlatter capital!","success");
      }

    //   const onAlternatingCase = () => {
    //     let newtext = ""
    //     for (let index = 0; index < text.length; index++) {
    //         if ((index % 2) === 0) {
    //             newtext += text[index].toLowerCase()
    //         }
    //         else {
    //             newtext += text[index].toUpperCase()
    //         }

    //     }
    //     setText(newtext)
    // }

    useEffect(() => {
        console.log("mode2",mode)
          }, []);

    return (
        <>
            <div className="container" style={{color: mode === 'dark'?'white':'#042743'}}>
                <h3>{heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: mode === 'dark'?'gray':'white',
                color: mode === 'dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUptext}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLotext}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCleartext}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopytext}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handleFirLetterUp}>First Later Capital</button>
              
            </div>
            <div className="container my-3" style={{color: mode === 'dark'?'white':'#042743'}}>
                <h4 style={{color: mode === 'dark'?'white':'#042743'}}>Your text Summary</h4>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h4>Privew text</h4>
                <p>{text.length>0?text:"Enter something in the textbox about to priview it here"}</p>
            </div>
        </>
    )
}

export default TextForm