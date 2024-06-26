import { LitElement, html } from "lit";

export default class TempBind extends LitElement{

    static get properties(){
        return {
            prop1:{type: String},
            prop2:{type: String},
            prop3:{type: Boolean},
            prop4:{type: String}
        }
    }
     constructor(){
        super();
        this.prop1 = 'text binding';
        this.prop2 = 'mydiv';
        this.prop3 = true;
        this.prop4 = 'pie';
     }
     render(){
        console.log("hola desde bind");
        return html`
            <div>${this.prop1}</div>

            <div id="${this.prop2}"> attribute bilding</div>

            <div>
                boolean attribute binding
                <input type= "text" ?disabled ="${this.prop3}"/>
            </div>

            <div>
                property bilding
                <input type= "text" .value="${this.prop4}"/>
            </div>

            <div>
                event handler binding
                <button @click="${this.clickHandler}">click</button>
            </div>
            
            `;
     }
     clickHandler(e){
        console.log(e.target);
     }
}