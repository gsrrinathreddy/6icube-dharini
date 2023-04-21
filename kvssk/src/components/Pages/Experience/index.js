import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Experience(){
    let [loader,setLoader] = useState();
    let [experience,setExperience] = useState();

    const connectToServer = async () => axios.get('http://localhost:8001/Experience')
                                             .then(res=>{
                                                console.log(res.data);
                                                setExperience(res.data);
                                                setLoader(false)
                                             })
  useEffect(()=>{
    connectToServer();
  },[])
    return(
        <>
        This is Experience page
        <hr/>
        <h3>NO Experience</h3>
        <h4>I AM FRESHER</h4>
        </>
    )
}