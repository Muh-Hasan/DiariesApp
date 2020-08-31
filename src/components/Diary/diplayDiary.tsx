import React , { useState } from 'react'
import { useSelector } from 'react-redux'
import { Diaries } from '../../interface/diary'
import { store , remove } from '../../store/index'

export default function Displaydiary() {

    const diary = useSelector((state: Diaries[]) => state)          
    const [edit, setedit] = useState(false);
    

    var a = diary.map((dia, i) => {
        return (
            <div key={dia.id}>
                <div>
                    <h6>Tittle: {dia.tittle} </h6>
                    <h6>Date: {dia.time} </h6>
                </div>
                <div>
                    <p>{dia.content}</p>
                </div>
                <button value={dia.id}>
                    edit
                </button>
                <button onClick={(e) => store.dispatch(remove(state))}>
                    delete
                </button>
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