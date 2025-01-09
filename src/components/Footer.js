import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [fontSize, setFontSize] = useState('16px')

  useEffect(() => {
    const updateWidth = () => {
      setFontSize(window.innerWidth < 768 ? '14px' : '16px')
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px 0',
      backgroundColor: '#e6e0e014',
      fontSize: fontSize // use the dynamic fontSize state here
    }}>
      © 2024 Andhra Pradesh State Development Planning Society All Rights Reserved
    </div>
  )
}

export default Footer
