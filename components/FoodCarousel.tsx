import React, { useLayoutEffect } from 'react'
import { Recipes } from '@/app/lib/definitions'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from './ui/carousel'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'

const FoodCarousel = ({
  recipes
}:{
  recipes: Recipes
}) => {
  return (
    <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full flex justify-center"
      >
        <CarouselContent
          id='content'
          className=''
        >
          {recipes?.map((recipe, index) => (
            <CarouselItem id='item' key={index} className=" md:basis-2/6 basis-full min-w-0 w-[80%] shrink-0">
                <Card className='flex flex-col'>
                  <CardTitle className=' h-[40px]'>
                    <span className="text-sm text-center font-semibold">{recipe.title}</span>
                  </CardTitle>
                  <CardContent className="flex h-[280px] p-5 py-10">
                    <Image
                      className='rounded-md'
                      src={recipe.image}
                      width={720}
                      height={720}
                      alt={recipe.title}
                    />
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}

export default FoodCarousel