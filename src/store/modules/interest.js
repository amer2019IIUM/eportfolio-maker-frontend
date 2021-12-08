
const state = {
    userInterest: null,
};

const getters = {
    userInterest: state => state.userInterest,
};

const actions = {
    async getUserInterest({ commit }, interest) {
        await commit('GET_USER_INTEREST', interest);
    },
};
const mutations = {
    GET_USER_INTEREST(state, payload) {
        state.userInterest = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}