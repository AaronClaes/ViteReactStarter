import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

// initial state of the store
const inititalState = {
  app: {
    darkTheme: true
  }
};

export const useStore = create((set) => ({
  ...inititalState,

  // function to update the different objects and fields inside the state
  updateObject: (object, options) =>
    set((state) => ({
      [object]: { ...state[object], ...options }
    }))
}));

// download the react devtools extension to view debug your store
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}
