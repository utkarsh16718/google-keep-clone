import React from 'react'
import { useState } from 'react'
import Icon from '@mui/icons-material/Add';


function CreateArea({onAdd}) {
    const [note, setnote] = useState({
        title: "",
        content: "",
    })
    const handlechange = (e) => {

        const { name, value } = e.target;
        setnote((preval) => {
            return { ...preval, [name]:value}

        })
    }
    const submit = (e) => {
        onAdd(note);
        setnote({
            title: "",
            content: "",

        })
        e.preventDefault();

    }
    console.log(note)
    return (
        <div>
            <form action="" onSubmit={submit}>
                <input type="text"
                    value={note.title}
                    onChange={handlechange}
                    placeholder='Title'
                    name='title' />
                <p>
                    <textarea name="content" value={note.content} onChange={handlechange} id="" cols="30" rows="10" placeholder='Write Your Note Here'></textarea>
                    <button onClick={()=>submit} ><Icon /></button>
                </p>
            </form>

        </div>
    )
}

export default CreateArea

