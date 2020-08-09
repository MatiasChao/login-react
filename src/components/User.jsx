import React, { useEffect } from 'react'

const User = (props) => {

    useEffect(() => {
        if(!localStorage.getItem('token-myapp')){
            props.history.push('/login');
        }
    }, [])

    return (
        <div className="container h-500" style={{backgroundColor: '#6A62D2'}}>
            <div className="text-center" style={{height: '700px', paddingTop: '200px'}}>
                <h5 className="mb-5" style={{color: 'white'}}>URL:  /user</h5>
            </div>
        </div>
    )
    
}


export default User