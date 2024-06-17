import { LitElement, html, css } from "lit";

export default class DataBack extends LitElement{

    constructor(){
        super();
    }
    connectedCallback(){
        super.connectedCallback();
    } 
    static styles=css`
      
        .pa{
             text-align: center;
        }
        .nomb{
            
            width: 300px;
            height: 20px;
            
            padding-left: 150px;
            padding-top: 10px;            
        }
        .numC{
            width:300px ;
            height: 15px;
            text-align:center ;
            padding-left: 100px;
            margin-top:1rem;
            padding-top: 10px;
            
        }

    `;  
    render(){
       // console.log("hola desde back");
        return html`
            <div class="pa">
                <h1>Información del Usuarios</h1>
                <horas-dia></horas-dia>
            </div>
            <p class="nomb"> Martin Hernández Fuentes</p>
            <div class="numC">
                <spam> 10124578987</spam>
            </div>
            
        `
    }
}