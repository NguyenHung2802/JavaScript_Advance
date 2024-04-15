// import {createStore} from 'https://cdn.skypack.dev/redux' ;

// ---------------- My REdux ----------------

function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribers = [];
    return {
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);

            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(subcriber){
            subscribers.push(subcriber);
        }
    }
}

// Reducer
const initState = 0;

function reducer(state = initState, action ){
    switch (action.type){
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state 
    }
}

// Store
const store = window.store = createStore(reducer)

// Actions
function ActionDeposit(payload){
    return {
        type: 'DEPOSIT',
        payload
    }
}

function ActionWithdraw(payload){
    return {
        type: 'WITHDRAW',
        payload
    }
}


// DOM events
const deposit = document.querySelector('.deposit');
const withdraw = document.querySelector('.withdraw');

// Event handlers
deposit.onclick = function(){
    store.dispatch(ActionDeposit(10));
}

withdraw.onclick = function(){
    store.dispatch(ActionWithdraw(10));
}

//  Listeners
store.subscribe(() => {
    render();
})


function render(){
    const output =  document.querySelector('.output');
    output.innerText = store.getState();
}

render();


