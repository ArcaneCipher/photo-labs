import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <header>
        <TopicList />
      </header>
      <PhotoList />
    </div>
  );
};

export default App;
