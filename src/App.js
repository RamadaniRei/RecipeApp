import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>
        <u> Food Recipe Hub</u>🥗
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the ingredient..."
          autoComplete="Off"
          className="app__input"
        />
        <select className="app__healthLabels">
          <option value="vegan">vegan</option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </div>
    </div>
  );
}

export default App;
