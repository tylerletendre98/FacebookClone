import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Post from './components/Post/Post'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className='app-body'> 
        <Sidebar/>
        <div>
        <Feed/>
        <Post 
          profilePic='https://randomwordgenerator.com/img/picture-generator/57e8d64b4355ae14f1dc8460962e33791c3ad6e04e50744172277fd1944bc3_640.jpg' 
          message='this is a message'
          timeStamp='time'
          imgName='imgName'
          userName='Tyler' 
        />
        </div>
      </div>

    </div>
  );
}

export default App;
