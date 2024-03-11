import Popular from "../components/Popular"
import Search from "@/components/Search/Search";

export default async function Home() {
  /* Popular */
  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=8`);
  const data = await api.json()
  const recipes = data.recipes

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Search />
  
      <Popular
        popularRecipes={recipes}
      />
    </main>
  );
}
