"use client"

import React, { useState } from 'react'
import { Header } from './navbar'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <Header isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen} />
    </div>
  )
}

export default Navbar