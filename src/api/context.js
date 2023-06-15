import React,{ useState, createContext } from "react";

export const UserContext = createContext();

export const GlobalProvider = ({children}) => {
    const [items, setItems] = React.useState(null);
    const [isTrue, setIsTrue] = useState(false);

    React.useEffect(() => {
      getItems();
    }, []);

    const getItems = async () => {
      try{
        setIsTrue(true);
        await fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setItems(data));
        setIsTrue(false);
        }
        catch (error) {
            console.log(error);
        }
    };

  return (
    <UserContext.Provider value={{items, isTrue}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;