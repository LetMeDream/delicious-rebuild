'use client'

import { Recipes } from '@/app/lib/definitions'
import AceternityGrid from './AceternityGrid'

const GridCountry = ({
    recipes,
    description
}:{
    recipes: Recipes,
    description: String
}) => {

  return (
    <section className=' mt-8 w-full flex flex-col items-center'>
        <div className=' self-start text-center w-full text-2xl font-semibold text-white caret-transparent select-none'>
            {description}
        </div>
        <AceternityGrid recipes={recipes} />
        
        
    </section>
  )
}

export default GridCountry