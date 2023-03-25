import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadSearch } from './searchedSlice'
import './Search.css'


const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [limitTerm, setLimitTerm] = useState('')
  const [sort, setSort] = useState('')
  const dispatch = useDispatch()
  const URL_Base = 'https://www.reddit.com/search.json?q='
  
  const onSubmit = async () => {
    const res = await fetch(`${URL_Base}${searchTerm}&limit=${limitTerm}`)
    const json = await res.json()
    const data = json.data.children
    // if(visited) {

    // }
    const searched = await data.map(child => {
        child = child.data
        
        return {
            id: child.id,
            author: child.author,
            title: child.title,
            likes: child.likes,
            text: child.selftext,
            ups: child.ups,
            image: child.thumbnail,
            permalink: child.permalink,
            comments: child.num_comments
        }
    })
    console.log(data)
    dispatch(loadSearch(searched))
    return 
  }



  return (
    <form>
        <label htmlFor="search">Term</label>
        <input 
            type="text" 
            id="search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        <label htmlFor="limit">limit</label>
        <select 
            id="limit"
            onChange={(e) => setLimitTerm(e.target.value)}>
            <option value="0">Please select limit</option>
            <option 
                value="5"
                >5</option>
            <option 
                value="10"
                >10</option>
            <option 
                value="15"
                >15</option>
            <option 
                value="20"
                >20</option>
            <option 
                value="25"
                >25</option>
            <option 
                value="50"
                >50</option>
            
        </select>
        <label htmlFor='sort_by'>Sort by:</label>
        
        <select 
            id="sort_by"
            onChange={(e) => setSort(e.target.value)}>
            <option
                    value="">
                    </option>
            <option
                value="relevance">
                    Relevance
                </option>
            <option
                value="hot">
                    New and most interensting
                </option>
            <option
                value="top">
                    Most upvotes
                </option>
            <option
                value="new">
                    Newest first
                </option>
            <option
                value="comments">
                    Most comments
                </option>          
        </select>
      
        <button 
            type="button"
            onClick={onSubmit}>SEARCH</button>
    </form>
  )
}

export default SearchForm