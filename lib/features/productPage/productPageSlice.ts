import { Product } from "@/custom";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  product: Product;
}

interface Actions {
  updateProduct: (payload: Partial<Product>) => void;
}

export const useProductPage = create<State & Actions>()(
  immer((set) => ({
    product: {
      id: "",
      name: "",
      img: "",
      description: [],
      price: {
        original: "",
        sale: null,
        final: "",
      },
      inStock: 0,
      rating: 0,
      categories: [],
      colors: [],
      relatedProducts: [],
    },
    updateProduct: (payload) =>
      set((state) => {
        state.product = { ...state.product, ...payload };
      }),
  })),
);
