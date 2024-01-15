import "./Toolbar.css";

function Toolbar({ selected, filters, onSelectFilter }) {
  return (
    <>
      {filters.map((filter) => (
        <button
          onClick={() => onSelectFilter(filter)}
          key={filter}
          className={filter === selected ? "btn selected" : "btn"}
        >
          {filter}
        </button>
      ))}
    </>
  );
}

export default Toolbar;
