import { createContext,useState } from "react";

// 1)  Se crea el contexto
export const GlobalContext=createContext();

// Se define el componente que nos va a permitir compartir las cosas
// 2) Definición del componente para proveer 
const GlobalContextProvider=({children})=>{
  const [showShoppingCart, setShowShoppingCart] = useState(false)

    return(
        <GlobalContext.Provider value={{
            // Aquí va el valor que se va a compartir
            // 3) Se crea el contexto
            showShoppingCart,setShowShoppingCart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export{GlobalContextProvider}