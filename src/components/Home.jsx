import React, { useEffect, useState } from 'react'

const Home = (props) => {

    const [userLogged, setUserLogged] = useState(false)

    useEffect(() => {
        if(!localStorage.getItem('token-myapp')){
            props.history.push('/login');
        } else {
            setUserLogged(true)
        }
    }, [])

    const logout = () => {
        // borrar token del storage
        localStorage.removeItem('token-myapp')

        // redirigir a Login
        props.history.push('/login');  
    }

    return (
        <div className="container h-500" style={{backgroundColor: '#6A62D2'}}>
            <div className="text-center" style={{height: '700px', paddingTop: '200px'}}>
                <h5 className="mb-5" style={{color: 'white'}}>URL:  /home</h5>
                <h5 className="mb-3" style={{color: 'white'}}> { userLogged && props.location.state.data.name } </h5>

                <button onClick={() => logout()} className="p-2 pl-5 pr-5" style={{backgroundColor: '#746BDE', border: 'none', color: 'white', width: '200px', fontSize: '14px'}}>
                    LOG OUT
                </button>
            </div>
        </div>
    )
}

export default Home