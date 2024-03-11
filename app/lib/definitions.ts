
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// Here we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Recipe = {
  aggregateLikes: number,
  analyzedInstructions: {}[],
  cheap: boolean,
  cookingMinutes: number,
  creditsText: string,
  cuisines: [],
  dairyFree: boolean,
  diets: [],
  dishTypes: string[],
  extendedIngredient: {}[],
  gaps: string,
  glutenFree: boolean,
  healthScore: number,
  id: number,
  image: string,
  imageType: string,
  instructions: string,
  license: string,
  lowFodMap: boolean,
  occasions: [],
  originalId: number | null,
  preparationMinutes: number,
  pricePerServing: number,
  readyInMinutes: number,
  servings: number,
  sourceName: string,
  sourceUrl: string,
  spoonacularScore: number,
  spoonacularSourceUrl: string,
  summary: string,
  title: string,
  vegan: boolean,
  vegatarian: boolean,
  veryHealthy: boolean,
  veryPopular: boolean,
  weightWatcherSmartPoints: number
}

export type Recipes = Recipe[]