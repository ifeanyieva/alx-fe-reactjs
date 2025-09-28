import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta." },
    { id: 2, title: "Chicken Curry", description: "Spicy and flavorful curry." },
  ],

  // Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Initialize or reset recipes
  setRecipes: (recipes) => set({ recipes }),

  // ✅ Update recipe (by id)
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));

export default useRecipeStore;

