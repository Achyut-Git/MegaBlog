import { createContext, useContext } from "react";

export const ThemeContext = createContext({    //We created the context in same file gave some default values to the context
                                                     
    themeMode: 'light',
    darkTheme: ()=>{  },
    lightTheme: ()=>{  }
})  


export const ThemeProvider = ThemeContext.Provider  //instead of using .Provider in a separate Provider file we did that here



  //created a function and returned useContext with ThemeContext as prop, that means we are using ThemeContext's values, so instead of importing useContext, we can import this function directly. 

  export  function useTheme(){

   return useContext(ThemeContext)

}
