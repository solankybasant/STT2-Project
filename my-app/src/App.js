
import './App.css';
import Sidebar from './components/sidebar';
import Input from './components/Input';
function App() {
  return (
    <div>
      <Routes>
        {/* routes --> path + Element to be rendered*/}
          <Route path="/Cards" element={<Home />} />
          <Route exact path="/" element={<Input />}/>
          
        
      </Routes>
    <Sidebar/>
      {/* <Input></Input> */}
    </div>
  );
}

export default App;
