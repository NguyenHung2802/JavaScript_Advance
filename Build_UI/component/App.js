import html from '../assets/core.js'
import {connect} from '../assets/store.js'

const connector = connect()

function App({cars}) {
    return html`
        <h1>Hello</h1>
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>

        <button onclick = "dispatch('ADD', 'Porsche')" >Add Cars</button>
    `   
}

export default connector(App)