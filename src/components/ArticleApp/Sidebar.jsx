import s from './ArticleApp.module.css'

export const Sidebar = ({setSelectedTab, modalIsOpen}) => {
  return (
    <aside className={s.sidebar}>
        <h3>Bootcamp 70</h3>
        <nav>
            <button onClick={() => setSelectedTab('home')} className={s.btn}>Home</button>
            <button onClick={() => setSelectedTab('favorites')} className={s.btn}>Favorites</button>
            <button className={s.btn} onClick={modalIsOpen}>Add article</button>
        </nav>
    </aside>
  )
}
