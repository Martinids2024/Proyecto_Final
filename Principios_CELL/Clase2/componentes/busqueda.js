
export default class Busqueda extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
        this.ConsumirAPI();


    }
    render(){
        console.log("hola desde busqueda");
        this.shadowRoot.innerHTML=`
        <style>
            .contendor{
               
                height: 400px ;

            }
            .encabezado{
                background-color: hsl(192, 91%, 25%);
                height: 36px;
            }
            .boton{
                height: 40px ;
                width: 100px;
            }
            h2{
                color:white;
            }
            #busqueda{
                width: 250px;
                height: 30px;
            }
            .navegador{
                margin-top:1.5rem
            }
            #tabla{
                border-collapse: collapse; 
            }
            tr, td{
                
                padding:5px
            }
            th{
                text-align:left;
                background:white;
                color: black;
                text-transform: uppercase;
                border-bottom: 1px solid  hsl(189, 4%, 33%);
            }
            td{
                
                boder-bottom: 2px solid #111;
                color:#333;
                font-size:18px;
                border-bottom: 1px solid  hsl(189, 4%, 33%);
                height: 20px;
            }
            .tablas{
                display:grid;
                border: 1px solid green;
            }
        
        </style>
        <div class="contendor">
            <div class="encabezado"> 
                <h2>view: SamplePage</h2>
            </div>
            <div class="navegador">
                <label>Filter</label>
                <input type="text" id="busqueda" placeholder="Search...">
                <button  class="boton" id="buscar">Serach</button> 
                <button  class="boton" id="limpiar">Clear</button> 
            </div>
            <div class="tablas">
            <table id="table">
                <tr>                
                    <td>Nombre</td>
                    <td> Latitude</td>  
                    <td>ID</td>         
                </tr>
            </table>
            </div>
        </div>
        `;
    }
    ConsumirAPI(){
        console.log("hola desde api");
        const api = 'https://api.datos.gob.mx/v1/calidadAire';
        fetch(api)
        .then(response => response.json())
        .then(data => {
            const tabla =this.shadowRoot.getElementById('table'); 
            data.results.forEach(item => {
                item.stations.forEach(station => {
                const row = document.createElement('tr');
                // console.log(station);
                row.innerHTML =`
                    <td>${station.name}</td>
                    <td>${station.location.lon}</td>
                    <td>${station.id}</td>                
                `;
                tabla.appendChild(row);

                const array= [station.name];
                const btn=this.shadowRoot.getElementById('buscar');
                // console.log(btn);
                        btn.addEventListener('click', ()=>{
                            const inp = this.shadowRoot.getElementById('busqueda').value;
                            console.log(inp);
                            array.forEach(bus=> {
                                if(inp === bus.name ){
                                    console.log("encontrado");
                                }
                                else{
                                    console.log("error de busqueda");
                                }
                            
                        })
                        

                    })
                // console.log(array);



                // console.log(item.stations[0].name)
                })
            })
        })
        // .catch(error => console.log('solicitud fallida', error));
    }
    BuscarArreglo(){
        const btnbuscar= this.shadowRoot.getElementById('buscar');
        const clear= this.shadowRoot.getElementById('limpiar');
        const input = this.shadowRoot.getElementById('busqueda');
        btnbuscar.addEventListener('click')

    }

}
// scrollInfinite(){
//     const div = this.shadowRoot.getElementById('form');
//     div.addEventListener("scroll", () => {
//         Math.abs(div.scrollHeight - div.clientHeight - div.scrollTop) < 1
//     });
// }