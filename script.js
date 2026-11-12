
// Função para enviar uma mensagem
function enviarMensagem() {

    // Captura o texto digitado pelo usuário
    let campo = document.getElementById("user-input");

    let pergunta = campo.value.trim();

    // Verifica se o campo não está vazio
    if (pergunta === "") {
        return;
    }

    // Mostra a pergunta na tela
    adicionarMensagem(pergunta, "user");

    // Limpa o campo
    campo.value = "";

    // Aguarda um pequeno intervalo para responder
    setTimeout(function() {

        let resposta = gerarResposta(pergunta);

        adicionarMensagem(resposta, "bot");

    }, 500);
}


// Função para adicionar mensagens na conversa
function adicionarMensagem(texto, tipo) {

    let chat = document.getElementById("chat-box");

    let mensagem = document.createElement("div");

    mensagem.classList.add("message", tipo);

    mensagem.textContent = texto;

    chat.appendChild(mensagem);

    // Desce automaticamente até a última mensagem
    chat.scrollTop = chat.scrollHeight;
}


// Função que interpreta a pergunta
function gerarResposta(pergunta) {

    // Converte tudo para letras minúsculas
    let texto = pergunta.toLowerCase();

    // Identifica as palavras e retorna respostas

    if (texto.includes("olá") || texto.includes("oi")) {

        return "Olá! Que bom conversar com você! Como posso ajudar?";

    }

    else if (texto.includes("html")) {

        return "HTML é uma linguagem de marcação utilizada para criar a estrutura das páginas da internet.";

    }

    else if (texto.includes("css")) {

        return "CSS é utilizado para estilizar páginas web, definindo cores, fontes, tamanhos e layouts.";

    }

    else if (texto.includes("javascript")) {

        return "JavaScript é uma linguagem de programação que permite adicionar interatividade aos sites.";

    }

    else if (texto.includes("inteligência artificial") || texto.includes("ia")) {

        return "Inteligência Artificial é uma tecnologia que permite que máquinas realizem tarefas que normalmente exigem capacidades humanas, como reconhecer padrões e gerar textos.";

    }

    else if (texto.includes("programação")) {

        return "Programação é o processo de criar instruções para que o computador execute determinadas tarefas.";

    }

    else if (texto.includes("curso")) {

        return "O curso técnico de informática prepara os alunos para trabalhar com programação, redes, manutenção, desenvolvimento web e tecnologia.";

    }
 // Perguntas sobre a Aninha
if (
    texto.includes("pq a aninha nao recebe amor reciproco") ||
    texto.includes("por que a aninha nao recebe amor reciproco")
) {
    return "pq ninguem quer ela";
}

else if (texto.includes("a aninha ja foi amada reciprocamente")) {
    return "nao";
}
   
    

    else if (texto.includes("horário") || texto.includes("aula")) {

        return "Para consultar os horários das aulas, procure a secretaria ou consulte os canais oficiais da escola.";

    }

    else if (texto.includes("professor")) {

        return "Os professores estão aqui para ajudar você a aprender e desenvolver suas habilidades!";

    }

    else if (texto.includes("obrigado") || texto.includes("obrigada")) {

        return "Por nada! Estou sempre pronto para ajudar!";

    }

    else if (texto.includes("tchau")) {

        return "Até logo! Continue estudando e explorando a tecnologia!";

    }

    else {

        return "Ainda não sei responder essa pergunta. 🤔 Tente perguntar sobre HTML, CSS, JavaScript, programação ou Inteligência Artificial.";

    }

}


// Função dos botões de perguntas sugeridas
function perguntar(texto) {

    document.getElementById("user-input").value = texto;

    enviarMensagem();

}
