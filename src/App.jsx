import { useState } from 'react';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Header from "./components/Headers"; 
import Task from './components/Task';
import { GlobalProvider } from './Context/GlobalState';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalProvider>
      <div className='transtition'>
        <Header/>
        <div className='listBox -mt-8 flex-column flex justify-content-center align-items-center'>
        <Task/>
       <Footer/>
        </div>
         
      </div>
  </GlobalProvider>
  );
}

export default App;
