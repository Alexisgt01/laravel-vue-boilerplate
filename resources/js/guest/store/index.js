import Vue from 'vue';
import Vuex from 'vuex';

//Global modules
import events from "@/store/modules/events";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        events,
    }
});
