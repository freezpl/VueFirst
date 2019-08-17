import Vue from 'vue'
import Vuex from 'vuex'
import articles from './articles'
import auth from './auth'

import adminArticles from './admin/articles'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        articles,
        auth,
        adminArticles
    }
})