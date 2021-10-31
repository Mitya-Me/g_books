import './app.module.css';

import SearchSection from "../SearchSection/SearchSection";
import Books from '../Books/Books';


function App() {
  return (
    <div className="app">
      <SearchSection />
      <Books />
    </div>
  );
}

export default App;
