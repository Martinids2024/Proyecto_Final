import { LitElement, html } from "lit";

export default class ContactoLis extends LitElement{

    constructor(){
        super();
    }
    connectedCallback(){
        super.connectedCallback();
    }
    render(){
        return html`
            <style>
                div{
                    border: 1px solid #ddd;
                    padding:10px;
                    border-radius:5px;
                    display:inline-block;
                }
                h1{
                    font-size:1.2em;
                    font-weight: normal
                }
            </style>
            <ul>
                <li><e-contact email="some_email@gmail.com" nombre="Juan Perez"></e-contact></li>
                <li><e-contact email="another_email2@gmail.com" nombre="Luis Martinez"></e-contact></li>
            </ul>
        `;

    }
}