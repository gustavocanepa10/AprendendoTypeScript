let user : {name: string, age: number, avatarUrl? : string } = {
    name: "Gustavo",
    age: 21
    

}

/*
function signIn(email:string, password:string) {
    // Lógica de conectar o usuário na aplicação.

}

signIn("Gustavo@email.com", "12345")
*/
/* Colocar interrogação na propriedade ela se torna opcional
na definição dentro do escopo
*/


function signIn({email,password}: {email:string, password:string}) {
    // Lógica de conectar o usuário na aplicação.
    console.log("Usuário" + email + "Conectado")

}

// Preciso declarar a propriedade aqui também.
signIn({email:"gustavo@email.com", password: "123"})

