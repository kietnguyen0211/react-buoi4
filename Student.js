import { RiChatDeleteLine } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

export default function Student(props){
    return(
        <div className="student">
            <span className={`${props.student.isComplete ? "complete" : ""}`}
            onClick={()=>props.toggleComplete(props.student.id)}
            >{props.student.name}</span>
            <GrEdit />
            <RiChatDeleteLine onClick={()=>{
                props.removeList(props.student.id)
            }}/>
        </div>
        
    )
}