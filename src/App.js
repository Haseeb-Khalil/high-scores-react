import "./App.css";
import Heading from "./Heading";
import CountryTable from "./HighScore-Country-Table";
import AllCountryScores from "./scores";

function App() {
  const SortedCountries = AllCountryScores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
  return (
    <div className="App">
      <Heading />
      {SortedCountries.map((country, index) => {
        return <CountryTable key={index} value={country} />;
      })}
    </div>
  );
}

export default App;
