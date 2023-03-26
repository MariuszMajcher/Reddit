import SearchForm from './components/search/SearchForm';
import Articles from './components/articles/Articles';
import { selectAllSearched } from './components/search/searchedSlice';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const articles = useSelector(selectAllSearched)
  
    let displayStyle = {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }

    if(articles!==undefined) {
      displayStyle = {}
    }
       
 
  

  return (
    <div style={displayStyle} className="App">
      <SearchForm />
      {articles &&
      <Articles />} 
    </div>
  );
}

export default App;
