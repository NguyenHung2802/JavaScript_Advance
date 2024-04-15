import { createStore} from '../assets/core.js';
import reducer from '../assets/reducer.js';

const { attach , connect , dispatch} = createStore(reducer)

window.dispatch = dispatch

export {
    attach, 
    connect
}