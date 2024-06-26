import { LitElement, html, css } from "lit";
import TextInput from "./Text-input.js";
customElements.define('my-text-input', TextInput);

export default class InputSample extends LitElement{
    static get styles() {
        return css`
            :host {
                display: block;
                padding: 10px;
                color:var(--input-sample-text-color, #000);
            }
        `;
    }
    static get properties() {
        return {
            miDAto:{type: String}
        };
    }

    constructor(){
        super();
        this.miDato = "valor de inicializacion";
    }
    connectedCallback(){
        super.connectedCallback();
        this.inputCambiando();
        this.resetTexto();
    }
    render(){
        return html`
            <p>soy my Elemento</p>
            <my-text-input .value=${this.miDato}
            @change="${this.inputCambiando}"></my-text-input>

            <p>el dato escrito es ${this.miDato}</p>
            <button @click=${this.resetTexto}>Borrar texto</button>

        `;
    }
    inputCambiando(e){
        this.miDato= e.detail;
    }
    resetTexto(e){
        this.miDato = "";
    }


}