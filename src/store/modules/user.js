
const state = {
    userDetails: null,
};

const getters = {
    userDetails: state => state.userDetails,
};

const actions = {
    async getUserDetails({ commit }, userDetails) {
        await commit('GET_USER_DETAILS', userDetails);
    },
};
const mutations = {
    GET_USER_DETAILS(state, payload) {
        state.userDetails = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}