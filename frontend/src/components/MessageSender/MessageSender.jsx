import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './messageSender.css'

function MessageSender() {
    const [input,setInput] = useState('')
    const [image,setImage] = useState(null)

    const handleChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit =()=>{
        console.log('Submitting')
    }
    return (
        <div className="messageSender">
            <div className='messageSender-top'>
                <Avatar src='https://tse3.mm.bing.net/th?id=OIP.Zdz-68DDO_vmcKRoV27V4AHaGq&pid=Api&P=0&w=205&h=186'/>
                <form>
                    <input 
                    type="text" 
                    className='messageSender-input'
                    placeholder='Whats on your mind'
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}} />
                    <Input 
                    type="file"
                    className='messageSender-fileSelector'
                    onChange={handleChange}/>
                    <button onClick={handleSubmit} type='submit'> Hidden Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
