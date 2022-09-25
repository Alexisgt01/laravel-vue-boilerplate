/**
 * Global mixin
 *
 * @param {Vuex} store -> must be ur user's Vuex instance
 *
 * @returns {FormData|{methods: {showError(*): void, showAlert(*=, *): void, parseRequest(*=, *=): FormData, showSuccess(*=): void}}}
 */
export function mixin(store) {
    return {
        methods: {
            showError(e) {
                if (e.response && e.response.status === 422) {
                    let data = e.response.data;
                    if (data.errors) {
                        Object.entries(data.errors).forEach(([key, messages]) => {
                            messages.forEach((message) => {
                                store.dispatch('events/showAlert', {
                                    show: true,
                                    text: message,
                                    color: 'error',
                                    persistent: true,
                                    key: this.__generateRandomKey(),
                                })
                            })
                        })
                    }
                } else {
                    store.dispatch('events/showAlert', {
                        show: true,
                        text: e.response ? e.response.data.message : e.message,
                        color: 'error',
                        persistent: true,
                        key: this.__generateRandomKey(),
                    })
                }

            },
            showSuccess(t, delay = 5000) {
                store.dispatch('events/showAlert', {
                    show: true,
                    text: t,
                    color: 'success',
                    persistent: false,
                    key: this.__generateRandomKey(),
                    delay,
                });
            },
            showAlert(t, color, persistent = false, delay = 5000) {
                store.dispatch('events/showAlert', {
                    show: true,
                    text: t,
                    color,
                    persistent,
                    key: this.__generateRandomKey(),
                    delay,
                });
            },
            parseRequest(request) {
                let form = new FormData();
                Object.entries(request).forEach(([name, value]) => {
                    Array.isArray(value) && value.length > 0 ? value.forEach(e => form.append(`${name}[]`, e ?? '')) : form.append(name, value ?? '');
                });
                return form;
            },
            optional(object, property, value = null) {
                return typeof object === 'object' && object && object.hasOwnProperty(property) ? object[property] : value;
            },
        }
    }
}
