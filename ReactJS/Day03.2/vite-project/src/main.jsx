import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import NormalSum from './App.jsx';
const result= NormalSum(10,20);
console.log(result);
createRoot(document.getElementById('root')).render(

    <App />
    
  
)
