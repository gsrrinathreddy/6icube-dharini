import singing from './Assests/singing girl.jpg'
import dancing from './Assests/dancing girl.jpg'
import music from './Assests/music.jpg'
import { useState,useEffect } from 'react'
import axios from 'axios';
export default function Hobbies(){
    let [loaded,setLoader] = useState();
    let [hobbies,setHobbies] = useState();

    const connectToServer = async => axios.get('http://localhost:8001/Hobbies')
                                          .then(res=>{
                                           console.log(res.data);
                                           setHobbies(res.data);
                                           setLoader(false)
                                           })
useEffect(()=>{
connectToServer();
},[])
    return(
        <html>
            <body>
                <h2>singing</h2>
                <img src={singing} alt="kk" width="200" height="200"/>

                <h2>dancing</h2>
                <img src={dancing} alt="kk" width="200" height="200"/>

                <h2>listening music</h2>
                <img src={music} alt="kk" width="200" height="200"/>
            </body>
        </html>
    )
}