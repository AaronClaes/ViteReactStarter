import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const inititalState = {
  counter: {
    value: 0
  },
  app: {
    darkTheme: true
  }
};

export const useStore = create((set) => ({
  ...{ ...inititalState },
  updateObject: (object, items, values) =>
    set((state) => {
      for (const [index, item] of items.entries()) {
        const value = values[index];
        state[object][item] = value;
      }
      return { ...state };
    })
}));

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}
