import Effect from "./components/Effect";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Effect />} />
        <Route path="/login" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
