function CategoryFilter({ value, onChange }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label htmlFor="category-filter" style={{ marginRight: "1rem" }}>
        Filter by section:
      </label>
      <select
        id="category-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "0.5rem" }}
      >
        <option value="all">All</option>
        <option value="world">World</option>
        <option value="technology">Technology</option>
        <option value="arts">Arts</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
