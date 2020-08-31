import React from 'react'
import { useSelector } from 'react-redux'
import { Diaries } from '../../interface/diary'


export default function Displaydiary() {

    const diary = useSelector((state: Diaries[]) => state)                  
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