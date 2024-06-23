import Login from "./login.js";
import Busqueda from "./busqueda.js";


export default class MainFull extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.render();
    }
    render(){
        console.log("hola desde main");
        this.shadowRoot.innerHTML= `
            <style>
                .busqueda{
                    display:none;
                }
        
            </style>
                <div class="login">
                    <login-componet></login-componet>
                </div>
                <div class="busqueda" id="bloque">
                    <busqueda-componet></busqueda-componet>
                </div>
            </div>
       `;
    }  
}

customElements.define('login-componet', Login);
customElements.define('busqueda-componet', Busqueda)

