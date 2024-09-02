import './commands';



Cypress.on('uncaught:exception', (err, runnable) => {
    // Verifica se o erro contém a mensagem específica
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
        // Ignora o erro e continua com o teste
        return false;
    }
    // Permite que o Cypress falhe o teste para outros erros
    return true;
});
