import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className='app-body'> 
        <Sidebar/>
        <Feed/>
    
      </div>

    </div>
  );
}

export default App;
