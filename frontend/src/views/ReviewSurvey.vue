<template>
  <div>
    <loading-component :value="loading" />
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="snackbarColor"
      top
    >
      {{ message }}
    </v-snackbar>
    <div
      justify="center"
      v-for="(question, index) in data"
      :key="index"
      class="mb-2"
    >
      <v-card>
        <v-card-title class="darken-0">
          <span class="outline primary--text">Question {{ index + 1 }} :</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-card-text>
            {{ question.content }}
            <span
              class="font-weight-bold"
              :class="{
                'green--text': question.pivot.answer,
                'red--text': !question.pivot.answer,
              }"
              >{{ question.pivot.answer ? "Yes" : "No" }}</span
            >
          </v-card-text>

          <v-card-text v-if="question.pivot.note">
            Note: {{ question.pivot.note }}
          </v-card-text>
        </v-container>
      </v-card>
    </div>
  </div>
</template>
<script>
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "ReviewSurvey",
  components: { LoadingComponent },
  mounted() {
    this.loading = true;
    this.axios
      .get(this.api.ACTIONS.REVIEW_SURVEY, {
        params: {
          agent_id: this.$store.state.agent_id,
          survey_id: this.$route.params.id,
        },
      })
      .then((res) => {
        this.loading = false;
        this.data = res.data.data;
      })
      .catch((err) => {
        this.message = "Error";
        this.snackbarColor = "red";
        this.loading = false;
        this.snackbar = true;
      });
  },
  data() {
    return {
      loading: false,
      counter: 1,
      timeout: 2000,
      snackbar: false,
      snackbarColor: "primary",
      message: "",
      data: [],
      info: {
        agent_id: this.$store.state.agent_id,
        survey_id: this.$route.params.id,
      },
    };
  },
};
</script>
<style lang="css" scoped>
red {
  color: red;
}
green {
  color: green;
}
</style>
