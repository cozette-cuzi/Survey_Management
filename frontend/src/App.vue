<template>
  <v-app>
    <v-container class="container">
      <loading-component :value="loading" />
      <div class="d-inline-flex pa-2" outlined tile></div>
      <h1>Survey management</h1>

      <v-divider></v-divider>
      <router-view :key="$route.fullPath"></router-view>
    </v-container>
  </v-app>
</template>
<script>
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "App",
  components: { LoadingComponent },
  mounted() {
    this.loading = true;
    if (!this.$store.state.agent_id) {
      this.axios
        .post(this.api.ACTIONS.AGENT)
        .then((res) => {
          this.$store.commit("AGENT", res.data.data.id);
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
          this.loading = false;
        });
    } else {
      this.loading = false;
    }
  },
  data() {
    return {
      loading: false,
      agent_id: null,
    };
  },
};
</script>
<style lang="css">
h1 {
  font-family: "Montserrat", sans-serif;
}
</style>
