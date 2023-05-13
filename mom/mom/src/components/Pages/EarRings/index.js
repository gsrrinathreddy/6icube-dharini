import axios from 'axios'
import { useState } from 'react'

export default function EarRings(){
    let[id,setId]=useState();
    let[title,setTitle]=useState();
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
        setId(res.data[1].id);
        setTitle(res.data[1].title);
console.log(res)
    })
    return(
        <>
        {id}
        <br/>
        {title}
        </>
    )
}