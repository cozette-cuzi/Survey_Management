<template>
  <div>
    <loading-component :value="loading" />
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item small v-for="(survey, index) in surveys" :key="index">
        <v-card class="elevation-2">
          <v-card-title class="headline primary--text">{{
            survey.title
          }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            {{ survey.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary" v-if="!survey.taken">
              <router-link
                tag="div"
                :to="{ name: 'TakeSurvey', params: { id: survey.id } }"
                >Take it</router-link
              >
            </v-btn>
            <v-btn class="light" v-else>
              <router-link
                tag="div"
                :to="{ name: 'ReviewSurvey', params: { id: survey.id } }"
                >Review your answers</router-link
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <div class="text-center" v-if="!loading">
      <v-pagination
        circle
        v-model="page"
        :length="pagesNumber"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "surveys",
  components: { LoadingComponent },
  data() {
    return {
      surveys: [],
      agent_id: this.$store.state.agent_id,
      loading: false,
      page: 1,
      pagesNumber: null,
    };
  },
  methods: {
    getData() {
      this.loading = true;

      this.axios
        .get(this.api.ACTIONS.SURVEY, {
          params: {
            agent_id: this.agent_id,
            page: this.page,
          },
        })
        .then((res) => {
          this.surveys = res.data.data.data;
          this.pagesNumber = res.data.data.last_page;
          this.loading = false;
        });
    },
  },
  watch: {
    page: {
      handler() {
        this.getData();
      },
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="css" scoped>
</style>
