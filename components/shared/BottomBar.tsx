"use client"
import { sidebarLinks } from '@/constants'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
const BottomBar = () => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <div>
   <section className="bottombar">
   <div className="bottombar_container">
   {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                height={38}
                width={38}
                alt="link-label"
              />
              <p className=" text-light-1 text-subtle-medium max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
        </div>
   </section>
    </div>
  )
}

export default BottomBar
