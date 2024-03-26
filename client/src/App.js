import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

// Import Pages
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import DisplayUser from './pages/DisplayUser';

// Import Context
import { UserProvider } from './context/user/UserState';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/display-user' element={<DisplayUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
