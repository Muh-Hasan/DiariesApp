import React , { useState } from 'react'

export default function Diary(){

    const [content , setContent] = useState('')
    const [ tittle , setTittle ] = useState('')
    const [id , setId] = useState(0)

    const valueSave = () => {
        console.log(content);
        console.log(tittle);
        console.log(id);
        setId(id+1)
    }
    return(
        <div>
            <div>
                <input type="text" onChange={(e) => { setTittle(e.target.value)}} />
            </div>
            <div>
                <textarea name="input" onChange={(e) => { setContent(e.target.value)}} cols= {30} rows={10}>write here</textarea>
            </div>
            <div>
                <button onClick={valueSave}>Save</button>
            </div>
        </div>
    )
}