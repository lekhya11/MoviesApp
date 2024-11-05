import {Component} from "react"
import Cookies from "js-cookie"
import "./index.css"

class Login extends Component {
    state = {
        username: "",
        password: "",
        errorMsg: "",
        isChecked: false
    }

    OnSuccessView = (jwtToken) => {
        const {history} = this.props 
        history.replace("/")

        Cookies.set("JwtToken", jwtToken, {expires:30})
    }

    OnFailureView = (errorMsg) => {
      this.setState({errorMsg: errorMsg})
    }

    OnSubmitForm = async (event) => {
        event.preventDefault();
        const {username, password} = this.state
        const userDetails = {username, password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method: "POST",
            body : JSON.stringify(userDetails) //given data instead of body
        }
        const response = await fetch(url,options)
        console.log(response)
        const data = await response.json() //give JSON instead of json
        console.log(data)

        if (response.ok === true) {
            this.OnSuccessView(data.jwt_token)
            
        } else {
            this.OnFailureView(data.error_msg)
        }

    }

    OnClickCheckbox = () => {
      this.setState((prev) => ({isChecked: !prev.isChecked}))
    }

    OnClickUser = (event) =>{
      this.setState({username: event.target.value})
    }

    OnClickPassword = (event) =>{
        this.setState({password: event.target.value})
    }

    render () {
        const {username , password, isChecked,errorMsg} = this.state
        const type = isChecked ? "text" : "password"
        console.log(username)
    return (
    <div className="bg-image"> 
    <div className="main-heading">
       <h1 className="heading-Logo">MOVIES</h1>
    </div>
    <section className="login-card">
        <form className="formEl" onSubmit={this.OnSubmitForm}>
           <h3 className="login-heading">Login</h3>       
           <div className="input-container">
           <div>
           <label htmlFor="username" className="labelEl">User Name</label><br/>
             <input value={username} id="username" type="text" placeholder="rahul" onChange={this.OnClickUser} className="inputdiv"/><br/>
           </div>
           <div>
           <label htmlFor="password" className="labelEl">Password</label><br/>
           
             <input value={password} id="password" type={type} placeholder="..........." onChange={this.OnClickPassword} className="inputdiv"/><br/>
           </div>

           {errorMsg !== "" && <p className="errorMsg">{errorMsg}</p>}

           <div>
           <input type="checkbox" id="checkbox" onClick={this.OnClickCheckbox}/> 
           <label htmlFor="checkbox" className="labelEl"> Show Password </label>
           </div>
           
            <button  type="submit" className="buttonEl"> Login </button> 
           </div>
       </form>
    </section>
    </div>
   )
    }
}
export default Login