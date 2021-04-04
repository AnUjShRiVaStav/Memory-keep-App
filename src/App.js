
import Header from "./Component/Header";
import Title from "./Component/Title";
import Note from "./Component/Note";
import { useState } from "react";
import Count from "./Component/Count";
import Footer from "./Footer";



function App(props) {
const[note,setNote] = useState([])

function addNote(newNote){
  setNote(preValue => {
    return [...preValue, newNote]
  
  })
}

function DeleteNote(id){
  setNote(preValue => {
    return [...preValue.filter( (note,index) =>
     index !== id )]
  })
}

  return (
    <div className="App">
     
      <Header />
    <Count 
    count = {
      note.length === 0
      ?'You dont have any data yet!'
      :`Showing ${note.length} Note in data`

    }

    />
      <Title onAdd = {addNote} />
      {note.map(( note,index) => (
        <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete= {DeleteNote}

      />
      ))}

<Footer />

    </div>
  );
}

export default App;
