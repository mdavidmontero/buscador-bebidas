import { StateCreator } from "zustand";
type Category = {};
export type recipesSliceType = {
  categories: Category[];
};

export const createRecipesSlice: StateCreator<recipesSliceType> = () => ({
  categories: [],
});
