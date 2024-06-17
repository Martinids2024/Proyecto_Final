import { LitElement, html, css} from "lit";

 export default class DarHora extends LitElement {
    
    constructor(){
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this.actulizarhora();
    }
    static properties ={
        hora: { type: String }
    }

    actulizarhora() {
        const date = new Date();
        const hour = date.getHours();
            if (hour >= 6 && hour < 12) {
                this.hora = 'Buenos días Martin Bienvenido  ';
            } 
            else if (hour >= 12 && hour < 19) {
                this.hora = 'Buenas tardes Martin Bienvenido ';
            } else {
                this.hora = 'Buenas noches Martin Bienvenido ';
            }
    }

    static styles=css`
        .darhora{
            font-size: 20px;
            color:white;
            text-aling:center;
    }`;
    render() {
        console.log("hola desde hora");
        return html`
        <h4class="darhora">${this.hora}</h4class=>
    `;
    }
}

