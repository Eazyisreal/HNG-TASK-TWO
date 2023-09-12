import  { useState } from 'react';
import SearchBar from './Search'; 
import FeaturedMovies from './FeaturedMovies'; 

export default function MovieSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />

      <FeaturedMovies searchQuery={searchQuery} />
    </div>
  );
}
