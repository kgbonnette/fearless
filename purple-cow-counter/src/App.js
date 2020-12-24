import { Alert, Container, Content, Footer, Header, Icon, IconButton } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

// Function that calls the external counting API, gets the latest count, and 
// displays the new count as an informational alert.
function callCountApiAndAlert() {
  Alert.info("This is a informations.", 4000);
}

// CountButton React.js component delegates the work of counting and displaying
// the count to the callCountApiAndAlert() function.
function CountButton() {
  return (
    <IconButton icon={<Icon icon="calculator" />} size="lg" color="violet" onClick={() => callCountApiAndAlert()}>Count!</IconButton>
  )
}

// The main "Purple Cow Counter" app, a React.js component.
function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <h1>Purple Cow Counter</h1>
        </Header>
        <Content>
          <p>Description here...</p> <br />
          <CountButton />
        </Content>
        <Footer align="bottom">
          Created by Kim Bonnette for Fearless
        </Footer>
      </Container>
    </div>
  );
}

export default App;
