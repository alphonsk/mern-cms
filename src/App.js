import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button } from 'react-bootstrap';

// 
import DefaultLayout from './components/layout/DefaultLayout';
// import { Dashboard } from './pages/dashboard/Dashboard';
import { NewTicket } from './pages/newTicket/NewTicket';
import { Ticket } from './pages/ticket/Ticket';
import { TicketList } from './pages/ticketList/TicketList';


function App() {
  return (
    <div className="App">
      <DefaultLayout >
        {/* <Dashboard /> */}
        {/* <NewTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
