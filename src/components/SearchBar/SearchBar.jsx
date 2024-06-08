import s from './SearchBar.module.css'
export const SearchBar = ({setSearch}) => {
  return (
    <div className={s.search_bar}>
        <input onChange={e => setSearch(e.target.value)} placeholder="Enter your value..." type='search' className={s.input}/>
    </div>
  )
}
