import React, {useState} from 'react'
import { Recipes } from '@/app/lib/definitions'
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'
import { Card, CardContent, CardTitle } from './ui/card'

interface CustomStyle extends React.CSSProperties {
	'--image-url'?: string;
}

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
		<div className=" mx-auto px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10">
			{recipes.map((recipe, idx) => { 
				return (
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
						<div className=" cursor-pointer rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-[#d0b5a6] to-[#d0b5a6]/[0.2] border border-transparent  group-hover:border-[#fff7fc] relative z-50">
							<div className="relative z-50">
								<Card className='flex flex-col bg-transparent border-none shadow-none'>
									<CardTitle className=' h-[40px] group-hover:text-[hsl(21,31%,30%)] transition duration-500 cursor-pointer'>
										<span className="text-sm text-center font-semibold">{recipe.title}</span>
									</CardTitle>
									<CardContent 
										style={{'--image-url': `url(${recipe?.image})`} as CustomStyle} 
										className={`flex h-[200px] p-5 py-5 bg-[image:var(--image-url)] bg-cover bg-[100%] hover:bg-[80%] transition-all duration-500 mt-2 cursor-pointer`}>
										{/* To do later; Reimplement above 'hover' behaviour using Next's optimized Image component below */}
										{/* <Image
											className={`rounded-md transition-all duration-500 cursor-pointer ${(hoveredIndex === idx) ? 'transform scale(1.05)' : ''}`}
											src={recipe.image}
											width={400}
											height={400}
											alt={recipe.title}
										/> */}
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
					)}
			)
			}
			</div>
    </div>
  )
}

export default AceternityGrid