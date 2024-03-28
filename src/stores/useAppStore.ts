import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, recipesSliceType } from "./recipeSlice";
export const useAppStore = create<recipesSliceType>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
  }))
);
