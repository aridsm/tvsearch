import React from 'react'

const useVisibility = (ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    
      React.useEffect(() => {
        function closeItem(event) { 
            if(event.target !== ref.current && !ref.current.contains(event.target)) {
              setIsVisible(false)
            }
          }
        window.addEventListener('click', closeItem)
        return () => {
        window.removeEventListener('click', closeItem)
        }
      }, [ref])

  return {isVisible, setIsVisible}
}

export default useVisibility