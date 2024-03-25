import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Home />
        <UserForm />
        <UserList />
      </main>
    </div>
  );
}

export default App;
