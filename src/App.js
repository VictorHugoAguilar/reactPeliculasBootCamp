import React from 'react';
// Estilos SasS
import './App.scss';
// Componentes del core
import { BrowserRouter,Switch, Route} from 'react-router-dom';
// Componentes personalizado
import Header from './components/Header/Header';
import Movies from './containers/Movies/Movies'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
