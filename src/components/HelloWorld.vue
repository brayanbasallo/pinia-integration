<template>
  <div class="hello">
    <h1>{{ storage.msg }}</h1>
    <p>Doble count {{ storage.dobleCount }}</p>
    <p>Doble count plus one {{ storage.doubleCountPlusOne }}</p>
    <button @click="storage.increment()">Increment</button>
    <button @click="storage.reset()">Reset</button>
    <hr />
    <div>
      <div class="">
        <input v-model="storage.msg" type="text" />
      </div>
      <button @click="storage.resetMsg()">Reset Msg</button>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "@/store/store";

export default {
  name: "HelloWorld",
  setup() {
    const storage = useMainStore();
    return {
      storage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  border: none;
  margin: 10px;
  padding: 10px 20px;
  background: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
