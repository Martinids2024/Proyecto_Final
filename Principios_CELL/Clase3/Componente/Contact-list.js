import { LitElement, html} from "lit";

export default  class ContactoList extends LitElement{

    static get properties(){
        return{
            contactos: {type: Array},
        };
    }
    constructor(){
        super();
        this.contactos = [{nombre: 'lucho godinez', email: 'user1_some_email@mail.com'}, {nombre: 'Hugo Sanchez', email: 'user2_some_email@mail.com'}, {nombre:'Jhon Doe', email:'user_3some_email@mail.com'}];
    }
   connectedCallback(){
        super.connectedCallback();
    }
    render(){
        console.log("hola desde el render contact");
        return html`
            <style>
                div{
                    background-color: #f0f0f0;
                }
            </style>
            <div>
                ${this.contactos.map(contact => html`<my-contact nombre="${contact.nombre}" email="${contact.email}"></my-contact>`)}

            </div>
        `;
    }
}   
