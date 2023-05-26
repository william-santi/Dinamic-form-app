import { Introduction } from './components/introduction';
import { NavbarMenu } from './components/navbar';
import { Services } from './components/services';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Introduction />
      <Services />
    </div>
  );
}

export default App;
