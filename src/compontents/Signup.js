import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup(props) {
  const [fname, setFname] = useState('');
  const [pword, setPword] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFname(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission logic here
    props.onSearchSubmit(fname, pword)

    // Navigate to another page
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="big">
      <div className="ui equal width form">
      <div className="fields">
          <h1>Signup</h1>
        </div>
        <div className="fields">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={fname}
            />
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              onChange={handleChangePassword}
              value={pword}
            />
          </div>
          <div className="field">
            <label>Week of Rehab</label>
            <select>
              <option value="1">Week 1</option>
              <option value="2">Week 2</option>
            </select>
          </div>
        </div>
        <div className="field">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}

export default Signup;



