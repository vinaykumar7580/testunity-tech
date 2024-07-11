import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { setupInterceptors } from './Components/interceptor';

function App() {
  const reduxStore=useStore()

  useEffect(()=>{
    setupInterceptors(reduxStore)
  },[reduxStore])


  return (
    <div className="App">
     <AllRoutes/>
    </div>
  );
}

export default App;
