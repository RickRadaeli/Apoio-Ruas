// =========================================
// MÓDULO 3: FUNCIONALIDADES INTERATIVAS (MÁSCARAS)
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Funções de Máscara
    
    // MÁSCARA CPF: 000.000.000-00
    const inputCPF = document.getElementById('cpf');
    if (inputCPF) {
        inputCPF.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
            value = value.slice(0, 11); // Limita a 11 dígitos

            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{3})/, "$1.$2");
            }
            e.target.value = value;
        });
    }

    // MÁSCARA TELEFONE: (00) 90000-0000 ou (00) 0000-0000
    const inputTelefone = document.getElementById('telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
            value = value.slice(0, 11); // Limita a 11 dígitos (incluindo o 9)

            if (value.length === 11) {
                // Formato (00) 90000-0000
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
            } else if (value.length === 10) {
                // Formato (00) 0000-0000
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
            } else if (value.length > 2) {
                 value = value.replace(/(\d{2})(\d+)/, "($1) $2");
            }
            e.target.value = value;
        });
    }

    // MÁSCARA CEP: 00000-000
    const inputCEP = document.getElementById('cep');
    if (inputCEP) {
        inputCEP.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
            value = value.slice(0, 8); // Limita a 8 dígitos

            if (value.length > 5) {
                value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
            }
            e.target.value = value;
        });
    }

    // Exemplo de Validação Avançada (Alerta de Confirmação no Submit)
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            // Se a validação nativa do HTML falhar, este bloco não é executado.
            if (!formCadastro.checkValidity()) {
                console.log("Formulário inválido, verifique os campos em vermelho.");
                return;
            }
            
            // Simulação de envio
            e.preventDefault();
            console.log("Dados do formulário válidos. Simulação de envio para o servidor.");
            
            // ATENÇÃO: Nunca use window.alert/confirm em imersivas. 
            // Usamos aqui um log para indicar o sucesso.
            alert("Cadastro realizado com sucesso! Em breve entraremos em contato.");
            // formCadastro.reset();
        });
    }
});