import "./Toolbar.css";

function Toolbar({ selected, filters, onSelectFilter }) {
  return (
    <>
      {filters.map((el) => (
        <button
          onClick={onSelectFilter}
          key={el}
          className={el === selected ? "btn selected" : "btn"}
        >
          {el}
        </button>
      ))}
    </>
  );
}

export default Toolbar;
