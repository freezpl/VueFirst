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
                console.log(resp.data);
                if(resp.data.access_token != 'undefined'){
                    console.log(resp.data.access_token);
                    localStorage.setItem('token', resp.data.access_token);
                    vueComp.$router.push({path:"/admin"});
                }
                else
                    console.log(resp.data);
            })
            .catch(resp => {
                
            });
        }
    }
}