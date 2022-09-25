require('@/bootstrap');
import Vue from 'vue';

//common import
import vuetify from "@/plugins/vuetify";
import Index from '@/layouts/Index.vue';
import rules from '@/directive/rules';
import helper from '@/mixins/helper';
import {mixin} from '@/mixins/event';
import link from '@/components/global/link';

//guest import
import store from '#/store';
import router from "#/router";

Vue.mixin(helper);
Vue.mixin(mixin(store));
Vue.mixin(rules);
Vue.component('p-link', link);

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(Index),
});
