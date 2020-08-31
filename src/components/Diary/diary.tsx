import React , { useState } from 'react'

import { store , addDairy } from '../../store/index'
import { Diaries } from '../../interface/diary'
 
import moment from 'moment'
export default function Diary(){

    const [content , setContent] = useState('')
    const [ tittle , setTittle ] = useState('')
    const [ids , setId] = useState(0)


    const valueSave = () => {
        var time = moment().format("MMM Do YY");
        var b = {id : ids , tittle : tittle , content : content , time: time}
        store.dispatch(addDairy(b))
        setId(ids+1)
    }
    return(
        <div>
            <div>
                <input type="text" onChange={(e) => { setTittle(e.target.value)}} />
            </div>
            <div>
                <textarea name="input" onChange={(e) => { setContent(e.currentTarget.value)}} cols= {30} rows={10}>write here</textarea>
            </div>
            <div>
                <button onClick={valueSave}>Save</button>
            </div>
        </div>
    )
}