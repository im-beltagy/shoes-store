import { CartProduct } from "@/custom";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

function generateUniqueID(): string {
  // Generating a random number and converting it to a hexadecimal string
  const randomNumber = Math.random().toString(36).substr(2, 9);
  // Adding a timestamp to ensure uniqueness
  const timestamp = Date.now().toString(36);
  // Combining random number and timestamp to create a unique ID
  return randomNumber + timestamp;
}

interface State {
  products: CartProduct[];
  ids: string[];
}
interface Actions {
  addProduct: (payload: Omit<CartProduct, "itemID">) => void;
  updateProduct: (payload: Partial<CartProduct>) => void;
  duplicateProduct: (payload: { itemID: string }) => void;
  removeProduct: (payload: { itemID: string }) => void;
  removeProductById: (payload: { id: string }) => void;
  clearCart: () => void;
}

export const useCart = create<State & Actions>()(
  immer((set) => ({
    ids: [],
    products: [],
    addProduct: (payload) =>
      set((state) => {
        const itemID = generateUniqueID();
        const newProduct: CartProduct = {
          ...payload,
          itemID,
        };
        state.products = [...state.products, newProduct];
        state.ids = [...state.ids, payload.id];
      }),
    updateProduct: (payload) =>
      set((state) => {
        const { itemID, ...updatedProperties } = payload;
        const productIndex = state.products.findIndex(
          (product) => product.itemID === itemID,
        );
        if (productIndex !== -1) {
          state.products[productIndex] = {
            ...state.products[productIndex],
            ...updatedProperties,
          };
        }
      }),
    duplicateProduct: (payload) =>
      set((state) => {
        const newItemID = generateUniqueID();
        const productIndex = state.products.findIndex(
          (product) => product.itemID === payload.itemID,
        );
        if (productIndex !== -1) {
          state.products.push({
            ...state.products[productIndex],
            itemID: newItemID,
          });
        }
      }),
    removeProduct: (payload) =>
      set((state) => {
        const index = state.products.findIndex(
          (product) => product.itemID === payload.itemID,
        );
        if (index !== -1) {
          const id = state.products[index].id;
          state.products.splice(index, 1);

          // check if all items from same product had been removed
          if (state.products.every((p) => p.id !== id)) {
            state.ids.splice(
              state.ids.findIndex((item) => item === id),
              1,
            );
          }
        }
      }),
    removeProductById: (payload) =>
      set((state) => {
        state.products = state.products.filter((p) => p.id !== payload.id);
        state.ids = state.ids.filter((id) => id !== payload.id);
      }),
    clearCart: () =>
      set((state) => {
        state.products = [];
        state.ids = [];
      }),
  })),
);
