import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className='container'>
      <header style={{ textAlign: 'center' }}>
        <Header />
      </header>
      <main style={{ textAlign: 'center' }}>
        <UserForm />
        <UserList />
      </main>
    </div>
  );
}

export default App;
