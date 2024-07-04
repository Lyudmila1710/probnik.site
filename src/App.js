import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Catalog from "./pages/catalog";
import Oform_tovar from "./pages/oform_tovar";
import Korzina from "./pages/korzina";
import Registration from "./pages/registration";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/korzin'} element={<Korzina/>}/>
      <Route path={'/'} element={<Catalog/>}/>
      <Route path={'/oform'} element={<Oform_tovar/>}/>
      <Route path={'/register'} element={<Registration/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
