import { Recipes } from '@/app/lib/definitions'
import React from 'react'
import FoodCarousel from './FoodCarousel'

const Veggie = ({
  veggieRecipes
}:{
  veggieRecipes: Recipes
}) => {
  return (
    <section className=' my-2 w-[80%] flex flex-col items-center'>
      <div className='my-2 self-start'>Some veggetarian options:</div>

      <FoodCarousel 
        recipes={veggieRecipes}
      />

    </section>
  )
}

export default Veggie