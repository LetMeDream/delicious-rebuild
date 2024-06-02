import React from 'react'
import GridCountry from '@/components/GridCountry'
import { Card } from '@/components/ui/card'

const JapanesePage = async () => {
	const japanese = await fetch(`https://api.spoonacular.com/recipes/random?number=6&cuisine=japanese&apiKey=${process.env.API_KEY}`)
	const japaneseJson = await japanese.json()
	const japaneseRecipes = japaneseJson.recipes;

  return (
    <Card className=' mx-auto max-w-[80%] w-[80%] flex flex-col gap-2 bg-[#d0b5a6] border-transparent mt-4 shadow-md'>
      <GridCountry 
				recipes={japaneseRecipes} 
				description={'Some Japanese Options:'} 
			/>
    </Card>
  )
}

export default JapanesePage