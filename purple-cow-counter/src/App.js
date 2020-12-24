import './App.css';

function callCountApiAndAlert() {
  console.log("Calling Count Api...")
}

function CountButton() {
  return (
    <button onClick={() => callCountApiAndAlert()}>Count!</button>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Purple Cow Counter</h1>
      <h2>Main</h2>
      <CountButton />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
