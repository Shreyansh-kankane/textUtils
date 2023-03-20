
import './App.css';
import { React,useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TextForm from './components/TextForm';
import About from './components/About';
import Layout from './components/Layout';

export default App
function App() {

  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
      if(mode ==='light'){
          setMode('dark');
          showAlert("Dark mode is enabled","success");
          document.body.style.backgroundColor='#04073a';
      } else{
          setMode('light');
          showAlert("Light mode is enabled","success");
          document.body.style.backgroundColor='white';
      }
  };

  const [alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    console.log(message);
    setalert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };


  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Layout mode={mode} alert={alert} toggleMode={toggleMode}/> }>
            <Route index element={<TextForm showAlert={showAlert} alert={alert} mode={mode} title="please enter required field" heading="Enter text to analyse"/>}/>
            <Route exact path='about' element={<About/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
