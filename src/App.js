import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

function App() {
  const number = 5;

  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter />
      </div>
    </Container>
  );
}

export default App;
