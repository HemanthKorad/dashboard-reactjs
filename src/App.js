import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDashcube} from "@fortawesome/free-solid-svg-icons";
import Sidebar from './components/side-bar/Sidebar'
import ViewPage from './components/view-page/ViewPage'


function App() {
  return (

    <div className="cont d-flex" id="wrapper">
      <Sidebar />
      <ViewPage />
    </div>

  );
}

export default App;
