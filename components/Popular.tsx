'use client'
import React from 'react'
import { Recipes } from '../app/lib/definitions'
import FoodCarousel from './FoodCarousel'

const Popular = ({
  popularRecipes
}:{
  popularRecipes: Recipes
}) => {

  return (
    <section className=' my-2 w-[80%] flex flex-col items-center'>
      <div className='my-2 self-center text-2xl font-semibold text-[hsl(21,31%,30%)]'>Our popular dishes:</div>

      <FoodCarousel 
        recipes={popularRecipes}
      />

    </section>
  )
}

export default Popular