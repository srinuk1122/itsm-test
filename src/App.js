
import { Routes ,BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header';
import DisplayData from './displyaData';
import Routers from './Routers';
function App() {
 
let data = [
  
  {name:"srinu",
    subject:"computer",
    address:"1-162",
    dob:"11-11-11",
    phone:9505012909,
    gender:"male"

 } 
]

  return (
    <div >
      
      <BrowserRouter>
            <Header />
           <Routers displayData={data}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
