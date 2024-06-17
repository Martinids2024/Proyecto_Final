import { LitElement, css, html } from "lit";

export default class CardTdc extends LitElement{

    constructor(){
        super();
    }
    connectedCallback(){
        super.connectedCallback();
    }
    static styles= css`
        .card{
           
            display:flex;
            width:500px;
            height:200px;
            margin: 0 auto 0;
            margin-top:2rem;
            
            
        }
        .num{
           position:relative;
           left: calc(100% - 140%);
           margin-top:10rem;
           color:white;
           font-size: 20px;
           
        }
        .credito{
            width:500px;
            height:240px;
            margin: 0 auto 0;
            position:relative;
             left: calc(100% - 86.5%);
             margin-top:-1rem;
             border-radius:1rem;
             background-color: rgb(37, 93, 214) ;
             
        }
    `;
    render(){
        return html`
            <div class="card">
                <img src="./imagenes/card.jpg" class="credito" alt="">
                <p class="num">211314789574654</p>
    
            </div>
        `;
    }

}