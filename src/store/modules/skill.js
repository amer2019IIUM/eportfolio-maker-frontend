
const state = {
    userSkill: null,
};

const getters = {
    userSkill: state => state.userSkill,
};

const actions = {
    async getUserSkill({ commit }, skill) {
        await commit('GET_USER_SKILL', skill);
    },
};
const mutations = {
    GET_USER_SKILL(state, payload) {
        state.userSkill = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}