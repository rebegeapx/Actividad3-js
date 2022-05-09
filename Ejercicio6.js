//SOLICITAR NOMBRE Y EDAD (MARIO, CARLOS Y + 18 PUEDEN ENTRAR)
var edad=Number(prompt('Ingresa tu edad'));
var nombre=(prompt('Ingresa tu nombre'));
if(edad<18)
{
    console.log("No puedes entrar, eres menor de edad")
    alert("No puedes entrar, eres menor de edad")
} 
else if(edad>=18 && nombre=="Mario"||nombre=="Carlos")
{
    alert("Puedes entrar como VIP")
    console.log("Puedes entrar como VIP")
}
else if(edad>=18)
{
    console.log("Puedes entrar")
    alert("Puedes entrar")
} 
