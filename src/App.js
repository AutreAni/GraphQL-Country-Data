import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Content from './components/Content';
import globe from './Video/Pexels Videos 1851190.mp4';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
  options: {
    heaers: {
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "Connection": "keep-alive",
      "DNT": "1",
      "Origin": "https://countries.trevorblades.com"
    }
  }
});

function App() {
   return (
    <ApolloProvider client={client}>
      <div className = "App">
      <video autoPlay muted loop>
       <source src= {globe}
        type="video/mp4"/>
        </video>
        <Content/>
      </div>
    </ApolloProvider>
  );
}

export default App;
