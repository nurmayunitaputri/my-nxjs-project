import { createContext, useContext } from "react";
import useHome from "./hooks/useHome";

const initialContext = {
    post: [],
    loadPost: () => { }
}

const HomeContext = createContext(initialContext);

export const useHomeProvider = () => useContext(HomeContext);

const HomeProvider = ({ children }) => { 
    const { posts, loadPosts } = useHome(); 
    return ( 
        <HomeContext.Provider value={{ 
            posts, 
            loadPosts 
        }}> 
            {children} 
        </HomeContext.Provider> 
    ) 
} 
export default HomeProvider;
    