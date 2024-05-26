import React from 'react'
import American from '@/components/American'

const ItalianPage = async () => {
  const american = await fetch(`https://api.spoonacular.com/recipes/random?number=6&cuisine=american&apiKey=${process.env.API_KEY}`)
  const americanJson = await american.json()
  const americanRecipes = americanJson.recipes

  return (
    <div className=' flex flex-col gap-2 items-center justify-center '>
      <American recipes={americanRecipes} />
    </div>
  )
}

export default ItalianPage