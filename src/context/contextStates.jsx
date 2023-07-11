import react, {useState} from 'react'
import myContext from './myContext';

import React from 'react'

 function ContextState({children}) {

    const [email, setUser]= useState('Ndumiya@gmail.com');
      const [password, setPassword]= useState('qwerty');
  
      return (
    
      
    <div>
      <myContext.Provider value={{email,password}}></myContext.Provider>
      {children}
    </div>
  )
}
export default ContextState