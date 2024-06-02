import React from 'react'
import GridCountry from '@/components/GridCountry'

const JapanesePage = async () => {
	const japanese = await fetch(`https://api.spoonacular.com/recipes/random?number=6&cuisine=thai&apiKey=${process.env.API_KEY}`)
	const japaneseJson = await japanese.json()
	const japaneseRecipes = japaneseJson.recipes;

  return (
    <div className=' flex flex-col gap-2 items-center justify-center '>
      <GridCountry 
				recipes={japaneseRecipes} 
				description={'Some Thai Options:'} 
			/>
    </div>
  )
}

export default JapanesePage