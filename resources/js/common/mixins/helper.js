export default {
    name: 'global_helper',
    methods: {
        __generateRandomKey() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        },

        __src(path) {
            return `${window.url}/storage/img/static/${path}`;
        }
    }
};
