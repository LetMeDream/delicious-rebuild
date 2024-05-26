import Popular from "../components/Popular";
import Veggie from "@/components/Veggie";
import Results from "@/components/Results";


export default async function Home(
  {
    searchParams
  } :
  {
    searchParams?: {
      search: string
    }
  }
) {
  // await new Promise((res) => { setTimeout(res, 1000) })
  /* Popular */
  const popular = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=8`);
  const popularData = await popular.json()
  const popularRecipes = popularData.recipes

  /* Veggie */
  const veggie = await fetch(`https://api.spoonacular.com/recipes/random?number=8&tags=vegetarian&apiKey=${process.env.API_KEY}`)
  const veggieData = await veggie.json()
  const veggieRecipes = veggieData.recipes

  /* Handling searching functionality by just performing
   * a simple 'fetch' using the special 'searchParams' prop. 
   * */
  const searchResult = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchParams?.search}&apiKey=${process.env.API_KEY}&number=8`)
  const resultsData = await searchResult.json()
  const resultRecipes = resultsData.results

  return (
    <main className=" flex flex-col gap-2 items-center justify-center max-w-[80%] self-center ">
  
      {/* If there's no search */}
      {
        !searchParams?.search?.length ?
        (
          <>
            <Popular popularRecipes={popularRecipes} />
            <Veggie veggieRecipes={veggieRecipes} />
          </>
        ) : null       
      }

      {/* Search result */}
      { 
        searchParams?.search?.length 
        ? <Results resultRecipes={resultRecipes} searchTerm={searchParams?.search} /> 
        : null
      }


    </main>
  );
}
