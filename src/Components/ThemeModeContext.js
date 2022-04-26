import React from 'react'

export const GlobalContext = React.createContext()

export const ThemeModeContext = ({children}) => {

  const [mode, setMode] = React.useState(() => {
      const savedMode = window.localStorage.getItem('currentMode')
      return savedMode || 'dark'
  })

  React.useEffect(() => {
    window.localStorage.setItem('currentMode', mode)
  }, [mode])

const changeMode = React.useCallback(() => {
  if (mode === 'dark') setMode('light')
  if (mode === 'light') setMode('dark')
  window.localStorage.setItem('currentMode', mode)
}, [mode])

  return (
    <GlobalContext.Provider value={{mode, changeMode}}>
        {children}
    </GlobalContext.Provider>
  )
}