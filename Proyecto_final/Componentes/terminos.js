import { LitElement, html, css } from "lit";

export default class Terminos extends LitElement{

    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }
    static styles=css`
        
        h1{
            text-align:center ;
            font-size:2rem;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
        }
        
        .img{
            width: 75px;
            height: 75px;
            position: relative;
            left: calc(100% - 59%);
            margin-top:0rem;
        }
        
        .final{
            position: relative;
            left: calc(100% - 58%);
            margin-top:2rem;
            width: 100px;
            height: 35px;
        }
    `;
    render(){
        return html`

        <div class= "error"> 
            <img src="./imagenes/error.png"  class = "img" alt="">
            <h1>
              Los Datos son Incorrectos Intenato de nuevo!!
            </h1>
            
                <button @click="${this.cerrar}" class= "final">Regresar</button>
        </div>
            
            
        `;
    }    
    cerrar(_e){//rutas de user-info movimientoC 
        const abrir = document.querySelector('main-full').shadowRoot.querySelector('login-home');

        const cerrar =document.querySelector('main-full').shadowRoot.querySelector('.error');
         cerrar.style.display='none';
         abrir.style.display='block';
     }
   

}