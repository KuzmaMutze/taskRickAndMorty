import { Header } from './components/Header';
import { SearchItem } from './components/SearchItem';
import './sass/app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchItem />
    </div>
  );
}

export default App;
