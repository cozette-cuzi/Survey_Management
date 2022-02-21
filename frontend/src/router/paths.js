export default [
  {
    path: "*",
    meta: {
      public: true,
    },
    redirect: {
      path: "/404",
    },
  },
  {
    path: "/404",
    meta: {
      public: true,
    },
    name: "NotFound",
    component: () => import(`@/views/NotFound.vue`),
  },
  {
    path: "",
    meta: { breadcrumb: true },
    name: "Root",
    component: () => import("@/components/RootComponent.vue"),
    children: [
      {
        path: "",
        meta: { breadcrumb: true },
        name: "Home",
        props: true,
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/create-survey",
        meta: { breadcrumb: true },
        name: "CreateSurvey",
        component: () => import("@/views/CreateSurvey.vue"),
      },
      {
        path: "/surveys",
        meta: { breadcrumb: true },
        name: "Surveys",
        component: () => import("@/views/Surveys.vue"),
      },
      {
        path: "/survey/:id",
        meta: { breadcrumb: true },
        name: "TakeSurvey",
        component: () => import("@/views/TakeSurvey.vue"),
      },
      {
        path: "/review_survey/:id",
        meta: { breadcrumb: true },
        name: "ReviewSurvey",
        component: () => import("@/views/ReviewSurvey.vue"),
      },
    ],
  },
];
