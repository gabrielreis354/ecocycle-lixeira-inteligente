import React from 'react'
import MenuLink from '../MenuLink'

export default function Header() {
  return (
    <div className='Header'>
        <div className="logo">
            <h1>EcoCycle</h1>
        </div>
        <div className="links">
            <MenuLink to={"/"}>Home</MenuLink>
        </div>        
        <p>Tecnologias para Energia Sustentável e Gerenciamento de Resíduos</p>
    </div>
  )
}
