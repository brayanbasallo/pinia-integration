<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>
      {{ storage.counter }}
    </p>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useMainStore } from "@/store/store";

export default {
  name: "HomeView",
  setup() {
    const storage = useMainStore();
    return {
      storage,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
