"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <div style={{display:'flex', alignItems:'center', width:'100%'}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <Link href='/'><img src="/images/logo-weednerd.png" alt="logo" className="logo-img" /></Link>
      </div>
      <nav className="main-nav" style={{marginLeft:'auto'}}>
        <a href="/shop">Seeds</a>
        <a href="/shop?cat=indica">Indica</a>
        <a href="/shop?cat=sativa">Sativa</a>
        <a href="/shop?cat=auto">Autoflower</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  )
}
