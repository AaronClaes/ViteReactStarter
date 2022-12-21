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
  updateObject: (object, items, values) =>
    set((state) => {
      for (const [index, item] of items.entries()) {
        const value = values[index];
        state[object][item] = value;
      }
      return { ...state };
    })
}));

// download the react devtools extension to view debug your store
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}
