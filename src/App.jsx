import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input"
import notes from "./notes";

function App() {
    function addNote(note) {
        console.log(notes, "first")
        notes.push(note);
        console.log(notes, "second")
    }


    return <div>
                <Header />
                <Input handleNote={addNote} />
                {notes.map(noteItem =>  (
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