import React,{useState} from 'react';
import axios from 'axios';

export default function FileUpload() {
    const [imagefile,setImagefile]=useState();
    const [name,setName]=useState();
    const handleChange=(e)=>{
        
     if(e.target.type=='file'){
        setImagefile(e.target.files[0]);
     }else{
         setName(e.target.value);
     }
        

    }
     
   const handleSubmit=(e)=>{
       e.preventDefault();
       console.log('hs');
   
     axios.post('https://v2.convertapi.com/upload',name , {
        headers: {
         'content-type': 'text/html'// do not forget this 
        }}).then((res)=>{
           console.log(res);
       }).catch((err)=>{
           console.log(err);
       })
       axios.post('https://v2.convertapi.com/upload',imagefile , {
        headers: {
         'content-type': imagefile.type // do not forget this 
        }}).then((res)=>{
           console.log(res);
       }).catch((err)=>{
           console.log(err);
       })
       
      
       


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
        <input type="file" onChange={handleChange} id="inputfile"/>
        <button onSubmit={handleSubmit}>submit</button>
        </form>
       
    </div>
  )
}
