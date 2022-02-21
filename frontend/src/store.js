import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import api from "./constants/api";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        agent_id: JSON.parse(localStorage.getItem('agent_id')),
    },
    mutations: {
        AGENT(state, agent_id) {
            state.agent_id = agent_id;
            localStorage.setItem('agent_id', JSON.stringify(agent_id));
        },   
    }
});
