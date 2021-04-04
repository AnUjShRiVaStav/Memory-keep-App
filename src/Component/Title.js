import { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';




function Title({onAdd}) { 

    const [isExpanded,setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(true);
    }

  const [note,setNote] = useState({
    title:'',
    content: '',
})

const handleInput = (e) => {

//   const value = e.target.value;
//   const name = e.target.value;

  const {name,value} = e.target; 
  
  setNote( (pervData) => {
      return {
          ...pervData,
          [name]: value,
      }
  })
}

 const handleSubmit = (e) => {
     onAdd(note);
     setNote({
         title: '',
         content: '',
     })
     e.preventDefault();

    
 }

    return (

<form  >
   
    
    {isExpanded &&(
        <input type = 'text'
    placeholder = 'Title'  
     name='title'
     value = {note.title}
     onChange = {handleInput}
     rows={isExpanded ? 3 : 1}
    />
    )}
    <p>
    <textarea
    placeholder='Take a note...'
    name='content'
    value= {note.content}
    onClick={handleExpand}
    onChange = {handleInput}
    >
    </textarea>
    </p>
    <button onClick = {handleSubmit}>
    <AddCircleIcon />
    </button>


</form>
   

    )
    }

    export default Title;