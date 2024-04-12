import React from 'react'
import { HomepageSkeleton } from '@/components/Skeletons'

const loading = () => {
  return (
    <main className=' w-[80%] m-auto'>
        <HomepageSkeleton />
    </main>
  )
}

export default loading