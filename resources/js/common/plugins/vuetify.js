//import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify';
//import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/es5/locale/fr';

Vue.use(Vuetify);

let vuetify = new Vuetify({
    theme: {
        light: true,
        dark: false,
        themes: {
            light: {
                primary: '#002654',
                accent: '#2A3680',
                secondary: '#ED2939',
                success: '#39D940',
                info: '#B0C9DE',
                warning: '#FB8C00',
                error: '#FF5252',
                background: '#ffffff',
                recipient: '#f3f3f3',
                recipientAccent: '#D9D9D9',
                sender: '#B0C9DE',
                senderAccent: '#8CB0CF',
            },
            dark: {
                primary: '#002654',
                accent: '#2A3680',
                secondary: '#ED2939',
                success: '#39D940',
                info: '#B0C9DE',
                warning: '#FB8C00',
                error: '#FF5252',
                background: '#ffffff',
                recipient: '#f3f3f3',
                recipientAccent: '#D9D9D9',
                sender: '#B0C9DE',
                senderAccent: '#8CB0CF',
            }
        },
    },
    lang: {
        locales: {fr},
        current: 'fr',
    },
    icons: {
        iconfont: 'mdi',
    }
});

export default vuetify;
