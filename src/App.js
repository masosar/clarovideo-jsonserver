import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ClaroList from "./components/ClaroList";
import ClaroListVert from "./components/ClaroListVert";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 955px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 955px)" });

  return (
    <Router>
      <div className="clarovideo-container">
        <nav>
          <Header />
        </nav>
        <main className="clarovideo-grid">
          <Switch>
            <Route exact path="/">
              {isDesktopOrLaptop && <ClaroList />}
              {isTabletOrMobile && <ClaroListVert />}
            </Route>
            <Route path="/detail/:id" component={MovieDetail}>
              {/* <MovieDetail /> */}
            </Route>
          </Switch>
        </main>
        <footer className="clarovideo-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
