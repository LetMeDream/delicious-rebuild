'use client'

import React from 'react'
import { Recipes } from '@/app/lib/definitions'
import FoodCarousel from './FoodCarousel'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const Results = (
    {
        resultRecipes,
        searchTerm
    } : 
    {
        resultRecipes: Recipes,
        searchTerm: string
    }
) => {

  console.log(resultRecipes)

return (
  <section className=' w-[80%] my-6 flex flex-col items-center '>

    {
      !resultRecipes.length
      ? (
        <Alert className='mt-4'>
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            It looks like your search for: 
            <span className=' text-red-500'> {searchTerm} </span> 
            didn&apos;t get any result back 
          </AlertDescription>
        </Alert>
      )
      : (
        <>
          <div className='my-2 self-start'>Showing results for: <span className=' text-cyan-400'>{searchTerm}</span></div>
          <FoodCarousel 
            recipes={resultRecipes}
          />
        </>
      ) 
    }



  </section>
)
}

export default Results