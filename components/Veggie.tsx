import { Recipes } from '@/app/lib/definitions'
import React from 'react'
import FoodCarousel from './FoodCarousel'

const Veggie = ({
  veggieRecipes
}:{
  veggieRecipes: Recipes
}) => {
  return (
    <section className='my-2 w-[80%] flex flex-col items-center'>
      <div className='my-2 self-center text-2xl font-semibold text-[hsl(21,31%,30%)]'>Some veggetarian options:</div>

      <FoodCarousel 
        recipes={veggieRecipes}
      />

    </section>
  )
}

export default Veggie