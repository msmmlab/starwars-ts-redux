import CharactersList from "./charactersList";
import PlanetList from "./planetsList";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <hr />
      <CharactersList />
      <PlanetList />
    </div>
  );
};

export default App;
