export default {
   //namespaced: true,
    state: {
        adminArticles: []
    },
    getters: {
        adminArticles(store){
            return store.articles;
        }
    },
    mutations: {
        adminAddArticles(state, articles){
            state.articles = articles;
        }
    },
    actions: {
        adminAddArticle(context, vueComp){
            let path = (vueComp.imgPath == '')? 'default.jpg' : vueComp.imgPath;
            vueComp.$http.post('articles/AddArticle', {
                name: vueComp.name,
                description: vueComp.description,
                text: vueComp.text,                 
                img: path,
                categories: [{id: 1},{id: 2},],
                user: {id:1}
            })
            .then(resp => {                
                console.log("OK");
            });
        }
    }
}