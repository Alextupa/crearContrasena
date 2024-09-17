let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890@$%#*'

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
    };

    let password = '';
    for(let i=0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
        
    };
    contraseña.value = password;
}
