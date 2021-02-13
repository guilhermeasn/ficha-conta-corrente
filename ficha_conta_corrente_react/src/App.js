import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header';
import Main   from './components/Main';
import Footer from './components/Footer';

import { ModalAlert, ModalNewAccount } from './components/modals';

import "bootstrap/dist/css/bootstrap.min.css";
import "./utils/style.css";


function App() {
  return (
    <BrowserRouter>

      <Header id="react-app-header"/>
      <Main   id="react-app-main"  />
      <Footer id="react-app-footer"/>

      <div id="react-app-modals">

        <ModalAlert/>
        <ModalNewAccount/>
        
      </div>

    </BrowserRouter>
  );
}

export default App;
