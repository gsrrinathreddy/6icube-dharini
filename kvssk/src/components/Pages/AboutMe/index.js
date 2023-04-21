import {useState,useEffect} from 'react';
import axios from 'axios';


export default function AboutMe(){
    let [loader,setLoader] = useState(true);
    let [aboutme,setAboutMe] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/AboutMe')
                                             .then(res=> {
                                                console.log(res.data);
                                                setAboutMe(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])
                                      
    return(
        <>
        This is AboutMe page 
        <hr/>
        <h4>NAME : KATIVARAPU.DHARANI</h4>
        <br/>
        <h5>FatharName : K.RAMESH BABU</h5>
        <br/>
        <h5>MotherName : K.JAYA SREE</h5>
        <br/>
        <h5>email id : kativarapudharani@gmail.com</h5>
        <br/>
        <h5>Phone Num :93477xxxx</h5>
        <br/>
        <h5>Addess : REPALLE. Bapatla Dist</h5>
        </>
    )
}