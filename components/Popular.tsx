'use client'
import React from 'react'
import { Recipes } from '../app/lib/definitions'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from './ui/carousel'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'

const Popular = ({
  popularRecipes
}:{
  popularRecipes: Recipes
}) => {
  console.log(popularRecipes)
  


  return (
    <section className=' my-2 w-[80%] flex flex-col items-center'>
      <div className='my-2 self-start'>Our popular dishes:</div>

      <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full "
      >
        <CarouselContent>
          {popularRecipes.map((recipe, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card className=''>
                  <CardTitle className='h-[40px]'>
                    <span className="text-sm text-center font-semibold">{recipe.title}</span>
                  </CardTitle>
                  <CardContent className="flex aspect-squae items-center justify-center p-6">
                    <Image
                      src={recipe.image}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </section>
  )
}

export default Popular