import Popular from "../components/Popular"
import Search from "@/components/Search/Search";
import Veggie from "@/components/Veggie";

export default async function Home() {
  /* Popular */
  const popular = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=8`);
  const popularData = await popular.json()
  const popularRecipes = popularData.recipes

  /* Veggie */
  const veggie = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${process.env.API_KEY}`)
  const veggieData = await veggie.json()
  const veggieRecipes = veggieData.recipes

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Search />
  
      <Veggie 
        veggieRecipes={veggieRecipes}
      />

      <Popular
        popularRecipes={popularRecipes}
      />
    </main>
  );
}
