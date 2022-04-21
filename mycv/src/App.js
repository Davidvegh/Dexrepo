import './App.css';
import { Routes, Route } from 'react-router-dom'


import MainView from './views/MainView';
import InfoView from './views/InfoView';
import AdminView from './views/AdminView';

function App() {



  return (
    <div className="App">

      <Routes>
        <Route element={<MainView />}>
          <Route path='/info' element={<InfoView />} />
          <Route path='/admin' element={<AdminView />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
