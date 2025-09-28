import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta." },
    { id: 2, title: "Chicken Curry", description: "Spicy and flavorful curry." },
  ],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  editRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));

export default useRecipeStore;
