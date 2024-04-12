import React from 'react'
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardTitle } from './ui/card'

/* Main SKELETONS page. 
 * Here we create all of the skeletons for all of the components
 * using 'shadcn' skeleton as a base
*/

export const SkeletonCarousel = () => {
  return (
    <section className=' my-2 w-full flex flex-col items-center'>
        <div className="flex w-full justify-center">
            <div id='item' className=" md:basis-2/6 basis-full min-w-0 w-[80%] pr-2 shrink-0">
                <SkeletonCard />
            </div>
            <div id='item' className=" md:basis-2/6 basis-full min-w-0 w-[80%] px-2 shrink-0">
                <SkeletonCard />
            </div>
            <div id='item' className=" md:basis-2/6 basis-full min-w-0 w-[80%] pl-2 shrink-0">
                <SkeletonCard />
            </div>
        </div>
    </section>
  )
}

export const SkeletonCard = () => {
    return (
        <Card className='flex flex-col'>
            <CardTitle className=' h-[40px]'>
            <Skeleton 
                className="w-[80%] h-6 mx-auto mt-2"
            />
            </CardTitle>
            <CardContent className="flex h-[280px] p-5 py-10">
            <Skeleton 
                className="w-[90%] m-auto h-[100%]"
            />
            </CardContent>
        </Card>
    )
}

export const HomepageSkeleton = () => {
	return (
		<main className=" w-[80vw] m-auto flex flex-col gap-2 items-center justify-center">
			<div className='mt-2 self-start'>Some veggetarian options:</div>
			<SkeletonCarousel />
			<div className='mt-2 self-start'>Our popular dishes:</div>
			<SkeletonCarousel />
    </main>

	)
}
