import { z } from "zod";
import {
  DrinkApiResponse,
  DrinksApiResponses,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schemas";

import {
  CategoriesApiResponseSchema,
  SearchFilterSchema,
} from "../utils/recipes-schemas";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksApiResponses>;
export type Drink = z.infer<typeof DrinkApiResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
