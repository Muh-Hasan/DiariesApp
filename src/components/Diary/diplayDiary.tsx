import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Diaries } from '../../interface/diary'
import { store, remove } from '../../store/index'

export default function Displaydiary() {

    const diary = useSelector((state: Diaries[]) => state)

    const [edit, setedit] = useState(false);
    const [content, setContent] = useState('')
    const [tittle, setTittle] = useState('')

    var a = diary.map((dia, i) => {

        return (
            <div key={dia.id}>
                {edit ? <div>
                <input type="text" value={tittle} 
                 onChange={(e) => { setTittle(e.currentTarget.value)}} />
                <textarea cols={30} rows={10} value={content} onChange={(e) => { setContent(e.target.value)}}></textarea>
                </div> :
                    <div>
                        <div>
                            <h6>Tittle: {dia.tittle} </h6>
                            <h6>Date: {dia.time} </h6>
                        </div>
                        <div>
                            <p>{dia.content}</p>
                        </div>
                    </div>
                }
                <div>
                    <button value={dia.id} onClick={() => {
                        if(edit){
                            setTittle(dia.tittle)
                        }
                        setedit(!edit)
                    }} >{edit ? 'update' : 'edit'}</button>
                    <button onClick={() => store.dispatch(remove(dia.id))}>delete</button>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>list</h1>
            {a}
        </div>
    )
}