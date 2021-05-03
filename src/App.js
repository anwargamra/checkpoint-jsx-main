import logo from './logo.svg';
// import './App.css';
import imagesrc from "./image-src.png"
import './style.css';

function App() {
  return (
    <div className="App">
     <h1 className="titel red">
       Anwar Gamra
     </h1>
     <div>
       <br/>
     </div>
     <img src={imagesrc} alt='image'/>
     <div>
       <br/>
     </div>
     <img src='/imagepub.jpg'/>
     <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/9GtB5G2xGTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
  );
}

export default App;
