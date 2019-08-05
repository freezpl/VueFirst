export default {
    // namespaced: true,
    state: {
        articles: []
    },
    getters: {
        articles(store){
            return store.articles;
        }
    },
    mutations: {
        addArticles(state, articles){
            state.articles = articles;
        }
    },
    actions: {
        getArticles(context, vue){
            vue.$http.get('articles').then(resp => {
                context.commit('addArticles', resp.data);
            });
        }
    }
}