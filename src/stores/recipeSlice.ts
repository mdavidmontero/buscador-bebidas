import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drinks, Recipe, SearchFilter } from "../types";
import { Drink } from "../types/index";
import { FavoriteSliceType } from "./favoriteSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";

export type recipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
  showNotificationRecipe: () => void;
};

export const createRecipesSlice: StateCreator<
  recipesSliceType & FavoriteSliceType & NotificationSliceType,
  [],
  [],
  recipesSliceType
> = (set, get, api) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  modal: false,
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
    set({
      selectedRecipe,
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe,
    });
  },
  showNotificationRecipe: () => {
    createNotificationSlice(set, get, api).showNotification({
      text: "Todos los campos son Obligatorios",
      error: true,
    });
  },
});
