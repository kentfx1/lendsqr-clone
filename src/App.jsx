import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import Login component
import Login from "./Login";
// import Firstpage component
import Sidebar from "./Sidebar";
// import Secondpage component
import Secondpage from "./Secondpage";
// import Thirdpage component
import Thirdpage from "./Thirdpage";
// import Fourthpage component
import Fourthpage from "./Fourthpage";

function App() {
  return (
      <div className="App">
        <div className="content">
          <Router>
            <Switch>
              {/* This route is for Loginpage component 
              with exact path "/Loginpage", in component props 
              we passes the imported component*/}
              <Route exact path="/login" component={Login} />
              
              {/* This route is for Secondpage component
              with exact path "/Secondpage", in 
              component props we passes the imported component*/}
              <Route path="/secondpage" component={Secondpage} />
              {/* This route is for Secondpage component
              with exact path "/Secondpage", in 
              component props we passes the imported component*/}
              <Route path="/sidebar" component={Sidebar} />

              {/* This route is for Thirdpage component
              with exact path "/Thirdpage", in 
              component props we passes the imported component*/}
              <Route path="/thirdpage" component={Thirdpage} />

              {/* This route is for Fourthpage component
              with exact path "/Fourthpage", in 
              component props we passes the imported component*/}
              <Route path="/fourthpage" component={Fourthpage} />
                
              {/* If any route mismatches the upper 
              route endpoints then, redirect triggers 
              and redirects app to home component with to="/Login" */}
              <Redirect to="/login" />
            </Switch>
          </Router>
        </div>
      </div>
  );
}

export default App;
