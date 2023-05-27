import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Signup from './Signup';
import Acl1 from './Week1/Acl1';
import Kneef from './Week1/Kneef';
import Login from './Login';
import Kneef1 from './Week1/Kneef1';
import Page1 from './Week1/Page1';
import Kbend from './Week1/Kbend';
import Kbend1 from './Week1/Kbend1';
import Tsqueze from './Week1/Tsqueze';
import Tsqueze1 from './Week1/Tsqueze1';
import Hslides from './Week1/Hslides';
import Hslides1 from './Week1/Hslides1';
import Done from './Week1/Done';
import Home from './Home';





class App extends React.Component {
    state = { username: '' , password: ''}



    onSearchSubmit =  (fname, pas) => {
		this.setState({username:fname})
        this.setState({password:pas})
	}
    check =  (name, pas) => {
        if(name==this.state.username&& pas==this.state.password){
            return(true)
        }else{
            return(false)
        } 
	}

	render() {
		return (
            <Router>

        		<Routes>
                    <Route exact path="/" element={<Signup onSearchSubmit={this.onSearchSubmit}/>} />
          			<Route path="/login" element={<Login check={this.check}/>} />
                      <Route path="/acl1" element={<Acl1/>} />
                      <Route path="/kneef" element={<Kneef/>} />
                      <Route path="/kneef1" element={<Kneef1/>} />
                      <Route path="/page1" element={<Page1/>} />
                      <Route path="/kbend" element={<Kbend/>} />
                      <Route path="/kbend1" element={<Kbend1/>} />
                      <Route path="/tsqueze" element={<Tsqueze/>} />
                      <Route path="/tsqueze1" element={<Tsqueze1/>} />
                      <Route path="/hslides" element={<Hslides/>} />
                      <Route path="/hslides1" element={<Hslides1/>} />
                      <Route path="/done" element={<Done/>} />
                      <Route path="/home" element={<Home/>} />

        		</Routes>
      		
    	    </Router>
            
            // <Router>
            //      <div>
            //         <Switch>
            //             <Route exact path="/" render={() => <Signup onSearchSubmit={this.onSearchSubmit} />} />
            //             <Route path="/login" render={() => <Login check={this.check} />} />
            //         </Switch>
            //     </div>
            // </Router>
            // <BrowserRouter>
            // <div>
            //     <Signup onSearchSubmit={this.onSearchSubmit}/>
            //     <Login check={this.check}/>
            
            // </div>
            // </BrowserRouter>
			
		)
	}
}

export default App;

