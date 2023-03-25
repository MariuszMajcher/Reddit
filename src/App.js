import SearchForm from './components/search/SearchForm';
import Articles from './components/articles/Articles';
import { selectAllSearched } from './components/search/searchedSlice';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const articles = useSelector(selectAllSearched)
  return (
    <div className="App">
      <SearchForm />
      {articles &&
      <Articles />} 
    </div>
  );
}

export default App;
