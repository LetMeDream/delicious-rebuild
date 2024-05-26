'use client'

import { Recipes } from '@/app/lib/definitions'
import AceternityGrid from './AceternityGrid'

const Italian = ({
    recipes
}:{
    recipes: Recipes
}) => {

  return (
    <section className=' my-2 w-full flex flex-col items-center'>
        <div className='my-2 self-start text-center w-full text-2xl font-semibold text-[hsl(21,31%,30%)]'>Some Italian options:</div>
        <AceternityGrid recipes={recipes} />
        
        
    </section>
  )
}

export default Italian