import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopNavigation from "./components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <header>
        <TopNavigation />
      </header>
      <PhotoList />
    </div>
  );
};

export default App;
