import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
// import { display } from "@mui/system";


function Input(props) {

    const [ hideTitle, setHideTitle ] = useState(true);

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

    function hideElements() {
        setHideTitle(false)
    }

    return (
        <form className="create-note">
            <input style={ {display: hideTitle && "none" } } onChange={handleChange} className="input-title" type="text" name="title" placeholder="Title" value={note.title} />

            <textarea onClick={hideElements} onChange={handleChange} className="input-content" name="content" type="text" placeholder="Take note..." value={note.content} cols="30" rows={ hideTitle ? 1 : 3}></textarea>

            <Zoom in={hideTitle? false : true}>
                <Fab onClick={(e)=> {
                    e.preventDefault();

                    props.handleNote(note);
                    
                    setNote({
                        title: "",
                        content: ""
                    });
                }} className="btn-add" color="primary" type="submit">
                    <AddIcon />
                </Fab> 
            </Zoom>  
        </form>
    )
}

export default Input;