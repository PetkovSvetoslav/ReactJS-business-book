import React, {useState} from 'react';

function LoginForm({Login, error}) {

    const [details, setDetails] = useState({name: "", email: "", password: ""});
// this handle our submit
const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
}

    return (
        // login form with submit function 
<form  className='form-login' onSubmit={submitHandler}>

    <div className='form-inner'>
        <div className='form-reg'>
        <h1><span style={{color:"#00d0ff"}}>Login /</span> Register</h1>
        <h1> </h1>
        </div>
        {/* Error */}
        {(error !== "") ? (<div className="error">{error}</div>) : ""}

        {/* form-name */}
        <div className='form-group'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
          {/* form-email */}
        <div className='form-group'>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
          {/* form-password */}
        <div className='form-group'>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        {/* submit */}
        <input type="submit" value="Login" />
    </div>
</form>
    );
}

export default LoginForm