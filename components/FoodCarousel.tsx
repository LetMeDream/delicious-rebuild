import React from 'react'
import { Recipes } from '@/app/lib/definitions'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from './ui/carousel'
import { Card, CardContent, CardTitle } from './ui/card'
import Image from 'next/image'

interface CustomStyle extends React.CSSProperties {
	'--image-url'?: string;
}

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
            <CarouselItem id='item' key={index} className=" md:basis-2/6 basis-full min-w-0 shrink-0">
                <Card className='flex flex-col bg-[#d0b5a6]'>
                  <CardTitle className=' h-[40px]'>
                    <span className="text-sm text-center font-semibold">{recipe.title}</span>
                  </CardTitle>
                  <CardContent 
                    style={{'--customUrl': `url(${recipe?.image})`} as CustomStyle}
                    className="flex h-[280px] p-5 py-10 bg-[image:var(--customUrl)] bg-cover bg-[100%] hover:bg-[80%] transition-all duration-500 mt-2 cursor-pointer">
                    {/* <Image
                      className='rounded-md'
                      src={recipe.image}
                      width={720}
                      height={720}
                      alt={recipe.title}
                    /> */}
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