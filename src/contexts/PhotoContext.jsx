import { createContext } from "react";

export const PhotoContext = createContext();

export function PhotoContextProvider({ children }) {
  // const [] useState();

  return <PhotoContext.Provider value={""}>{children}</PhotoContext.Provider>;
}
