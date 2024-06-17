import { LitElement, html, css} from "lit";

export default class UserInfo extends LitElement{

    constructor(){
        super();

    } 
    connectedCallback(){
        super.connectedCallback();
    }
    static styles=css` 
     .cerrar{
        border-radius: 50%;
        background-color: red;
        height: 40px;
        width: 40px;
        position: relative;
        left:calc(100% - 10%);
        margin-top:1rem;
        font-size: larger;
        padding:0px;

        
        
    }
    `;
     render(){
         console.log("hola desde user-info");

         return html`
                <button  @click="${this.cerrar}" class="cerrar">X</button> 
                <data-back></data-back>
                <info-no-tdc></info-no-tdc>
                <card-tdc></card-tdc>
                <mov-back></mov-back> 
         `;
     }
      cerrar(_e){//rutas de user-info movimientoC 
        const login = document.querySelector('main-full').shadowRoot.querySelector('login-home');
        console.log(login);
        const movi = document.querySelector('main-full').shadowRoot.querySelector('.info');
         movi.style.display='none';
         login.style.display='block';
     }
     

   
     
}

