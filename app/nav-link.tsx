'use client';

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavLink({href, children}: any){
  const pathName = usePathname();

  return(
    <Link href={href}>{children}</Link>
  )
}