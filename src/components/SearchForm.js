import React , {useState} from 'react';

function SearchForm({searchedItem,posts}) {

    const [searchedName , setSearchedName] = useState('')
   // const [showresult , setShowResult] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        searchedItem(searchedName)
        console.log(searchedName)
        
    }
  return (
      <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Entrer le nom pour chercher" 
          onChange={(e)=>setSearchedName(e.target.value)}/>
          <input type="submit" value="search" 
          />
      </form>
      );
}

export default SearchForm;
