import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link, createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const Users = () => {
    
    const [users,setUsers] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/users")
        .then((res) => {
            console.log(res);
            setUsers(res.data);
        }).catch((err) => {
            console.log(`Error ${err}`);
        })
    },[])

    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/user/${id}`)
        .then(res => console.log('Deleted Successfully !'))
        .catch(err => console.log(`Error while deleting user ${err}`))
        location.reload();
    }


    const navigate = useNavigate();
  return (
    <div>

        <Link to={'/addUser'}>
            Add User
        </Link>
        <Table className='table' striped bordered hover variant="light">
            <thead className='thead-dark'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    users?.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => {deleteUser(user.id)}}> Delete </button>
                                    <button className='btn btn-success' onClick={() => navigate({
                                        pathname:'/updateUser',
                                        search:createSearchParams({
                                            "id":user.id
                                        }).toString()
                                    })}> Update </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}

export default Users