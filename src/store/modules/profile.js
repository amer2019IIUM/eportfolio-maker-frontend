
const state = {
    userProfile: null,
};

const getters = {
    userProfile: state => state.userProfile,
};

const actions = {
    async getUserProfile({ commit }, profile) {
        await commit('GET_USER_PROFILE', profile);
    },
};
const mutations = {
    GET_USER_PROFILE(state, payload) {
        state.userProfile = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}