import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Languages(){
    let [loader,setLoader] = useState();
    let [languages,setLanguages] = useState();

    const connectToServer = async () => axios.get('http://localhost:8001/Languages')
                                             .then(res=>{
                                                console.log(res.data);
                                                setLanguages(res.data);
                                                setLoader(false)
                                             })
  useEffect(()=>{
    connectToServer();
  },[])
    return(
        <>
        This is Technical Languages page
        <hr/>
        <h6>C</h6>
        <hr/>
        <h6>C++</h6>
        <hr/>
        <h6>PGDCA</h6>
        <hr/>
        <h6>JAVA</h6>
        <hr/>
        </>
    )
}