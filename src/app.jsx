import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './componentes/login/login';
import Maker from './componentes/maker/maker';

function App({FileInput, authService}) {
  return (
  <div className={styles.app}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login authService={authService}/>
      </Route>
      <Route path="/maker">
        <Maker FileInput={FileInput} authService={authService}/>
      </Route>
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
