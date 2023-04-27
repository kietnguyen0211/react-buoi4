import { useState } from "react"
export default function AddForm(props){
    const [text,setText]=useState("")
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.addList(text);
            setText("")
        }}>
            <input type="text" value={text} placeholder="Enter your name" onChange={(e)=>{
                setText(e.target.value)
            }}></input>
        </form>
    )
}