'use client';
import Link from 'next/link';
import './global.css';

export default function NavLink({href, children, className}: any){
  //const pathName = usePathname();

  return(
    <Link href={href} className={className}>{children}</Link>
  )
}