import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: "+ text)
    let newtext = text.toUpperCase();
    setText(newtext)
    // setText("you have clicked on handleUpClick")
    props.showAlert("Coverted to uppercase!","success");
  }

  const handlelowClick = ()=>{
    // console.log("Uppercase was clicked: "+ text)
    let newtext = text.toLowerCase();
    setText(newtext)
    // setText("you have clicked on handleUpClick")
    props.showAlert("Coverted to lowercase!","success");
  }
  const handleclearClick = ()=>{
    // console.log("Uppercase was clicked: "+ text)
    let newtext = "";
    setText(newtext)
    // setText("you have clicked on handleUpClick")
    props.showAlert("Text clear","success")
  }

  const handleOnChange = (Event)=>{
    // console.log("On Change")
    setText(Event.target.value);
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copy ","success")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra spaces","success")
  }

  const [text, setText] = useState(' ')
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnChange}  style={{backgroundColor:props.mode ==='dark'?'gray':'white', color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-outline-danger ms-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-outline-danger ms-2" onClick={handlelowClick}>Convert to Lowercase</button>
          <button className="btn btn-outline-danger ms-2" onClick={handleclearClick}>Clear text </button>
          <button className="btn btn-outline-danger ms-2" onClick={handleCopy}>Copy text </button>
          <button className="btn btn-outline-danger ms-2" onClick={handleExtraSpaces}>Remove Extra spaces </button>
    </div>
    <div className="container my-3 " style={{color:props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length}words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} Mintues read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
