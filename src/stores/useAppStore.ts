import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, recipesSliceType } from "./recipeSlice";
import { FavoriteSliceType, createFavoriteSlice } from "./favoriteSlice";
import {
  NotificationSliceType,
  createNotificationSlice,
} from "./notificationSlice";
export const useAppStore = create<
  recipesSliceType & FavoriteSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
  }))
);

// Slice Pattern
