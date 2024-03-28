import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drinks, Recipe, SearchFilter } from "../types";
import { Drink } from "../types/index";

export type recipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipesSlice: StateCreator<recipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set(() => ({
      categories,
    }));
  },
  searchRecipes: async (filter) => {
    const drinks = await getRecipes(filter);
    set(() => ({
      drinks,
    }));
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set(() => ({
      selectedRecipe,
    }));
  },
});
