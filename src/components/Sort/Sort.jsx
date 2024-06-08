import s from "./Sort.module.css";

export const Sort = ({setSort}) => {
  const typeOfSort = ["newest", "oldest", "a-z", "z-a"];
  return (
    <div>
      <select className={s.select} onChange={e => setSort(e.target.value)}>
        <option value="">Default sort</option>
        {typeOfSort.map((type) => {
          return (
            <option
              key={type}
              value={type}
            >{type}</option>
          );
        })}
      </select>
    </div>
  );
};
