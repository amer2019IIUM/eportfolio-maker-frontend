
const state = {
    userProject: null,
};

const getters = {
    userProject: state => state.userProject,
};

const actions = {
    async getUserProject({ commit }, project) {
        await commit('GET_USER_PROJECT', project);
    },
};
const mutations = {
    GET_USER_PROJECT(state, payload) {
        state.userProject = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}