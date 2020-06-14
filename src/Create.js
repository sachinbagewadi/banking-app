import React from 'react'
import Login from './Login'

class Create extends React.Component {
    constructor () {
        super ()
        this.state= {
            username:'',
            email:'',
            password:'',
            balance:'1000',
            withdraw:''
        }
    }

    handleChange =(e)=> {
        this.setState ({[e.target.name]: e.target.value})
    }
       
    handleSubmit=(e) => {
        e.preventDefault()
        let accountNumber = Math.round(Math.random() *100000)

        this.setState ({accountNumber:accountNumber})
        const formData = {
            username : this.state.username,
            email: this.state.email,
            password:this.state.password
        }
        console.log(this.state)
        alert("Hello, Your account has Created Successfully!")
    }

    
    render() {
        return(
            <div>
                <h1>Create Account</h1>

                 <form>
                        <label >username</label>
                        <input type="text" name="username"  onChange={this.handleChange} value={this.state.username} /> <br/>

                        <label >email</label>
                        <input type="text" name= "email" onChange={this.handleChange} value={this.state.email} /> <br/>

                        <label >password </label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} /> <br/>

                        <input type="button" value="submit" onClick={this.handleSubmit} />

                    
                </form> <br/>

                <Login username={this.state.username} balance={this.state.balance}/>

            </div>
        )
    }


}
 
export default Create