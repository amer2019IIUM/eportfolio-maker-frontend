
const state = {
    userEducation: null,
};

const getters = {
    userEducation: state => state.userEducation,
};

const actions = {
    async getUserEducation({ commit }, education) {
        await commit('GET_USER_EDUCATION', education);
    },
};
const mutations = {
    GET_USER_EDUCATION(state, payload) {
        state.userEducation = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}