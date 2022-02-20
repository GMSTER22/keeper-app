import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input";

function App() {
    const [ notes, setNotes ] = useState([])

    function addNote(note) {
        note = { 
            id: notes.length + 1,
            ...note 
        }

        setNotes(prevNotes => {
            return [
                ...prevNotes,
                note
            ]
        })
    }

    function deleteNote(id) {

        setNotes(prevNotes => {
            return prevNotes.filter( (note) => {

                return id !== note.id;

            });
        })
    }


    return <div>
                <Header />
                <Input handleNote={addNote} />
                {notes.map((noteItem) =>  (
                        <Note 
                            key={noteItem.id} 
                            id={noteItem.id} 
                            title={noteItem.title} 
                            content={noteItem.content} 
                            onDelete={deleteNote}
                        />
                    )
                )}
                <Footer />
            </div>
}

export default App;