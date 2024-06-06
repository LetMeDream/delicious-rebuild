import React from 'react'
import GridCountry from '@/components/GridCountry'
import { Card } from '@/components/ui/card'

const ItalianPage = async () => {
  const american = await fetch(`https://api.spoonacular.com/recipes/random?number=6&cuisine=american&apiKey=${process.env.API_KEY}`)
  const americanJson = await american.json()
  const americanRecipes = americanJson.recipes

  return (
    <Card className=' mx-auto max-w-[80%] w-[80%] flex flex-col gap-2 bg-[#d0b5a6] border-transparent mt-4 shadow-md'>
      <GridCountry 
        recipes={americanRecipes}
        description={'Some American Options:'}
      />
    </Card>
  )
}

export default ItalianPage