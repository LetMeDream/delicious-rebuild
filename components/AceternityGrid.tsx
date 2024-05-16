import React, {useState} from 'react'
import { Recipes } from '@/app/lib/definitions'
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'
import { Card, CardContent, CardTitle } from './ui/card'

const AceternityGrid = (
    {
			recipes
		}: 
			{
				recipes: Recipes
			}
) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
		<div className=" max-w-[80%] mx-auto px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10">
			{recipes.map((recipe, idx) => (
				<div
					key={recipe.id}
					className="relative group  block p-2 h-full w-full "
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-[#fff7fc]/[0.8] block  rounded-3xl"
								layoutId="hoverBackground" // required for the background to follow
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-[#d0b5a6] to-[#d0b5a6]/[0.2] border border-transparent  group-hover:border-[#fff7fc] relative z-50">
						<div className="relative z-50">
							{/* <div className="p-4">
								<h4 className="text-zinc-100 font-bold tracking-wide mt-4">
									{recipe.title}
								</h4>
								<Image
										className='rounded-md'
										src={recipe.image}
										width={720}
										height={720}
										alt={recipe.title}
									/>
							</div> */}
							<Card className='flex flex-col bg-transparent border-none shadow-none'>
								<CardTitle className=' h-[40px]'>
									<span className="text-sm text-center font-semibold">{recipe.title}</span>
								</CardTitle>
								<CardContent className="flex h-[200px] p-5 py-5">
									<Image
										className='rounded-md cursor-pointer'
										src={recipe.image}
										width={400}
										height={400}
										alt={recipe.title}
									/>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			))}
			</div>
    </div>
  )
}

export default AceternityGrid