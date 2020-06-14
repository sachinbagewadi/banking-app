import React from 'react'
import Create from './Create'

class Login extends React.Component {
    constructor(props) {
        super(props) 
        console.log(props)
    }
    

    render() {
        return (
            <div>
                <h2>Login Here</h2>
                <h2>name-{this.props.username}</h2>
                <h2>balance-{this.props.balance}</h2>
                
            </div>
        )
    }
}
export default Login