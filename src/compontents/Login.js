import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props) {
  const [username, setUsername] = useState('');
  const [pword, setPword] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.check(username, pword)) {
      console.log('we did it');
      // Navigate to another page
      navigate('/acl1');
    } else {
      alert('USERNAME OR PASSWORD WRONG PLEASE TRY AGAIN')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="big">
      <div className="ui equal width form">
        <div className="fields">
          <h1>Login In</h1>
        </div>
        <div className="fields">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={username}
            />
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            onChange={handleChangePassword}
            value={pword}
          />
        </div>
        <div className="field">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}

export default Login;



// import React from 'react';
// import './Login.css';


// class Login extends React.Component {

// 	state = { username: '',pword:''}
//     handleChange = (event) => {
//         this.setState({username: event.target.value});
//         console.log(this.state.username)
//       }
//     changer = (event) => {
//         this.setState({pword: event.target.value});
//         console.log(this.state.pword)
//       }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         if(this.props.check(this.state.username, this.state.pword)){
//             console.log('we did it')
//         }else{
//             console.log('you dum')
//         }
//       }
  


// 	render() {
// 		return(

//             <form onSubmit={this.handleSubmit} class="big"  >
//                 <div class="ui equal width form">
//                     <div class="fields">
//                         <h1>Login In</h1>
//                     </div>
//                     <div class="fields">
//                         <div class="field">
//                             <label>Username</label>
//                             <input type="text" placeholder="Username" 
//                             onChange={this.handleChange}
//                             value={this.state.username}
//                             />
//                         </div>
//                     </div>
//                     <div class="field">
//                         <label>Password</label>
//                         <input type="password" 
//                         onChange={this.changer}
//                         value={this.state.pword}
//                         />
//                     </div>
//                     <div class="field"><input type="submit" value="Submit" /></div>

//                 </div>
//             </form>   
//         )
// 	}
// }

// export default Login;