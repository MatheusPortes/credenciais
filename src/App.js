import {BrowserRouter} from 'react-router-dom';
import ContextProvider from './Context';
import Application from './Application';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Application/>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
