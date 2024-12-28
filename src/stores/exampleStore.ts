import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { createSelectors } from "./selectors";

interface ExampleState {
  foo: number;
  bar: string;
  list: {
    param1: string;
    param2: string;
  };
}

const initState = {
  foo: 0,
  bar: "example",
  list: {
    param1: "param1",
    param2: "param2",
  },
};

// add selectors for store for easy access of props
export const useExampleStore = createSelectors(
  create<ExampleState>()(() => ({
    ...initState,
  }))
);

// seperate actions from the store for easy import and usage
export const updateExampleStore = (options: Partial<ExampleState>) => useExampleStore.setState(() => options);
export const resetExampleStore = () => useExampleStore.setState(initState);

// show store in devtools
if (import.meta.env.MODE === "development") mountStoreDevtool("store", useExampleStore);
