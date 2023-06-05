$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00.000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
               required: true
            },
            cpf: {
                required: true
             },
            endereçoCompleto: {
               required: true
            },
            cep: {
               required: true
            },
             
        },
        messages: {
            nomeCompleto:'Por favor, insira o seu nome completo',
        
            endereçoCompleto:'Digite o seu endereço completo',
            email:'Preenchimento obrigatório',
            telefone:'Preenchimento obrigatório',
            cpf:'Preenchimento obrigatório',
            cep:'Preenchimento obrigatório'
        },
        submitHandler: function(form) {
            console.log(form)
            nomeCompleto.value = "";
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})