import {useState} from "react"
import AddForm from "./AddForm"
import Student from "./Student"
import {v4 as uuidv4} from "uuid"
export default function StudentList(){
    // const vd=[
    //     {id:1,name:"Meo",isDel:false},
    //     {id:2,name:"Chuot",isDel:false},
    // ]
    const [list,setList]=useState([
        {id:1,name:"Meo",isComplete:false},
        {id:2,name:"Chuot",isComplete:false},
    ])
    // const [list,setList]=useState();
    const toggleComplete=(id)=>{
        setList(
            list.map((value)=>value.id === id ? {...value,isComplete:!value.isComplete}:value)
        )
    }
    
    const addList=(textName)=>{
        setList([...list,{id:uuidv4(),name:textName,isComplete:false}])
    }
    const removeList=(id)=>{
        const newList=list.filter((stu)=>stu.id!==id);
        setList(newList);
    }
    // const editList=(textName)=>{
    //     setList([{id:3,name:textName,isComplete:false}])
    // }
    return(
        <div className="box">
            <AddForm addList={addList}/>
            {
                list.map((value,key)=>{
                    return(
                        <Student toggleComplete={toggleComplete}  student={value} key={key} removeList={removeList}/>
                    )
                })
            }
        </div>
    )
}