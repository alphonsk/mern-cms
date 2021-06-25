import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button } from 'react-bootstrap';

//
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 
import DefaultLayout from './components/layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { NewTicket } from './pages/newTicket/NewTicket';
import { Ticket } from './pages/ticket/Ticket';
import { Entry } from './pages/Entry';
import { Signup } from './pages/Signup';
import { Tickets } from './pages/tickets/Tickets';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import { Error } from './pages/error/Error';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <DefaultLayout >
            <Route exact path="/" component={Entry} />
            <Route exact path="/signup" component={Signup} />
            {/* <PrivateRoute exact path="/dashboard"> <Dashboard /> </PrivateRoute> */}
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/newTicket" component={NewTicket} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/ticket/:id" component={Ticket} />
            {/* <Route path="/*" component={Error} /> */}
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
