import "./App.css";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Collapsible from "./components/Collapsible";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="centering-container">
      <main className="main-container">
        <Heading />
        <Form />
        <Collapsible>
          <Todo />
          <Todo />
        </Collapsible>
      </main>
    </div>
  );
}

export default App;
