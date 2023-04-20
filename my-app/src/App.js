// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemLContainer from './components/ItemLContainer/ItemLContainer';
import ItemDContainer from './components/ItemDContainer/ItemDContainer';
import Error404 from './components/Error404/Error404';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";


function App() {

  let carrito = [];

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar numItems={carrito.length} />
        </header>

        <Routes>
          <Route path='/' element={<ItemLContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemDContainer/>}/>
          <Route path='/item/detail/:id' element={<ItemDContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
