import { ArticleCard } from "./ArticleCard";
import s from "./ArticleApp.module.css";

export const Favorites = ({ favorites, handleDeleteFavorite }) => {
  console.log(favorites);
  return (
    <div>
      <h2>Favorites</h2>
      <ul className={s.fav_list}>
        {favorites.map((item) => (
          <ArticleCard
            key={item.id}
            article={item}
            handleDeleteArticle={handleDeleteFavorite}
            page='favorite'
          />
        ))}
      </ul>
    </div>
  );
};
