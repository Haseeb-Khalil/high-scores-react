import "./App.css";
import Heading from "./Heading";
import CountryTable from "./Highscore-Country-Table";
import AllCountryScores from "./scores";

function App() {
  return (
    <div className="App">
      <Heading />

      {AllCountryScores.map((country, index) => {
        return <CountryTable key={index} value={country} />;
      })}
    </div>
  );
}

export default App;
