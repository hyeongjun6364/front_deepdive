'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './nav-link.module.css'

function Navlink({href, children}) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? classes.active : undefined }>{children}</Link>
  )
}

export default Navlink