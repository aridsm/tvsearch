import React from 'react'

export const MenuContext = React.createContext()

const MenuMobileContext = ({children}) => {

  const [isMenuCategoriasOpen, setIsMenuCategoriasOpen] = React.useState()

  return (
    <MenuContext.Provider value={{isMenuCategoriasOpen, setIsMenuCategoriasOpen}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuMobileContext