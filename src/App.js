import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredData = monsters.filter((element) =>
    element.name?.toLowerCase().includes(searchField.toLowerCase())
  );
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={handleChange} placeholder={"search monsters"} />
      <CardList monsters={filteredData} />
    </div>
  );
}

export default App;
