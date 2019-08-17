export default {
    // namespaced: true,
    state: {
        auth: false
    },
    getters: {
        getAuthState(store){
            return store.auth;
        }
    },
    mutations: {
      setAuthState(state, authState){
          state.auth = authState;
      } 
    },
    actions: {
        authLogin(context, vueComp){
            vueComp.$http.post('auth',{
                email: vueComp.email,
                password: vueComp.password
            })
            .then(resp => {
                if(resp.data.access_token != 'undefined'){
                    localStorage.setItem('token', resp.data.access_token);
                    context.commit('setAuthState', true);
                    vueComp.$router.push({path:"/admin"});
                }
                else
                {
                    context.commit('setAuthState', false);
                }
            })
            .catch(resp => {
                
            });
        }
    }
}