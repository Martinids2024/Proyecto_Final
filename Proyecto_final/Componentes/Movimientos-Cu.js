import { LitElement, html, css } from "lit";

export default  class  Movimientos extends LitElement{

    constructor(){
        super();
    }
    firstUpdated(){
        super.connectedCallback();
    }
    static styles=css `
        .movi{
            margin-top:3rem;
        }
        h1{
            
            width: 400px;
            height: 35px;
            padding-left: 70px;
            border-radius:5px;
        }
        .botones{
            margin-top:1rem;
            padding-left:6rem;
        }
        .movimientosb{
            background-color: rgb(247, 247, 247);
            color:black;
            width: 300px;
            height: 35px;
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items:center;
            border-radius:5px;

        }
    `;
    render(){
        return html`
           
        <div class= "movi">
            <h1>Movimientos Bancarios</h1>
            <div class="botones">
                <button @click="${this.abrirMovimientos}" class="movimientosb">Movimientos 1</button>
                <button @click="${this.abrirMovimientos2}" class="movimientosb">Movimientos 2 </button>
                <button @click="${this.abrirMovimientos3}" class="movimientosb">Movimientos 3 </button>
            </div>
        </div>

        `;
    }
     abrirMovimientos(_e){//rutas de user-info movimientoC 
        const userinfo = document.querySelector('main-full').shadowRoot.querySelector('.info');
        const movi = document.querySelector('main-full').shadowRoot.querySelector('.modal1');
        userinfo.style.display='none';
        movi.style.display='block';
    }
    abrirMovimientos2(_e){//rutas de user-info movimientoC 
        const userinfo = document.querySelector('main-full').shadowRoot.querySelector('.info');
        const movi2 = document.querySelector('main-full').shadowRoot.querySelector('.modal2');
        userinfo.style.display='none';
        movi2.style.display='block';
    }
    abrirMovimientos3(_e){//rutas de user-info movimientoC 
        const userinfo = document.querySelector('main-full').shadowRoot.querySelector('.info');
        const movi = document.querySelector('main-full').shadowRoot.querySelector('.modal3');
        userinfo.style.display='none';
        movi.style.display='block';
                 }
            
        

} 