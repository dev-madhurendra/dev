import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')

    const navigate = useNavigate();
    const addUser = (e) => {
        e.preventDefault()
        const user = {name,email,username}
        axios.post("http://localhost:8080/user",user)
        .then(res => console.log(res))
        .catch(err => console.log(`Error ${err}`))
        navigate('/')
        location.reload(); 
    }


  return (
    <div>
        <form>
            <label>Name</label>
            <input placeholder='enter your name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Email</label>
            <input placeholder='enter your email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Username</label>
            <input placeholder='enter username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
        </form>
        <button type='submit' onClick={addUser}> Add  </button>
    </div>
  )
}

export default AddUser