import { useState } from 'react';
import { useGetSearchQuery } from './redux';
import { Layout } from './components/layout/layout';
import './App.css'

function App() {

const [searchQuery, setSearchQuery] = useState(''); 
const {data, isLoading}  = useGetSearchQuery(searchQuery);
const found = data !== undefined;

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    setSearchQuery(event.target.value);
  }
};

if (isLoading) return <h1 className='loading'>Loading...</h1>

  return (
    <div>
      <div className='parent'>
        <input
          type='search'
          className='search-input'
          placeholder='Search jokes...'
          minLength={3}
          onKeyDown={handleKeyDown}
          autoFocus={true}
          />
          {found && <p className='foundValue'>Found jokes: {data.total}</p>}
      </div>
      <Layout {...data}/>
    </div>
  );
}

export default App;
