import { LitElement, html, css } from "lit";

export default class Modal extends LitElement{

    constructor(){
        super();
    }
    connectedCallback(){
        super.connectedCallback();
    }
    static styles=css`
        .padremodald{
            border: 4px solid green;
            width: 500px;
            height: 845px;
            color:white; 
            background-color: rgb(0, 58, 97) ;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
            margin: 0 auto 0;
            border: 2px solid green;
            
            
        }
         .modal{
            text-align: center;
           
            margin-top:2rem;
        }
        .text-movimiento{
            margin-top:4rem;
             margin:0px;
            padding-top: 1rem;
            
        }
        
        .descripcion{
            width: 400px;
            height: 40px;
            margin-top:4rem;
            margin: 0 auto 0;
            
        }
        .cantidad{
            width: 200px;
            height: 30px;
            text-align: center;
            margin: 0 auto 0;
            background-color: white;
            margin-top:2rem;
            display: flex;
            justify-content: center;
            align-items:center;
            color: black;
            border-radius:.5rem;
            
            
        }
        p{
            color: black;
        }
        .descripCompra{
            color: black;
            text-align:center;
        }
        .compra{
            width: 400px;
            height: 300px;
            background-color: rgb(151, 151, 151);
            margin: 0 auto 0;
            border-radius:5px;
            background-color: rgb(247, 247, 247);


        }
        .regresar{
            margin-top:2rem;  
        }
        .botonM{
           background-color: rgb(247, 247, 247);
            color:black;
            width: 300px;
            height: 35px;
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items:center;
            border-radius:5px;
            margin:0 auto 0;     
        }
        .imagenc{
            padding-top:1rem;
            width: 250px;
            height: 150px;
        }
    `;
    render(){
        return html`
        <div class="padremodal">
                <div class="modal">
                    <h1 class="text-movimiento">Movimiento 1</h1>
                <div class= descripcion>
                    <h2>Descripción</h2>
                </div>
                <div class= "compra">
                    <p>
                        Sucursal de Punta Norte Nike
                    </p>
                    <h4 class= "descripCompra">Tenis Nike Sport .................................$1200 </h4>
                    <h4 class= "descripCompra">Camisa Sport Blanca Nike ...................$300 </h4>
                    <h4 class= "descripCompra">Pago con Targeta ..............................$1200
                    </h4>
                    <h4 class= "descripCompra">
                    </h4>
                    

                </div>
                    <p class=" cantidad">$ 1500</p>
                <div class= "regresar">
                    <button  class= "botonM" @click="${this.regresar}">Regresar</button>
                </div>
                <div class= "imgcont">
                     <img src="./Imagenes/icono2.jpeg" class="imagenc">
                </div>
            </div>
        </div>
        `;
    }
    regresar(_e){//rutas de user-info movimientoC 
        const userinfo = document.querySelector('main-full').shadowRoot.querySelector('.info');
        const movi = document.querySelector('main-full').shadowRoot.querySelector('.modal1');
            userinfo.style.display='block';
            movi.style.display='none';
        }
}