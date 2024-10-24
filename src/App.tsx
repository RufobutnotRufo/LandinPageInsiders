import "./Global.css";
import Header from "./Header/Header";
import MainCotent from "./MainContent/MainContent";
import BlockConetnt from "./BlockContent/BlockContent";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <MainCotent />
        </section>
      </main>
    </>
  );
}

export default App;
