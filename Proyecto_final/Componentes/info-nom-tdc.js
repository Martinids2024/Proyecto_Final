import { LitElement, html, css } from "lit";

export default class InfoNoTdc extends LitElement{
    
    constructor(){
        super();
    }
    connectedCallback(){
        super.connectedCallback();
    }
    static styles=css`
  .nomina{
            display: flex;
            gap: 4.5rem;
            align-content: center;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            
        }
        .tdc{
            display: flex;
            gap: 8rem;
            align-content: center;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            
        }

 
     
    `;
    render(){
        return html`

                <div class= "nomina">
                    <p>Cuenta nomina </p>
                    <p>$21,000.00</p>
                </div>
                <div class="tdc">
                    <p>TDC</p>
                    <p>$21,400.000</p>
                </div>
            </div>
        `;
    }
}   