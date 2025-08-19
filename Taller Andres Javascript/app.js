//punto 1
/* 
let numero=Number (prompt("Dame un numero..."))

if (numero > 0){alert("Este numero es positivo " + numero)}
else if (numero <0){alert("Este numero es negativo " + numero)}
else {alert("este numero es " + numero)} */

//punto 2
/* 
let numero=Number (prompt("Dame un numero..."))
let num=Number (prompt("Dame otro numero..."))

if (numero > 0){alert("Este numero es positivo " + numero)}
if (num > 0){alert("Este numero es positivo " + num)} */

//punto 3
/* let numero=Number (prompt("dame un numerito "))
let num=Number (prompt("dame otro numerito "))

if (numero===num){
    let multiplicacion= numero*num 
    {alert("El resultado de la multiplicacion es  " + multiplicacion )}
}

if (numero > num) {
let resta= numero-num
{alert("El resultado de la resta es " + resta)}

}

else if (numero < num){
    let suma= numero+num
    {alert("El resultado de la suma es " + suma)}
} */

//punto 4
/* alert("Precio del articulo 5.99 dollars")
let pago=Number(prompt("Con cuanto me vas a pagar "))

 if (pago>5.99){
    let resta=pago-5.99
    {alert("tu devuelta es: "+resta+" dollars")}
 }
 else if (pago <5.99){alert("No te alcanza para el articulo ")}  */

 //punto 5

/* let numeroVacunas = Number(prompt("Ingrese la cantidad de vacunas aplicadas:"));
let costoVacuna = Number(prompt("Ingrese el costo de una vacuna:"));
let costoAplicacion = Number(prompt("Ingrese el costo de aplicación por vacuna:"));

let total = (costoVacuna+costoAplicacion)*numeroVacunas ;
alert("El gasto total es: " +total) */

//punto 6

/* let preciocamisa = 20000;
let cantidad = Number(prompt("Ingrese la cantidad de camisas que desea comprar:"));

let total = cantidad * preciocamisa;
let descuento = 0;

if (cantidad >= 3) {
    descuento = total * 0.20;
} else {
    descuento = total * 0.10;
}

let totalcondescuento = total - descuento;

alert("El total a pagar es: $" + totalcondescuento); */

//punto 7 
/* 
let inicio=Number(prompt("Iniciar con el dinero que comenzo el tendero"))
alert("pago a acrededores de 10%");

let ventas = 800000 * 4;  
let totaldecaja = inicio + ventas;

let pago = totaldecaja * 0.10; 
let dinerofinal = totaldecaja - pago;

alert("El dinero final del tendero es: $" + dinerofinal); */

//punto 8

/* let venta1=Number(prompt("Venta dia lunes"))
let venta2=Number(prompt("Venta dia martes"))
let venta3=Number(prompt("Venta dia miercoles"))
let venta4=Number(prompt("Venta dia jueves"))
let venta5=Number(prompt("Venta dia viernes"))

let suma = venta1 + venta2 + venta3 + venta4 + venta5;
let promedio = suma / 5;

alert("El promedio de los ultimos 5 dias es: " + promedio) */

//punto 9
/* 
let num=Number (prompt("Dame un numero..."));
let num1=Number (prompt("Dame otro numero..."));
let operacion=(prompt("Que operacion deseas hacer ( +, -, *, /)"));

let resultado;

if (operacion === "+")
    {resultado = num + num1}
else if (operacion === "-")
    {resultado = num - num1}
else if (operacion === "*")
    {resultado = num * num1}
else if (operacion === "/")
    {resultado = num / num1}

else{alert("operacion no valida")}

alert("El resultado es: " + Math.round(resultado)) */

//punto 10
/* 
let num1=Number(prompt("Dime un numero... "))
let num2=Number(prompt("Dime otro numero... "))
let num3=Number(prompt("Dime un ultimo numero... "))

let mayor= Math.max (num1, num2, num3)
let menor= Math.min (num1, num2, num3)
let medio= (num1, num2, num3) - mayor - menor;

alert("Mayor: " + mayor)
alert("Menor: " + menor)
alert("Medio: " + medio)

if (num1 === num2 && num2 === num3) {
  alert("Los tres números son iguales.");
} 
else if (num1 === num2 || num1 === num3 || num2 === num3) {
  alert("Hay números iguales.");
} 
else {
  alert("Todos los números son diferentes.");
} */

//punto 11
/* 
let edad=Number(prompt("¿Què edad tienes?"))
let estatura=Number(prompt("¿Cual es tu estatura en metros?"))
let peso=Number(prompt("¿Cual es tu peso en kilogramos?"))

if (edad > 18 && estatura >1.7 && peso >= 50 && peso <= 90) {
   alert("El deportista ha sido seleccionado para el equipo ");
}

else {
    alert("El deportista NO cumple con los requisitos ");
} 
 */
//punto 12

/* let salario_min = 1000;  

alert("Salario mínimo actual: " + salario_min+" dollars"+'\n'+
"si tu salario es menor, entonces recibira un 10% de aumento"
);

let salario_del_trabajador = Number(prompt("Ingrese su salario actual:"));

let aumento=0.10*salario_del_trabajador


if (salario_del_trabajador<=salario_min){
  let salario_final=salario_del_trabajador+aumento;
  alert("su salario tuvo un aumento del 10%: "+salario_final+" dollars")
}
else{
alert("tu salario, no recibe nigun aumento")
} */

//punto 13
/* 
let datos = [];

datos [0] = prompt("Dame el primer nombre")
datos [1] = prompt("Dame el segundo nobre")
datos [2] = prompt("Dame el tercer nombre")

alert("Los datos ingresados son " + datos) */

//punt 14
/* 
let nombres = [];

while (true) {
  let nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");

  if (nombre.toLowerCase() === "salir") {
    break;
  }

  nombres.push(nombre);

  document.write(nombre + "<br>");
} */

//punto 15
/* 
let correcto = false

while (!correcto){
    let num1 = Math.floor(Math.random() *9)+1
    let num2 = Math.floor(Math.random() *9)+1

    let resultado=num1*num2

    let respuesta=Number (prompt("cuanto es "+num1+" * "+num2))

if (respuesta=resultado){
    alert("felicidades tu respuesta es CORRECTA")
} 

else{
    alert("Tu respuesta es incorrecta")
}

} */