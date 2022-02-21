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
    <div v-if="this.currentQuestion.content && !loading" justify="center " class="mb-2">
      <v-card class="blue darken-0" style="margin: 20px auto" width="500px">
        <v-card-title class="title">
          <span class="headline white--text">Question{{ counter }} :</span>
        </v-card-title>
        <v-card-text class="white text--primary">
          <p class="headline">{{ currentQuestion.content }}</p>
          <v-text-field v-model="data.note" label="Add a Note"></v-text-field>
          <v-btn small @click="nextQuestion(true)">yes</v-btn>
          <v-btn small @click="nextQuestion(false)">no</v-btn>
        </v-card-text>
      </v-card>
    </div>
    <div v-else>
      <p class="headline"> {{ message }}</p>
    </div>
    
  </div>
</template>
<script>
import LoadingComponent from "@/components/LoadingComponent";
// import ReviewSurvey from './ReviewSurvey.vue';
export default {
  name: "TakeSurvey",
  components: { LoadingComponent },
  mounted() {
    this.loading = true;
    this.axios
      .post(this.api.ACTIONS.TAKE_SURVEY, this.data)
      .then((res) => {
        this.loading = false;
        this.currentQuestion = res.data.data;
      })
      .catch(({err}) => {
        this.loading = false;
        this.message = "You've already taken this survey.";
        this.snackbar = true;
        this.snackbarColor = "red";
      });
  },
  methods: {
    nextQuestion(answer) {
      this.counter++;
      this.loading = true;
      this.data.answer = answer;
      this.data.question_id = this.currentQuestion.id;
      this.axios
        .post(this.api.ACTIONS.NEXT_QUESTION, this.data)
        .then((res) => {
          this.currentQuestion = res.data.data;
          this.loading = false;
          this.data.note = "";
          if (this.currentQuestion == null) {
            this.message = "Survey has ended";
            this.snackbar = true;
            this.$router.push({
              name: "ReviewSurvey",
              params: { survey_id: this.data.survey_id },
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.message = "Error";
          this.snackbarColor = "red";
          this.snackbar = true;
        });
    },
  },
  data() {
    return {
      loading: false,
      counter: 1,
      timeout: 2000,
      snackbar: false,
      snackbarColor: "primary",
      message: "",
      currentQuestion: {
        content: "",
      },
      data: {
        survey_id: this.$route.params.id,
        agent_id: this.$store.state.agent_id,
      },
    };
  },
};
</script>
<style lang="css" scoped>
</style>
