import {FC} from "react";
import styles from "./App.module.scss";
import Services from "./components/Services/Services";
import Container from "./components/Container/Container";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App:FC= () => {
  return(
    <BrowserRouter>
        <Container>
            <Services/>
        </Container>
        <Routes>
            <Route path="/home" element={'home'} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;
//zadanie domoe: zaplanowac poprawnie routy, popodpinac routy pod 6 kafelkow z figmy, i zrobic tak aby link learn more wyswietlal sie na dole 
