import './App.css';
import Main from './components/Main/Main'
import {Route, Switch} from "react-router-dom"
import Movie from './components/Movie/Movie';
function App() {
 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Movie/:id" component= {Movie} />
        {/* <Main Data={Data}/> */}
      </Switch>
     

    
    </div>
  );
}

export default App;
