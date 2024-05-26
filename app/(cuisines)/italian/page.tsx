import React from 'react'
import Italian from '@/components/Italian'

const ItalianPage = async () => {
  const italian = await fetch(`https://api.spoonacular.com/recipes/random?number=6&cuisine=italian&apiKey=${process.env.API_KEY}`)
  const italianJson = await italian.json()
  const italianRecipes = italianJson.recipes

  return (
    <div className=' flex flex-col gap-2 items-center justify-center '>
      <Italian recipes={italianRecipes} />
    </div>
  )
}

export default ItalianPage