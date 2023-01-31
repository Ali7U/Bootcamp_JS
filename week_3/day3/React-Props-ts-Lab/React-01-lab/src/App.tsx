import "./App.css";
import Card from "./components/Card";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="cardsOf">
        <Card
          name={"Ali"}
          languages={["C# ", "Python ", "JavaScript "]}
          yearsOfExperience={3}
          company={"Tuwaiq Academy"}
        />{" "}
        <Card
          name={"Fahad"}
          languages={["C# ", "Python ", "JavaScript "]}
          yearsOfExperience={3}
          company={"STC"}
        />
        <Card
          name={"Nasser"}
          languages={["Python ", "JavaScript "]}
          yearsOfExperience={3}
          company={"STC"}
        />
      </div>
      <div className="cardsOf">
        <Company
          nameOfCompany="Tuwaiq Academy"
          numberOfEmployee={30}
          yearOfCreate={2018}
        />{" "}
        <Company
          nameOfCompany="STC"
          numberOfEmployee={180}
          yearOfCreate={1990}
        />
        <Service
         certificate={"Backend JS"}
         price={150}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
