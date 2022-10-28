import { Routes, Route } from "react-router-dom";
import { Details } from "./components/Details";
import { List } from "./components/List";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
    </div>
  );
}

export default App;























