import React from 'react'
import { Separator } from '../ui/separator';
import Link from 'next/link';

const BurguerMenu = () => {

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: 'HomeIcon' },
  {
    name: 'Italian',
    href: '/italian',
    icon: 'DocumentDuplicateIcon',
  },
  { name: 'American', href: '/american', icon: 'UserGroupIcon' },
  { name: 'Thai', href: '/thai', icon: 'UserGroupIcon' },
  { name: 'Japanese', href: '/japanese', icon: 'UserGroupIcon' },
];

  return (
    <nav className=' self-center mb-4 mt-2 cursor-pointer bg-[#d0b5a6] group rounded-t-xl overflow-hidden p-2'>
      <ul className='flex'>

        {links.map((link, i) => {
          const isLastItem = (i === links.length - 1)
          return (

            <div
              key={link.name}
              className='flex'
            >
               <Link 
                    href={link.href}
                    className='hover:text-white p-2 px-4'
                  >
                    {link.name}
                  </Link>
                
              {
                !isLastItem
                ? (
                  <Separator className='bg-[#fff7fc]' orientation='vertical'/>
                ) : null
              }
            </div>
          )
        })}
      </ul>
    </nav>
  )
}

export default BurguerMenu