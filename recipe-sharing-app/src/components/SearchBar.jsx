// src/components/SearchBar.jsx
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterRecipes } = useRecipeStore();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // re-run filtering whenever input changes
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search recipes..."
        style={{
          padding: "10px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default SearchBar;
