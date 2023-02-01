import './App.css'
import Footer from './components/Footer'
import Movies from './components/Movies'
import Nav from './components/Nav'
import Interstellar from './assets/interstellar.jpg'
import greenMile from './assets/greenMile.jpg'
import dunkrik from './assets/dunkrik.jpg'
import fury from './assets/fury.jpg'
import hacksaw from './assets/hacksaw.jpg'
import TVShow from './components/TVShow'
import daredevil from './assets/daredevil.jpg'
import punisher from './assets/punisher.jpg'
import gameOf from './assets/gameOf.jpg'
import breaking from './assets/breaking.jpg'
import theWalking from './assets/theWalling.jpg'


function App() {

  return (
    <div className="App">
      <Nav />
      <div className="show">
        <div className="movies">
          <Movies
            nameOfMovie={"interstellar"}
            img={Interstellar}
            dateOfMovie={"05-10-2023"}
            evaluation={8.6}
            isAvailable={true}
          />
          <Movies
            nameOfMovie={"The Green Mile"}
            img={greenMile}
            dateOfMovie={"02-02-2023"}
            evaluation={8.6}
            isAvailable={true}
          />
          <Movies
            nameOfMovie={"Dunkrik"}
            img={dunkrik}
            dateOfMovie={"02-03-2023"}
            evaluation={7.8}
            isAvailable={true}
          />
          <Movies
            nameOfMovie={"Fury"}
            img={fury}
            dateOfMovie={"02-04-2023"}
            evaluation={7.5}
            isAvailable={true}
          />
          <Movies
            nameOfMovie={"Hacksaw Ridge"}
            img={hacksaw}
            evaluation={8.1}
            dateOfMovie={"05-10-2023"}
            isAvailable={false}
          />
        </div>
        <div className="movies">
          <TVShow
            nameOfTV={"Daredevil"}
            img={daredevil}
            dateOfTV={"02-02-2023"}
            evaluation={8.6}
            isAvailable={true}
          />
          <TVShow
            nameOfTV={"The Punisher"}
            img={punisher}
            dateOfTV={"02-02-2023"}
            evaluation={8.5}
            isAvailable={true}
          />
          <TVShow
            nameOfTV={"Game of thrones"}
            img={gameOf}
            dateOfTV={"02-02-2023"}
            evaluation={9.2}
            isAvailable={true}
          />
          <TVShow
            nameOfTV={"Breaking Bad"}
            img={breaking}
            dateOfTV={"02-02-2023"}
            evaluation={9.5}
            isAvailable={true}
          />
          <TVShow
            nameOfTV={"The Walking Dead"}
            img={theWalking}
            dateOfTV={"02-02-2023"}
            evaluation={7.9}
            isAvailable={false}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
