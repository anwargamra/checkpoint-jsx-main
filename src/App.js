import logo from './logo.svg';
// import './App.css';
import imagesrc from "./image-src.png"
import './style.css';

function App() {
  return (
    <div style = {{border:'solid 1px black', maxwidth:'100vw'}}>
     <h1 className='titel red'>
       Anwar Gamra
     </h1>
     <div>
       <br/>
     </div>
     <img src={imagesrc} />
     <div>
       <br/>
     </div>
     <img src='/imagepub.jpg'/>
     <div>
     <video src={"https://www.youtube.com/embed/9GtB5G2xGTY"} width="560" height="315" controls title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
     </video>

     </div>
    </div>
  );
}

export default App;
