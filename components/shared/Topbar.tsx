import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'

const Topbar = () => {

    const isUserlogedin = true;

  return (
    <nav className='topbar'>
        <Link href="/" className='flex gap-4 items-center'>
        <Image src="/logo.png" height={60} width={60} alt='logo' />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>

       WeaveSphere
        </p>
        </Link>



        <div className="flex items-center gap-1 ">
            <div className="block md:hidden">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer">
                        <Image src="/logout.svg" height={30} width={30} alt='login' />
                        </div>
                    </SignOutButton>
                </SignedIn>

                

            </div>
            <OrganizationSwitcher/>
        </div>
        
    </nav>
  )
}

export default Topbar
