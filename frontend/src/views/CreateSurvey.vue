<template>
  <div class="container">
    <loading-component :value="loading" />
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="snackbarColor"
      top
    >
      {{ message }}
    </v-snackbar>
    <v-form ref="form" v-if="!saved" lazy-validation>
      <v-text-field
        v-model="survey.title"
        label="Title"
        :rules="fieldRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="survey.description"
        label="Description"
        :rules="fieldRules"
        required
      ></v-text-field>
      <div
        justify="center"
        v-for="(question, index) in updatedQuestions"
        :key="index"
        class="mb-2"
      >
        <v-card>
          <v-card-title class="darken-0">
            <span class="outline">Question{{ index + 1 }} :</span>
          </v-card-title>
          <v-divider></v-divider>

          <v-container>
            <v-text-field
              v-if="question.parent_answer == 1"
              :label="
                'the if yes question for: ' +
                survey.questions[question.parent_index].content
              "
              disabled
              :rules="fieldRules"
              required
            ></v-text-field>

            <v-text-field
              v-if="question.parent_answer == 0"
              :label="
                'the if no question for: ' +
                survey.questions[question.parent_index].content
              "
              disabled
              :rules="fieldRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="question.content"
              label="Content"
              :rules="fieldRules"
              required
            ></v-text-field>
            <v-btn small @click="initializeQuestion(index, true)">if yes</v-btn>
            <v-btn small @click="initializeQuestion(index, false)">if no</v-btn>
          </v-container>
        </v-card>
      </div>
      <v-form-actions>
        <v-btn class="primary" @click="save"> Save </v-btn>
      </v-form-actions>
    </v-form>
    <p class="headline" v-else>
      Your survey had been saved successfully, Thank you.
    </p>
  </div>
</template>

<script>
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "CreateSurvey",
  components: { LoadingComponent },
  computed: {
    updatedQuestions() {
      return this.survey.questions;
    },
  },
  data() {
    return {
      loading: false,
      saved: false,
      title: "Create a Survey:",
      fieldRules: [
        (v) => !!v || "Field is required",
        (v) => (v && v.length >= 2) || "Field must be grater than 2 characters",
      ],
      timeout: 2000,
      snackbar: false,
      snackbarColor: "primary",
      message: "",
      survey: {
        id: null,
        title: null,
        questions: [
          {
            content: null,
          },
        ],
      },
    };
  },

  methods: {
    save() {
      this.loading = true;
      this.axios
        .post(this.api.ACTIONS.SURVEY, this.survey)
        .then(() => {
          this.loading = false;
          this.message = "saved";
          this.snackbar = true;
          this.snackbarColor = "primary";
          this.saved = true;
        })
        .catch((e) => {
          console.log(e);
          this.message = "Check fields";
          this.snackbar = true;
          this.snackbarColor = "red";
          this.loading = false;
        });
    },
    initializeQuestion(index, answer) {
      if (
        this.survey.questions.filter(
          (question) =>
            question.parent_answer == answer && question.parent_index == index
        ).length
      )
        return;
      this.survey.questions.push({
        content: null,
        parent_answer: answer,
        parent_index: index,
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
