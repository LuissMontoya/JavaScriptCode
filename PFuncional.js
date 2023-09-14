//Programación Funcional

const numeros = [1,2,3,4,5,6,7,8,9];

const mascotas = [
    {nombre: "Micho" , edad: 12, raza: "gato"},
    {nombre: "Morita" , edad: 3, raza: "perro"},
    {nombre: "Zeus" , edad: 10, raza: "perro"},
    {nombre: "Pulga" , edad: 16, raza: "gato"}
];

//console.log(mascotas, numeros);
const numerosFiltrados = numeros.filter(x=> x <5);
console.log(numerosFiltrados);

console.log('----------');

const perros = mascotas.filter(x => x.raza == 'perro');
console.log(perros);

/*-------------------------*/
//Método MAP
//multiplica por 2
const multiplicados = numeros.map(x => x *2);
console.log(multiplicados);