import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      React router test:
      <Link to="/one">Page One</Link>
      <Link to="/two">Page Two</Link>
    </div>
  );
}

export default App;
