import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Live from './components/Live';
import Nube from './components/Nube';
import Planta from './components/Planta';
import Red from './components/Red';
import Sdf from './components/Sdf';
import Superman from './components/Superman';
import Navegacion from './components/Navegacion';



function App() {
  return (
      <Router>
        <div className="container">
          <h1 className="text-center mt-3 mb-3">
            Galeria
          </h1>
        </div>
       <Route path="/Live" component={Live}/> 
       <Route path="/Nube" component={Nube}/>
       <Route path="/Planta" component={Planta}/>
       <Route path="/Red" component={Red}/>
       <Route path="/Sdf" component={Sdf}/>
       <Route path="/Superman" component={Superman}/>
      
      <Navegacion/>
      
      </Router>
  );
}

export default App;
