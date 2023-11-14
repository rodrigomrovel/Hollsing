const backendUrl = 'http://localhost:3003/cliente'
const backendLogin = 'http://localhost:3003/login'

//erro do await 32 sem fetch e no 1 e 2 com os links errados



//cadastro---------------------------------------------------
//confirmação de senha------------------------------------------

const cadastrar = document.querySelector('#formularioCadastro')

cadastrar.addEventListener('submit',cadastrarCliente)

async function cadastrarCliente(event){
    
    event.preventDefault()

    const email = document.querySelector('#emailCadastro-box').value;
    alert(email)
    const senha = document.querySelector('#senhaCadastro-box').value;
    alert(senha)
    const confirmarsenha = document.querySelector('#confirmarSenha-box').value;
    
    if (senha !== confirmarsenha){
        alert('As senhas não coincidem');
        return;
    }
    const cliente = {
        email: email,
        senha: senha
    };
    
    console.log(cliente);
    try{
        const conectar = await fetch(
            backendUrl,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cliente)
            }
        )
        if(conectar.ok){
            document.querySelector('#formularioCadastro').reset()
            window.location.href = 'index.html'

        }else{
            console.error('ocorreu um erro ao tentar conectar-se com o servidor')
        };



    }catch(error){
        console.error('erro crtico',error)
    }
};

//login ----------------------------------------

 document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('formularioLogin');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email-box').value;
        const senha = document.getElementById('senha-box').value;

        try {
            const response = await fetch(backendLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                console.log('kk');
                window.location.href = 'index.html'
                console.log('Login bem-sucedido:', data.message);
                
            } else {
                console.error('Erro no login:', data.message);
                alert('Senha ou Email inválidos')
            }
        } catch (error) {
            console.error('Erro ao processar login:', error);
        }
    });
});



