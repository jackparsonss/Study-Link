import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Study Link</h1>
      <Link to="/login">
        <button>Go to login page(temporary)</button>
      </Link>
    </div>
  );
}

export default App;
