import React from 'react'
import { Recipes } from '@/app/lib/definitions'
import FoodCarousel from './FoodCarousel'

const Italian = ({
    recipes
}:{
    recipes: Recipes
}) => {
  return (
    <section className=' my-2 w-[80%] flex flex-col items-center'>
        <div className='my-2 self-start'>Some Italian options:</div>
        <FoodCarousel recipes={recipes}/>
    </section>
  )
}

export default Italian