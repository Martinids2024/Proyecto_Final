
 export default class ProductoMaquina extends HTMLElement {
    constructor() {
        super();
        this.transacciones = [];
        this.operaciones = 0;
        this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.render();
        this.presentarResumen();
    }


    render() {
        this.shadowRoot.HTMLElement=`
        `;
        console.log("Bienvenido al programa de máquina de alimentos");
        const nombre = prompt("Ingrese su nombre:");
        console.log(`Hola, ${nombre}!`);

        const producto = prompt("Elija el producto (A, B o C):");
        const montoAPagar = productos[producto];
        console.log(`Usted ha elegido el producto ${producto} que cuesta ${montoAPagar} pesos`);

            let montoIngresado = 0;
            let cambio = 0;

        while (montoIngresado < montoAPagar) {
        const moneda = prompt("Ingrese una moneda (10, 50 o 100):");
        montoIngresado += monedas[moneda];
        console.log(`Usted ha ingresado ${moneda} pesos. Monto ingresado: ${montoIngresado} pesos`);
        }

        if (montoIngresado > montoAPagar) {
        cambio = montoIngresado - montoAPagar;
        console.log(`Su cambio es: ${cambio} pesos`);

        while (cambio > 0) {
        for (const moneda in monedas) {
          if (cambio >= monedas[moneda]) {
            console.log(`Entregando ${moneda} pesos`);
            cambio -= monedas[moneda];
            break;
          }
        }
      }
    }

    this.transacciones.push({ producto, montoAPagar, montoIngresado, cambio });
    this.operaciones++;

    console.log("¿Desea realizar otra transacción? (s/n)");
    const respuesta = prompt("").toLowerCase();
    if (respuesta === "s") {
      this.iniciarTransaccion();
    } else {
      this.presentarResumen();
    }
  }

  presentarResumen() {
    console.log("Resumen de transacciones:");
    for (const transaccion of this.transacciones) {
      console.log(`Producto: ${transaccion.producto}, Monto a pagar: ${transaccion.montoAPagar}, Monto ingresado: ${transaccion.montoIngresado}, Cambio: ${transaccion.cambio}`);
    }
    console.log(`Número de operaciones realizadas: ${this.operaciones}`);
  }
}

