
import './App.css';
import Sidebar from './components/sidebar';
import Input from './components/Input';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        {/* routes --> path + Element to be rendered*/}
          <Route exact path="/Input" element={<Input />}/>
          <Route exact path="/" element={<Sidebar />} />
          
        
      </Routes>
    {/* <Sidebar/> */}
      {/* <Input></Input> */}
    </div>
  );
}

export default App;
