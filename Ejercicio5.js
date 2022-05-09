//SOLICITAR TRES NÚMEROS Y MOSTRAR EL MAYOR (CONSIDERAR DOS IGUALES)
var num1=Number(prompt('Ingresa el primer número'));
var num2=Number(prompt('Ingresa el segundo número'));
var num3=Number(prompt('Ingresa el tercer número'));
if(num1==num2 && num1==num3 ) console.log("Todos los números son iguales")
else{
if(num1>num2)
{
    if(num1>num3) console.log("El número" +num1+ "es el mayor")
    else console.log ("El número" +num3+ "es el mayor")
}
else if(num2>num1)
{
    if(num2>num3) console.log("El número" +num2+ "es el mayor")
    else console.log ("El número" +num3+ "es el mayor")
}

else if(num1==num2)
{
    if(num2>num3) console.log("Los número" +num2+ "y" +num1+ "son los mayores")
    else console.log ("El número" +num3+ "es el mayor")
}


else if(num1==num3)
{
    if(num1>num2) console.log("Los número" +num1+ "y" +num3+ "son mayores")
    else console.log ("El número" +num2+ "es el mayor")
}

else if(num2==num3)
{
    if(num2>num1) console.log("Los número" +num2+ "y" +num3+ "son mayores")
    else console.log ("El número" +num1+ "es el mayor")
}
}

