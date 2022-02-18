import React, { useState } from "react";


function Input(props) {

    const [ note, setNote ] = useState( { 
        title: "",
        content: ""
    });
    
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return { 
                ...prevNote,
                [name]: value
            }
        })
    }

    return (
        <form className="input">
            <input onChange={handleChange} className="input-title" type="text" name="title" placeholder="title" value={note.title} />
            <input onChange={handleChange} className="input-content" name="content" type="text" placeholder="Take note..." value={note.content} />
            <button onClick={(e)=> {
                e.preventDefault();

                props.handleNote(note);
                
                setNote({
                    title: "",
                    content: ""
                });
            }} className="btn btn-add" type="submit">Add</button>            
        </form>
    )
}

export default Input;