import { LitElement, html } from "lit";

export  default class Econtact extends LitElement{

 
    constructor(){
        super();
        this.verMas=false;
    }
    static get properties(){
        return{ 
            nombre:{type: String}, 
            email:{type: String},
            verMas:{type: Boolean}

        }
    };
    connectedCallback(){
        super.connectedCallback();
    }
    render(){
        console.log("hola desde e-contact");
        return html`
        <style> 
            div{
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 5px;
                display:inline-block;
            }
            h1{
                font-size: 1.2em;
                font-weight: normal;
            }
        </style>
            <div>
                <h1> ${this.nombre}</h1>
                <p><a href= "#" @click= "${this.toggle}"> Ver más</a></p>
                ${this.verMas?
                    html` Email: ${this.email}`:
                    ``
                }
            </div>
        `;
    }
    toggle(e){
        e.preventDefault();
        this.verMas = !this.verMas;
        
    }
}

