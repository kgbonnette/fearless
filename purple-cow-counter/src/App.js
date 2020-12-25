import { useEffect, useState } from 'react';
import { Alert, Container, Content, Footer, Header, Icon, IconButton } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

/*
 * CountButton React.js component delegates the work of counting and displaying
 * the count to the callCountApiAndAlert() function.
 */
function CountButton() {
  // call external count api to increment the counter and get the updated value
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error)
      console.log(JSON.stringify(error, null, 2));

    // display "success" alert if data exists
    if (data) {
      Alert.success(`Count incremented!  Current count: ${data.value}`, 4000);
    }
  }, [data, error]);



  return (
    <IconButton icon={<Icon icon="plus" />} size="lg" color="orange" onClick={() => {
      fetch("https://api.countapi.xyz/hit/kbonnette-fearless/1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
        .then((response) => response.json())
        .then(setData)
        .catch(setError)
    }}>Count</IconButton>
  )
}

/* 
 * The main "Purple Cow Counter" app, a React.js component.
 */
function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <br /><br />
          <h1>Purple Cow Counter</h1>
        </Header>
        <Content>
          <br /><br />
          <CountButton />
        </Content>
        <Footer className="footer">
          Created by Kim Bonnette for Fearless
        </Footer>
      </Container>
    </div>
  );
}

export default App;
