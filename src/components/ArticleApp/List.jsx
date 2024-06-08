import { ArticleCard } from "./ArticleCard";
import s from "./ArticleApp.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Sort } from "../Sort/Sort";

export const List = ({ article, handleDeleteArticle, addToFavorites, setSearch, setSort }) => {
  return (
    <div className={s.articles}>
      <h2>Articles page</h2>
      <SearchBar setSearch={setSearch} />
      <Sort setSort={setSort} />
      <ul className={s.list}>
        {article.map((item) => (
          <ArticleCard
            key={item.id}
            article={item}
            handleDeleteArticle={handleDeleteArticle}
            addToFavorites={addToFavorites}
          />
        ))}
      </ul>
    </div>
  );
};
