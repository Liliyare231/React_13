import { useEffect,useState } from "react";
import '../userPage/UserPage.css'

export default function UserPage(){
    const [users, setUsers]= useState([])

    async function fetchUsers(){
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    return(
        <div className="users">
            <ul className="users">
                {
                    users.map((user)=>{
                        return(
                            <li>{user.name}</li>
                        )
                    })
                }
             
            </ul>

        </div>
    )
}