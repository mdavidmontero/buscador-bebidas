import { create } from "zustand";
import { createRecipesSlice, recipesSliceType } from "./recipeSlice";
export const useAppStore = create<recipesSliceType>((...a) => ({
  ...createRecipesSlice(...a),
}));
