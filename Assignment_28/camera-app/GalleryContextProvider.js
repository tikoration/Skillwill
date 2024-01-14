import { createContext, useContext, useState } from "react";

const GalleryContext = createContext(null);

const GalleryContextProvider = ({ children }) => {
  const [gallery, setGallery] = useState([]);

  const contaxtValue = {
    gallery,
    setGallery,
  };

  return (
    <GalleryContext.Provider value={contaxtValue}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const contextValue = useContext(GalleryContext);
  if (!contextValue)
    throw new Error("Your Component is not inside GalleryContextProvider");

  return contextValue;
};

export default GalleryContextProvider;
