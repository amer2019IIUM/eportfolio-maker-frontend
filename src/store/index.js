import Vue from 'vue';
import Vuex from 'vuex';
import Profile from './modules/profile.js'
import Project from './modules/project.js'
import Education from './modules/education.js'
import Skill from './modules/skill.js'
import Technology from './modules/technology.js'
import Experience from './modules/experience.js'
import Interest from './modules/interest.js'
import User from './modules/user.js'
Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'
export const strict = false

export default new Vuex.Store({
    state: {
        auth: true
    },
    mutations: {},
    actions: {},
    modules: {
        Profile, Project, Education, Skill, Technology, Experience, Interest, User
    },
    // strict: debug,
})


