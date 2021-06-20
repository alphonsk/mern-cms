import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Button } from 'react-bootstrap';

// import Entry from './pages/Entry'
import DefaultLayout from './components/layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout >
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
