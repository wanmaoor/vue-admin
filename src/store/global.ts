import { defineStore } from "pinia";

interface IState {
  count: number;
}
export const useGlobalStore = defineStore("global", {
  state: (): IState => {
    return { count: 123 };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
