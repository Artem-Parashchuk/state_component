import { formatDistanceToNow } from "date-fns";
import eoLocale from "date-fns/locale/uk";
import s from "./ArticleApp.module.css";
export const ArticleCard = ({
  article,
  handleDeleteArticle,
  addToFavorites,
  page,
}) => {
  return (
    <li className={s.article}>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <span>
        {formatDistanceToNow(article.createdAt, {
          addSuffix: true,
          locale: eoLocale,
        })}
      </span>
      <span>{article.author}</span>
      <div>
        {page !== "favorite" && (
          <button
            onClick={() => addToFavorites(article)}
            className={s.btn_fav}
          >
            Add favorite
          </button>
        )}
        <button
          onClick={() => handleDeleteArticle(article.id)}
          className={s.btn_del}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
