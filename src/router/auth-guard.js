import store from '../store'

export default function(to, from, next){
    if(store.getters.getAuthState == false){
        next('/administrator');
    }
    else
    next();
}