import React from 'react'
import { Input } from '../ui/input'
import BurguerMenu from './BurguerMenu'

const Search = () => {
  return (
    <section className='w-[80%] flex flex-col items-center mb-6'>
      <BurguerMenu />
      <Input
        placeholder='Look for your dessert'
        className=' bg-slate h-10 w-[80%]'
      />
    </section>
  )
}

export default Search