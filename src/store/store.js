//** define the store */
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    msg: "Welcome to pinia vue2 example",
  }),
  //optional getters
  getters: {
    dobleCount: (state) => state.counter * 2,

    doubleCountPlusOne() {
      return this.dobleCount + 1;
    },
  },
  //optional actions
  actions: {
    reset() {
      this.counter = 0;
    },
    increment() {
      this.counter++;
    },
    resetMsg() {
      this.msg = "Welcome to pinia vue2 example";
    },
  },
});
