import { Sidebar } from "./Sidebar";
import { List } from "./List";
import s from "./ArticleApp.module.css";
import { useEffect, useState } from "react";
import { Favorites } from "./Favorites";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { nanoid } from "nanoid";
import { data } from "../../assets/data";

export const ArticleApp = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedTab, setSelectedTab] = useState("home");
  const [openModal, setOpenModal] = useState(false);
  const [article, setArticle] = useState(
    () => JSON.parse(window.localStorage.getItem("articles")) || data
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    window.localStorage.setItem("articles", JSON.stringify(article));
  }, [article]);

  const filteredArticles = article.filter((item) =>
    item.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const addToFavorites = (article) => {
    setFavorites((prev) => [...prev, article]);
  };

  const handleDeleteArticle = (id) => {
    setArticle((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDeleteFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };
  const modalIsOpen = () => {
    setOpenModal(true);
  };
  const modalIsClosed = () => {
    setOpenModal(false);
  };
  const addModalValue = (data) => {
    const newArticle = { ...data, id: nanoid(), createdAt: Date.now() };
    setArticle((prev) => [...prev, newArticle]);
    modalIsClosed();
  };

  const sortedArticles = () => {
    switch (sort) {
      case "newest":
        return filteredArticles.sort((a, b) => b.createdAt - a.createdAt);
      case "oldest":
        return filteredArticles.sort((a, b) => a.createdAt - b.createdAt);
      case "a-z":
        return filteredArticles.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return filteredArticles.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return filteredArticles;
    }
  };

  return (
    <div className={s.wrapperMain}>
      <Sidebar
        setSelectedTab={setSelectedTab}
        modalIsOpen={modalIsOpen}
      />

      {selectedTab === "home" && (
        <List
          article={sortedArticles()}
          handleDeleteArticle={handleDeleteArticle}
          addToFavorites={addToFavorites}
          setSearch={setSearch}
          setSort={setSort}
        />
      )}
      {selectedTab === "favorites" && (
        <Favorites
          favorites={favorites}
          handleDeleteFavorite={handleDeleteFavorite}
        />
      )}
      {openModal && (
        <ModalWindow
          onHandleCloseModal={modalIsClosed}
          onAddModalValue={addModalValue}
        />
      )}
    </div>
  );
};
