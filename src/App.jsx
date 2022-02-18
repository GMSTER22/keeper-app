import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input"
import notes from "./notes";

function App() {
    //have to add a new state

    function addNote(note) {
        note = { 
            id: notes.length + 1,
            ...note 
        }

        notes.push(note);
        console.log(notes, "notes")
    }


    return <div>
                <Header />
                <Input handleNote={addNote} />
                {notes.map((noteItem) =>  (
                        <Note 
                            key={noteItem.id} 
                            title={noteItem.title} 
                            content={noteItem.content} 
                        />
                    )
                )}
                <Footer />
            </div>
}

export default App;