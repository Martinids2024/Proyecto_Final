

export default class myComponente extends ListElement{
    static get properties(){
        return {
            title:{type: String},
            counter:{ type: Number},
    
            myString: {type: String},
            myArray:{type: Array},
            myBool:{ type: Boolean}
    
        };
    
        }
        constructor(){
            super();
            this.title='Hey there';
            this.counter=5;
    
            this.myString= 'Hello World';
            this.myArray= ['an', 'array', 'of', 'test', 'data'];
            this.myBool= true;
        }
    
        render(){
        return html`
        <h2>${this.title} Nr.${this.counter}!</h2>
        <button @click=${this.__increment}>incremento</button>
        <hr>
        <p> array loop and conditional</p>
        <p>${this.myString}</p>
        <ul>
            ${this.myArray.map (i => html` <li> ${i}</li>`)}
        </ul>
        ${this.myBool?
        html`<p>Redender some HTML if myBool is true</p>`:
        html`<p>> render some other HTML if myBool is false</p>`}
        `;

        }
   
}
