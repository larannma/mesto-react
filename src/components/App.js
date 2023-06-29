import logo from "../images/header__logo.svg";
import Header from "./Header"
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div classNameName="App" className="root">
      <div className="root__page">
        <Header logo={logo}/>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
