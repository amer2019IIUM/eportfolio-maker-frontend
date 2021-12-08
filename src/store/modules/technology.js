const state = {
    projectTechnology: null,
};

const getters = {
    projectTechnology: state => state.projectTechnology,
};

const actions = {
    async getProjectTechnology({ commit }, technology) {
        await commit('GET_PROJECT_TECHNOLOGY', technology);
    },
};
const mutations = {
    GET_PROJECT_TECHNOLOGY(state, payload) {
        state.projectTechnology = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}