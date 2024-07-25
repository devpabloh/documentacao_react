import logo from './logo.svg';
import './App.css';

/* Componentes */
import MyButton from "./components/MyButton/MyButton"
import User from "./components/User/User"
import AdminPanel from './components/AdminPanel/AdminPanel';
import LoginForm from './components/LoginForm/LoginForm';

/* estados */

import {useState} from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="App">
      <h1>Bem vindo ao meu aplicativo</h1>
      <MyButton/>
      <User/>
      <div>
        <h1>Testando como fica os componentes se você estiver com status de logado ou não</h1>
        <p>Admin painel vai aparecer se você estiver logado</p>
        <p>Login form vai aparecer se você estiver deslogado</p>
        {isLoggedIn? (<AdminPanel/>) : (<LoginForm/>)}
      </div>
      
    </div>
  );
}

export default App;
