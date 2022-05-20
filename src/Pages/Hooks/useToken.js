import { useEffect, useState } from "react"


const useToken = user =>{
    const [token,setToken] = useState(" ")
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email:email}
        if(email){
            fetch(`https://pacific-stream-06908.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log("data inserted usetoken ",data);
                const accesstoken = data.token;
                console.log(accesstoken);
                localStorage.setItem('accessToken', accesstoken)
                setToken(accesstoken)
            })
        }
    },[user])
    return [token]
}

export default useToken;