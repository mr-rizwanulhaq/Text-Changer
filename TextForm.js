import React,{useState} from 'react';



export default function TextForm(prop) {

    const [text, setText] = useState(""); 

   
  

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);

        if (text==="") {
            prop.showAlert("Text area is empty", "warning");
            
        } else {
            prop.showAlert("Text has been converted to UpperCase", "success")
        }
        
    }

    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);

        if (text==="") {
            prop.showAlert("Text area is empty", "warning");
            
        } else {
             prop.showAlert("Text has been converted to LowerCase", "success")
        }
       
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const extraSpace=(event)=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);

        if (text==="") {
            prop.showAlert("Text area is empty", "warning");
            
        } else {
            prop.showAlert("Extra spaces has been removed", "success")
        }
        
    }


  return (
    <>
        <div className='container' style={{color: prop.mode==='dark'?'white':'black'}}>
            <h1>{prop.heading}</h1>
            <div className="mb-3" style={{color: prop.mode==='dark'?'white':'black'}}>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: prop.mode==='dark'?'#5A5A5A':'white', color: prop.mode==='dark'?'white':'black'}}></textarea>
            </div>
        </div>

        <div className="container">
            <button type="button"className={`btn btn-${prop.btnmode} mx-1 my-1`} onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="button"className={`btn btn-${prop.btnmode} mx-1 my-1`} onClick={handleLowClick}>Convert To LowerCaser</button>
            <button type="button"className={`btn btn-${prop.btnmode} mx-1 my-1`} onClick={extraSpace} >Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: prop.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Chracters , {text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
            <p>Minuts Read {0.008 *text.split(" ").length}</p>
            <h1>Your Text Summary</h1>
            <p>{text.length? text:"Enter your text to the above box to preview it here"}</p>

        </div>
    </>

  )
}

