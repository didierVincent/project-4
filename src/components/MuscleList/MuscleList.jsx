import "./MuscleList.css";

export default function MuscleList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <li
      key={cat}
      className={cat === activeCat ? "active" : ""}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));
  return <ul className="CategoryList">{cats}</ul>;
}
