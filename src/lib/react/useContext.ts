import { Context, useContext as ReactUseContext } from "react";

export const useContext = <T>(contextValue: Context<T>) => {
  const context = ReactUseContext(contextValue);

  if (context === null) {
    throw new Error("must be used within a Provider");
  }

  return context;
};
