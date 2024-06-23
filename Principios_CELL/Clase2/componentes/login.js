export default class Login extends HTMLElement {

    constructor(){
        super();
        this.email="martin";
        this.password="12";
        this.attachShadow({mode: 'open'})

    }
    connectedCallback(){
        this.render();
        this.funcion();
    }
    render(){
        console.log("hola desde Login");
        this.shadowRoot.innerHTML=`
            <style>
                .componente{
                    display:block;
                    height:250px;
                    width:450px;
                    margin: 0 auto 0;
                    border: 2px solid #137cdf; 
                    
                }
                .text1{
                    margin-top:1rem;
                    padding-left: 3rem;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    
                }
                .text2{
                    margin-top:.5rem;
                    padding-left: 3rem;
                }
                .text3{
                    margin-top:1rem;
                    padding-left: 3rem;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
                }
                .text4{
                    margin-top:.5rem;
                    padding-left: 3rem;   
                }
                .text5{
                    margin-top: 1rem;
                    padding-left: 3rem;
                    
                    
                    
                }
                .boton{
                    height:30px;
                    width:360px;
                    margin: 0 auto 0;
                    background-color: #2f8ce4;
                    border:none;
                    color:white;
                    border-radius: 3px;
                }
                .input1,.input2{
                    height:25px;
                    width:350px;
                    border: 1px solid grey;
                }
            </style>
                <div class ="componente">
                    <div class ="text1">
                        <label>Email</label>
                    </div>
                    <div class="text2">
                        <input type="email" class="input1" id="email" name="email">
                    </div>
                    <div class="text3">
                        <label>Password</label>
                    </div>
                    <div class="text4">
                        <input type="password" class="input2" id="password" name="password">
                    </div>
                    <div class="text5">
                        <button  class="boton" id="login">Login</button>
                    </div>
                </div>
            
        `;
    }
    funcion(){
        const boton= this.shadowRoot.getElementById('login');
        const bus= document.querySelector('consumir-apis').shadowRoot.querySelector('.busqueda');
        console.log(bus);
        boton.addEventListener('click',() => {
            const correo =this.shadowRoot.getElementById('email').value;
            const contraseña =this.shadowRoot.getElementById('password').value;
            if (this.email === correo && this.password === contraseña){
                console.log("logueado");
                this.style.display= 'none';
                bus.style.display= 'block';
            }
            else{

                console.log("no logueado");

            }

        }) 
    }
}

