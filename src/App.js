
import './App.css';
import UserList from './Components/UserList';
import List from './Components/List';
import Page from './Components/Page';
import Timer from './Components/Timer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <UserList></UserList> */}
      <Page></Page>
      {/* <Timer></Timer> */}
      
    </div>
    </BrowserRouter>
  );
}

export default App;
