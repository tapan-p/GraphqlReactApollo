
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client ={client}>
      <Router>
    <div className="container">
            <img alt="SpaceX" styles={{width:25, display: 'block', margin:'auto'}} />
     <Route exact path="/" component ={Launches} />
     <Route exact path="/launch/:flight_number" component ={Launch} />
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
