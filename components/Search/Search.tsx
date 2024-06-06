'use client'

import React, { useState, useEffect } from 'react'
import { Input } from '../ui/input'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const Search = () => {
  // useSearchParams will be used to get and, alongside the URLSearchParams API, easily create a string representing the desired URL.
  const searchParams = useSearchParams()
  // then we will use the 'replace' function and the 'pathname' string to build and set the new URL.
  const pathname = usePathname()
  const { replace } = useRouter()
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLInputElement).value
    const params = new URLSearchParams(searchParams)
    if(text.length){
      params.set('search', text)
    }else{
      params.delete('search')
    }
    // Set new url
    replace(`${pathname}?${params.toString()}`)
  }

  const debouncedChange = useDebouncedCallback(handleChange, 300)

  return (
    <section className='w-[80%] mx-auto flex flex-col items-center'>
      <Input
        placeholder='Look for your dessert'
        className=' bg-slate h-10 w-100%'
        onKeyUp={debouncedChange}
        defaultValue={searchParams.get('search')?.toString()}
      />
    </section>
  )
}

export default Search