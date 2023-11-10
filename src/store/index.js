import {createStore} from 'vuex';

const stores = createStore ({
    state: {
        email: "",
        productId: "",
        quantity: "",
        cart: "",
    },
    getters: {

    },
    mutations: {
        login(state, email){
            state.email = email;
            localStorage.setItem('email', email);
        },
        logout(state) {
            state.email = "";
            localStorage.removeItem('email'),
            alert('logged out');
        },
        initializeStore(state) {
            if(localStorage.getItem('email')) {
                state.email = localStorage.getItem('email');
            }
        },
       
    },
    actions: {

    },
    modules: {

    }

})

export default stores;