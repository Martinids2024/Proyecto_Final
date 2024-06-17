import { LitElement, css, html } from "lit";

export default class LoginHome extends LitElement{

    
    constructor(){
        super();
        this.nomUsuario ='martin';
        this.contra='12345';
    }
    static properties(){
        return{
        nomUsuario:{type: String},
        contra:{type: String }
        }
    }
    // cambiar a fistUpdated()
    connectedCallback(){//con esta funcion mado a llamar todos los metodos
        super.connectedCallback();//con esta instruccion se ejecuta todos los metodos
        
    }

    static styles=css`
         .login{
            width: 480px;
            height: 845px;
            margin: 0 auto 0;
            font-family:"Google Sans", Roboto, Arial, sans-serif;
            color:white;
            
              
        }
        .container{
           
            display:flex;
            flex-direction: column;
            height: 90vh;
            background-color: rgb(0, 58, 97);
           
        }
         h1{
            color:white;             
            text-align:center;
            
        }
        .password, .user{
            width: 350px;
            height: 20px;               
            display: flex;
            align-content: center;
            flex-direction: column-reverse;
            text-align: center;
            margin: 0 auto 0;
            margin-top: 0rem;
        }
        .botonsesion{
             margin:0 auto 0;
        }
        .boton{
            background-color: rgb(247, 247, 247);
            color:black;
            width: 175px;
            height: 35px;
            margin-top: 15px;
            display: flex;
            justify-content: center;
            align-items:center;
            border-radius:5px;          
        }
        h3{
            text-align: center;
            margin:5px;
            magin-top: 0;
        }
        .contenimagen{
            position: relative;
            left: calc(100% - 50%);
        }
        .imagen{
            padding-top:4rem;
            width: 300px;
            height: 300px;
            position: relative;
            left: calc(100% - 78%);
            
        }
        .user, .password{
            width: 250px;
            height: 25px;    
        }
        .imagenlog{
            padding-top:3rem;
            width: 175px;
            height: 100px;
            padding-top:1rem;
        }
        .imagenlogo{
            margin:0 auto 0;
        }        
    `;
    render(){//pintamos la estructura del HTML
        console.log("hola dedesde render");
        return html`
        <div class="login">
            <div class="container">
                <div class= "imagenlogo">
                    <img src="./Imagenes/logo.gif" class=" imagenlog">
                </div>
                    <h1>Login</h1>
                    <h3>Nombre de Usuario</h3>
                    <input type="text"  id="user-name"  class="user"  value=""   placeholder="User Name">
                    <h3>Contraseña</h3>
                    <input type="password"  id ="contraseña" class ="password " value=""    placeholder="password" >
                <div class ="botonsesion">
                    <button   id= "botonI" class="boton" @click="${this.login}" >Iniciar Sesión</button>
                </div>
                    <div class= "conteimagen">
                        <img src="./Imagenes/pagar-dinero.gif" class=" imagen">
                    </div>
           </div> 
                         
        </div>    
        
            `;
            
    }
    login(){
        
        const abrir = document.querySelector('main-full').shadowRoot.querySelector('.error');
        // console.log("hola desde login");
        const info = document.querySelector('main-full').shadowRoot.querySelector('.info');
        //console.log(info);
        const logins= this.shadowRoot.querySelector('.login');
        //console-log(logins);
        const password = this.shadowRoot.getElementById('contraseña').value;
         //console-log(password);
        const nombre = this.shadowRoot.getElementById('user-name').value;
        //console-log(nombre);
        if(this.nomUsuario  === nombre && this.contra === password){
            this.style.display='none';
            info.style.display= 'block';    
        }
        else{(this.nomUsuario  !== nombre && this.contra !== password)
            this.style.display='none';
            abrir.style.display='block';
        }
    }
}
