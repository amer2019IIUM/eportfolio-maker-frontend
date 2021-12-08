
const state = {
    userExperience: null,
};

const getters = {
    userExperience: state => state.userExperience,
};

const actions = {
    async getUserExperience({ commit }, experience) {
        await commit('GET_USER_EXPERIENCE', experience);
    },
};
const mutations = {
    GET_USER_EXPERIENCE(state, payload) {
        state.userExperience = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}