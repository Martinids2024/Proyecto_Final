import { LitElement, css, html } from "lit";
import LoginHome from "./login_home";
import UserInfo from "./user-info";
import DataBack from "./data-back";
import InfoNoTdc from "./info-nom-tdc";
import CardTdc from "./car-TDC";
import Movimientos from "./Movimientos-Cu";
import Modal from "./modalcomponent";
import Modal2 from "./madal2";
import Modal3 from "./modal3";
import DarHora from "./hora";
import Terminos from "./terminos";

export default class MainFull extends LitElement{

    constructor(){
        super();
        
        
    }
    firstUpdated(){//con esta funcion mado a llamar todos los metodos
        super.connectedCallback();
    }
    static styles=css`
      
       
        .info{
            
            width: 480px;
            height: 845px;
            color:white; 
            background-color: rgb(0, 58, 97) ;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
            margin: 0 auto 0;
            display: none;
        }
        .modal1{
            
            width: 480px;
            height: 845px;
            color:white; 
            background-color: rgb(0, 58, 97) ;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
            margin: 0 auto 0;
            display:none;
        }
        .modal2{
            
            width: 480px;
            height: 845px;
            color:white; 
            background-color: rgb(0, 58, 97) ;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
            margin: 0 auto 0;
            display: none;    
        }
        .modal3{
            
            width: 480px;
            height: 845px;
            color:white; 
            background-color: rgb(0, 58, 97) ;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
            margin: 0 auto 0;
            display: none;   
        }
        
        .error{
           
            background-color:rgb(16, 68, 146) ;
            width: 600px;
            height: 330px;
            margin:0 auto 0;
            margin-top: 10rem;
            display:none; 
        
        }
        
    `;
    render(){
        return html`
       
            <login-home></login-home>
            
            <div class= "error">
                 <terminos-agra> </terminos-agra> 
            </div>


            <div class="info">
                <user-info></user-info>
            </div>

            <div class="modal1">
                <modal-component></modal-component>
            </div>

            <div class="modal2">
                <modal-component2></modal-component2>
            </div>

            <div class="modal3">
                <modal-component3></modal-component3> 
            </div>     
        `;
    }
}

customElements.define('login-home', LoginHome);
customElements.define('user-info', UserInfo);
customElements.define('data-back', DataBack);
customElements.define('info-no-tdc', InfoNoTdc);
customElements.define('card-tdc', CardTdc);
customElements.define('mov-back', Movimientos);
customElements.define('modal-component', Modal);
customElements.define('modal-component2', Modal2);
customElements.define('modal-component3', Modal3);
customElements.define('horas-dia', DarHora);
customElements.define('terminos-agra',Terminos);

