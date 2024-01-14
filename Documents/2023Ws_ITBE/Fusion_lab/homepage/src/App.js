
import './App.css';
import './index.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Introduction from './components/Introduction'
import CommentModal from './components/comment'
import ModelViewer from './components/model_viewer'

function App() {
  return (
    <div className="App">
      <Navbar  /> 
      <Home/>
      <Introduction/>
      <ModelViewer/>
      <Footer/>


    </div>
  );

}

export default App;