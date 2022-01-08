import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import AppProvider from '../src/Global/AppContext'


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
