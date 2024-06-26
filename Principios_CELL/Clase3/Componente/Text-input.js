import { LitElement, html} from "lit";

export default class TextInput extends LitElement{

    static get properties(){
        return {
            value:{type: String}
        };
    }
    render(){
        return html`
            <p>
                <input type='text' .value="${this.value}" @input="${this.inputChange}">
            </p>
        `;
    }
    inputchange(e){
        this.value=e.target.value;
        this.dispatchEvent(new customElements('change', {datail:this.value}));
    }
}