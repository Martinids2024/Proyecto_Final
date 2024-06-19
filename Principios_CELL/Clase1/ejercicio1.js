////////////////////////////////////
const array = [0,1,2,3,4,5 ];
const result = array.map ((element) => element * 2);
console.log(result);

const arreglo = [0,1,2,3,4,5];
Array.prototype.metodoMap = function(eve){
    const aregloNuevo =[];
    for(let i = 0; i < this.length; i++){
        aregloNuevo.push(eve(this[i]));
        
    }
    return aregloNuevo;
}
const mostrar = arreglo.metodoMap((element) =>          element *2);
    console.log(mostrar);
    const globalVar = "xyz";
    (function outerFun (outerArg){
        const outerVar = 'a';
    (function innerFunc (innerArg){
        const innerVar = 'b';
        console.log(

        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar );
 // 2
    })(456);
})(123);

//////////////////////////////////////////////////////

//seria la mejor opcion la concat ya que crea un solo arreglo como lo dice en las instrucciones 
const cliente= ['martin', 'jose','santiago'];
    const empleados=['cristian', 'angel', 'dominic'];
    const conc = cliente.concat(empleados);
    console.log(conc);

///////////////////////////////////////////

//auque funciona similar de
const cliente1= ['martin', 'jose','santiago'];
    const empleados1=['cristian', 'angel', 'dominic'];
    console.log(cliente1.join(empleados1));

///////////////////////////////////////////////

const cliente2= ['martin', 'jose','santiago'];
const empleados2=['cristian', 'angel', 'dominic'];
const count = cliente2.push(empleados2)
console.log(count);
console.log(cliente2);

//////////////////////////////////////////////


const cliente3= ['martin', 'jose','santiago'];
cliente3.splice(3, 0, 'cristian', 'angel', 'dominic');

console.log(cliente3);

/////////////////////////////////////////////
//imprime los valores impares de nustro areglo 
const numbers= [5, 32, 43, 4];

 const resul =numbers.filter(function(n){
//la exprecion lo que hace es buscar los numeros impares
    return  n %2 !== 0;

});
console.log(resul);

//////////////////////////////////////////////////

const people1=[{
    id:1,
    name:"john",
    age: 28
},{
    id:2,
    name:"Jane",
    age: 31
},{ 
    id:3,
    name:"Peter",
    age:55
}];
const final= people1.filter(people => people.age < 35);
console.log(final);


//////////////////////////////////////////////////

let people2 =[{name:"bob", id:1},{name: "john", id:2},{name: "alex", id:3},{name:"john", id:3}];

const nombreCounts = people2.reduce((num, people) => {
    num[people.name] = (num[people.name] || 0) + 1;
    return num;
  }, {});
  
  console.log(nombreCounts);

  /////////////////////////////////////////////////////////

  const myarreglo=[1,2,3,4];
  const max= Math.max(1,2,3,4)
  const min= Math.min(1,2,3,4,5);
  console.log(`maximo:${max} minimo:${min}`);

  ////////////////////////////////////////////////////

  let objeto = {
    key1:10,
    key2:3,
    key3:40,
    key4:20
  };
const fin= Object.values(objeto).sort((a, b) => a -b);
console.log(fin);