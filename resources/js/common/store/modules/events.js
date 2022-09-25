const state = {
    alert: [],
};

// getters
const getters = {};

// actions
export const actions = {
    showAlert: ({commit}, alert) => {
        commit('SHOW_ALERT', alert);

        if (!alert.persistent) {
            setTimeout(() => {
                commit('REMOVE_ALERT', alert);
            }, alert.delay)
        }
    },

    removeAlert: ({commit}, alert) => {
        commit('REMOVE_ALERT', alert);
    },
};

// mutations
const mutations = {
    SHOW_ALERT: (state, alert) => {
        state.alert.push({
            show: true,
            text: alert.text,
            color: alert.color,
            key: alert.key,
        });

    },

    REMOVE_ALERT: (state, alert) => {
        state.alert.splice(state.alert.findIndex(e => e.key === alert.key), 1);
    }
};

export default {
    namespaced: true,
    strict: false,
    state,
    getters,
    actions,
    mutations
}
