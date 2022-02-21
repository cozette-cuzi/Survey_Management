<template>
  <div>
    <v-btn class="primary">
      <router-link
        tag="div"
        style="decoration: none"
        :to="{ name: 'Surveys'}"
      >
        Take a survey
      </router-link>
    </v-btn>
    <v-btn>
      <router-link
        tag="div"
        style="decoration: none"
        :to="{ name: 'CreateSurvey' }"
      >
        Create a survey
      </router-link>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      agent_id: this.$store.state.agent_id,
    };
  },
 
};
</script>

<style lang="css" scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  min-height: calc(100vh - 64px - 50px);
}
</style>
