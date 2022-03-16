import oxService from "./services/ox.service";
import {React,useState} from 'react';

export default function Login(){
    
    const [name,setName] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        oxService.authenUser({name:name}).then((res)=>{
            console.log(res)
        })
    }
    function handleChange(event){
        setName(event.target.value)
    }
    return(
    <div>
        <form onSubmit={(e)=>handleSubmit(e)} >
            <h1>Login</h1>
            <input type={'text'} maxLength={10} onChange={(e)=>handleChange(e)}></input>
            <button type={'submit'}>log in</button>
        </form>
    </div>)
}
