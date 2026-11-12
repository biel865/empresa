
// ==========================================
// FUNÇÃO PARA ENVIAR UMA MENSAGEM
// ==========================================

function enviarMensagem() {
    let campo = document.getElementById("user-input");
    let pergunta = campo.value.trim();

    if (pergunta === "") return;

    adicionarMensagem(pergunta, "user");
    campo.value = "";

    setTimeout(function() {
        let resposta = gerarResposta(pergunta);
        adicionarMensagem(resposta, "bot");
    }, 500);
}

// ==========================================
// FUNÇÃO PARA ADICIONAR MENSAGENS
// ==========================================

function adicionarMensagem(texto, tipo) {
    let chat = document.getElementById("chat-box");
    let mensagem = document.createElement("div");

    mensagem.classList.add("message", tipo);
    mensagem.textContent = texto;

    chat.appendChild(mensagem);
    chat.scrollTop = chat.scrollHeight;
}

// ==========================================
// FUNÇÃO QUE INTERPRETA AS PERGUNTAS
// ==========================================

function gerarResposta(pergunta) {

    let texto = pergunta
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    // 1. NOME DA ESCOLA
    if (
        texto.includes("nome da nossa escola") ||
        texto.includes("nome da escola") ||
        texto.includes("qual escola estudamos") ||
        texto.includes("onde estudamos") ||
        texto.includes("qual e a nossa escola") ||
        texto.includes("qual e o nome da escola") ||
        texto.includes("qual o nome da escola") ||
        texto.includes("escola maria bauab")
    ) {
        return "Nossa escola é a Escola Estadual Maria Bauab Gibram! Seja bem-vindo!";
    }

    // 2. COMO NOSSA ESCOLA É CONHECIDA
    else if (
        texto.includes("como nossa escola e conhecida") ||
        texto.includes("como a escola e conhecida") ||
        texto.includes("como somos conhecidos")
    ) {
        return "Somos uma comunidade escolar dedicada à educação, ao conhecimento e à formação dos estudantes!";
    }

    // 3. ONDE FICA NOSSA ESCOLA
    else if (
        texto.includes("onde fica nossa escola") ||
        texto.includes("onde fica a escola") ||
        texto.includes("qual o endereco da escola") ||
        texto.includes("localizacao da escola")
    ) {
        return "Estamos localizados em Campo Belo, MG.";
    }

    // 4. DIRETOR
    else if (
        texto.includes("quem e o diretor") ||
        texto.includes("nome do diretor") ||
        texto.includes("diretor da escola")
    ) {
        return "Nosso diretor é o Marcos.";
    }

    // 5. VICE-DIRETORA
    else if (
        texto.includes("quem e a vice-diretora") ||
        texto.includes("quem e a vice diretora") ||
        texto.includes("nome da vice-diretora") ||
        texto.includes("vice-diretora da escola")
    ) {
        return "Nossa vice-diretora é a Brayne.";
    }

    // 6. HORÁRIO DE FUNCIONAMENTO
    else if (
        texto.includes("horario de funcionamento") ||
        texto.includes("que horas a escola funciona") ||
        texto.includes("horario da escola")
    ) {
        return "Nosso funcionamento é das 7h às 18h, conforme os períodos de atendimento.";
    }

    // 7. QUANTIDADE DE ALUNOS
    else if (
        texto.includes("quantos alunos") ||
        texto.includes("quantidade de alunos") ||
        texto.includes("numero de estudantes")
    ) {
        return "Atualmente temos aproximadamente 300 estudantes.";
    }

    // 8. O QUE TORNA A ESCOLA ESPECIAL
    else if (
        texto.includes("o que torna nossa escola especial") ||
        texto.includes("o que nossa escola tem de especial") ||
        texto.includes("diferencial da escola")
    ) {
        return "Nossa escola é construída diariamente por estudantes, professores e funcionários que fazem parte dessa comunidade!";
    }

    // 9. PROFESSORES
    else if (
        texto.includes("quem sao nossos professores") ||
        texto.includes("quem sao os professores") ||
        texto.includes("equipe de professores")
    ) {
        return "Temos uma equipe de professores dedicada ao ensino e à aprendizagem.";
    }

    // 10. PROFESSORES DE INFORMÁTICA
    else if (
        texto.includes("quem da aula de informatica") ||
        texto.includes("professor de informatica") ||
        texto.includes("professores de informatica")
    ) {
        return "Os professores de informática são Romano e João Paulo.";
    }

    // 11. PROFESSOR DE MATEMÁTICA
    else if (
        texto.includes("quem da aula de matematica") ||
        texto.includes("professor de matematica")
    ) {
        return "Nosso professor de matemática é a Roseli.";
    }

    // 12. PROFESSOR DE PORTUGUÊS
    else if (
        texto.includes("quem da aula de portugues") ||
        texto.includes("professor de portugues") ||
        texto.includes("professora de portugues")
    ) {
        return "Nossa professora de português é o Betuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu.";
    }

    // 13. COORDENAÇÃO DO CURSO TÉCNICO
    else if (
        texto.includes("quem coordena o curso tecnico") ||
        texto.includes("coordenador do curso tecnico") ||
        texto.includes("coordenacao do curso tecnico")
    ) {
        return "A coordenação do curso técnico é responsabilidade de Romano e João Paulo.";
    }

    // 14. PROFESSOR MAIS ENGRAÇADO
    else if (
        texto.includes("professor mais engracado") ||
        texto.includes("quem e o professor mais engracado")
    ) {
        return "Essa é uma pergunta difícil! Cada professor tem seu jeito especial de ensinar! 😂";
    }

    // 15. QUEM ENSINA JAVASCRIPT
    else if (
        texto.includes("quem ensina javascript") ||
        texto.includes("professor de javascript") ||
        texto.includes("quem da aula de javascript")
    ) {
        return "Quem ensina JavaScript é o Romano.";
    }

    // 16. FUNCIONÁRIOS
    else if (
        texto.includes("quem sao os funcionarios") ||
        texto.includes("funcionarios da escola") ||
        texto.includes("equipe de funcionarios")
    ) {
        return "Nossa escola conta com profissionais da secretaria, limpeza, alimentação, apoio e gestão.";
    }

    // 17. INÍCIO DAS AULAS
    else if (
        texto.includes("que horas comecam as aulas") ||
        texto.includes("horario de inicio das aulas") ||
        texto.includes("inicio das aulas")
    ) {
        return "As aulas começam às 7h.";
    }

    // 18. FIM DAS AULAS
    else if (
        texto.includes("que horas termina o periodo escolar") ||
        texto.includes("que horas termina o periodo") ||
        texto.includes("que horas terminam as aulas") ||
        texto.includes("fim das aulas")
    ) {
        return "Nosso período termina às 15:10.";
    }

    // 19. HORÁRIO DO RECREIO
    else if (
        texto.includes("qual e o horario do recreio") ||
        texto.includes("que horas e o recreio") ||
        texto.includes("horario do recreio") ||
        texto.includes("quando e o recreio")
    ) {
        return "Nosso recreio acontece às 9:30.";
    }

    // 20. LOCAL DO LANCHE
    else if (
        texto.includes("onde os alunos fazem o lanche") ||
        texto.includes("onde fazemos lanche") ||
        texto.includes("onde os alunos lancham")
    ) {
        return "Os alunos utilizam o espaço destinado à alimentação.";
    }

    // 21. LABORATÓRIO DE INFORMÁTICA
    else if (
        texto.includes("podemos utilizar o laboratorio") ||
        texto.includes("pode usar o laboratorio") ||
        texto.includes("laboratorio de informatica")
    ) {
        return "Sim, conforme o planejamento das aulas e a orientação dos professores.";
    }

    // 22. USO DO CELULAR
    else if (
        texto.includes("podemos utilizar o celular") ||
        texto.includes("pode usar celular") ||
        texto.includes("celular na escola")
    ) {
        return "Devemos seguir as regras da escola e as orientações dos professores.";
    }

    // 23. ATRASOS
    else if (
        texto.includes("aluno chega atrasado") ||
        texto.includes("chegar atrasado") ||
        texto.includes("cheguei atrasado") ||
        texto.includes("atraso na escola")
    ) {
        return "O estudante deve seguir os procedimentos estabelecidos pela escola.";
    }

    // 24. JUSTIFICAR FALTAS
    else if (
        texto.includes("justificar uma falta") ||
        texto.includes("justificar falta") ||
        texto.includes("justificar minhas faltas") ||
        texto.includes("faltei na escola")
    ) {
        return "Procure a secretaria ou a equipe responsável para receber orientações.";
    }

    // 25. NOTAS
    else if (
        texto.includes("duvidas sobre minhas notas") ||
        texto.includes("consultar minhas notas") ||
        texto.includes("ver minhas notas") ||
        texto.includes("minhas notas")
    ) {
        return "Converse com seu professor ou procure a equipe pedagógica.";
    }

    // 26. INTERVALOS
    else if (
        texto.includes("o que acontece nos intervalos") ||
        texto.includes("o que fazemos no intervalo") ||
        texto.includes("atividades no intervalo")
    ) {
        return "É um momento de descanso, alimentação e convivência entre os estudantes.";
    }

    // 27. EVENTOS ESCOLARES
    else if (
        texto.includes("a escola realiza eventos") ||
        texto.includes("tem eventos na escola") ||
        texto.includes("eventos escolares") ||
        texto.includes("quais eventos acontecem")
    ) {
        return "Sim! Os eventos escolares promovem cultura, conhecimento, integração e diversão.";
    }

    // 28. PROJETOS DA ESCOLA
    else if (
        texto.includes("como faco para participar dos projetos") ||
        texto.includes("como participar dos projetos") ||
        texto.includes("participar dos projetos") ||
        texto.includes("projetos da escola")
    ) {
        return "Converse com os professores e acompanhe os comunicados da escola.";
    }

    // 29. MATÉRIAS DO CURSO TÉCNICO
    else if (
        texto.includes("quais sao as materias do curso tecnico") ||
        texto.includes("materias do curso tecnico") ||
        texto.includes("disciplinas do curso tecnico") ||
        texto.includes("o que estudamos no curso tecnico")
    ) {
        return "Estudamos áreas como programação web, lógica de programação, redes, sistemas operacionais, robótica e banco de dados, conforme a organização curricular.";
    }

    // 30. LÓGICA DE PROGRAMAÇÃO
    else if (
        texto.includes("o que e logica de programacao") ||
        texto.includes("logica de programacao")
    ) {
        return "É a capacidade de organizar instruções para resolver problemas utilizando algoritmos.";
    }

    // 31. PROGRAMAÇÃO WEB
    else if (
        texto.includes("o que aprendemos em programacao web") ||
        texto.includes("o que e programacao web") ||
        texto.includes("programacao web")
    ) {
        return "Aprendemos a desenvolver sites e sistemas utilizando HTML, CSS, JavaScript, PHP e outras tecnologias.";
    }

    // 32. ROBÓTICA
    else if (
        texto.includes("o que e robotica") ||
        texto.includes("robotica")
    ) {
        return "É a área que envolve a construção e programação de robôs e dispositivos automatizados.";
    }

    // 33. REDES DE COMPUTADORES
    else if (
        texto.includes("o que aprendemos em redes") ||
        texto.includes("redes de computadores") ||
        texto.includes("o que e rede de computadores")
    ) {
        return "Aprendemos como computadores se conectam e compartilham informações.";
    }

    // 34. MANUTENÇÃO DE COMPUTADORES
    else if (
        texto.includes("o que e manutencao de computadores") ||
        texto.includes("manutencao de computadores")
    ) {
        return "É o processo de identificar problemas, realizar reparos e manter computadores funcionando corretamente.";
    }

    // 35. BANCO DE DADOS
    else if (
        texto.includes("o que e banco de dados") ||
        texto.includes("banco de dados")
    ) {
        return "É uma estrutura utilizada para armazenar e organizar informações.";
    }

    // 36. PHP
    else if (
        texto.includes("o que e php") ||
        texto === "php"
    ) {
        return "É uma linguagem de programação utilizada no desenvolvimento de sistemas web.";
    }

    // 37. MYSQL
    else if (
        texto.includes("o que e mysql") ||
        texto === "mysql"
    ) {
        return "É um sistema utilizado para gerenciar bancos de dados.";
    }

    // 38. ARDUINO
    else if (
        texto.includes("o que e arduino") ||
        texto === "arduino"
    ) {
        return "É uma plataforma eletrônica utilizada para desenvolver projetos de automação e robótica.";
    }

    // 39. CRIAÇÃO DE JOGOS
    else if (
        texto.includes("o curso ensina a criar jogos") ||
        texto.includes("aprendemos a criar jogos") ||
        texto.includes("podemos criar jogos") ||
        texto.includes("criar jogos no curso")
    ) {
        return "Podemos desenvolver jogos utilizando lógica de programação e ferramentas de desenvolvimento.";
    }

    // 40. TÉCNICO EM INFORMÁTICA
    else if (
        texto.includes("o que um tecnico em informatica pode fazer") ||
        texto.includes("trabalho de um tecnico em informatica") ||
        texto.includes("onde pode trabalhar um tecnico") ||
        texto.includes("o que faz um tecnico em informatica")
    ) {
        return "Pode atuar em suporte técnico, manutenção, redes, programação e outras áreas da tecnologia.";
    }

    // 41. SEMANA DA PROGRAMAÇÃO
    else if (
        texto.includes("o que e a semana da programacao") ||
        texto.includes("semana da programacao") ||
        texto.includes("sobre a semana da programacao")
    ) {
        return "É um evento dedicado à tecnologia, programação, criatividade e inovação!";
    }

    // 42. DATA DA SEMANA DA PROGRAMAÇÃO
    else if (
        texto.includes("quando acontecera a semana da programacao") ||
        texto.includes("quando sera a semana da programacao") ||
        texto.includes("data da semana da programacao") ||
        texto.includes("quais dias sera o evento")
    ) {
        return "O evento acontecerá nos dias 20.";
    }

    // 43. ATRAÇÕES DA SEMANA DA PROGRAMAÇÃO
    else if (
        texto.includes("quais serao as atracoes") ||
        texto.includes("atracoes da semana da programacao") ||
        texto.includes("o que vai ter na semana da programacao")
    ) {
        return "Teremos [LISTA DE ATRAÇÕES CONFIRMADAS]!";
    }

    // 44. COMPETIÇÃO DE PROGRAMAÇÃO
    else if (
        texto.includes("tera competicao de programacao") ||
        texto.includes("competicao de programacao") ||
        texto.includes("competicao de codigo")
    ) {
        return "nao havera.";
    }

    // 45. CAMPEONATO DE JOGOS
    else if (
        texto.includes("tera campeonato de jogos") ||
        texto.includes("campeonato de jogos") ||
        texto.includes("competicao de jogos") ||
        texto.includes("torneio de games")
    ) {
        return "nao havera.";
    }

    // 46. APRESENTAÇÃO DE ROBÓTICA
    else if (
        texto.includes("tera apresentacao de robotica") ||
        texto.includes("apresentacao de robotica") ||
        texto.includes("atividades de robotica")
    ) {
        return "havera.";
    }

    // 47. EXPOSIÇÃO DE PROJETOS
    else if (
        texto.includes("tera exposicao de projetos") ||
        texto.includes("exposicao de projetos dos alunos") ||
        texto.includes("projetos dos alunos") ||
        texto.includes("mostra de projetos")
    ) {
        return "havera.";
    }

    // 48. QUEM PODE PARTICIPAR
    else if (
        texto.includes("quem pode participar") ||
        texto.includes("quem podera participar") ||
        texto.includes("publico participante") ||
        texto.includes("participantes da semana da programacao")
    ) {
        return "todos os alunos.";
    }

    // 49. PREMIAÇÃO
    else if (
        texto.includes("tera premiacao") ||
        texto.includes("vai ter premios") ||
        texto.includes("quais serao os premios") ||
        texto.includes("premios da semana da programacao")
    ) {
        return "o premio e supresa.";
    }

    // 50. COMO PARTICIPAR DAS ATIVIDADES
    else if (
        texto.includes("como posso participar das atividades") ||
        texto.includes("como participar das atividades") ||
        texto.includes("como faco para participar") ||
        texto.includes("inscricao nas atividades")
    ) {
        return "Procure os professores organizadores para conhecer as inscrições e orientações.";
    }

    // 51. DESAFIOS DE HTML, CSS E JAVASCRIPT
    else if (
        texto.includes("tera desafios de html") ||
        texto.includes("desafios de html css e javascript") ||
        texto.includes("desafios de programacao")
    ) {
        return "nao havera.";
    }

    // 52. PALESTRAS SOBRE INTELIGÊNCIA ARTIFICIAL
    else if (
        texto.includes("tera palestras sobre inteligencia artificial") ||
        texto.includes("palestras sobre inteligencia artificial") ||
        texto.includes("palestras de ia")
    ) {
        return "HAVERÁ.";
    }

    // 53. POR QUE PARTICIPAR DA SEMANA
    else if (
        texto.includes("por que participar da semana da programacao") ||
        texto.includes("por que participar desse evento") ||
        texto.includes("importancia da semana da programacao")
    ) {
        return "Porque é uma oportunidade de aprender, compartilhar conhecimentos e mostrar seu talento na tecnologia!";
    }

    // ======================================
    // NOVAS PERGUNTAS
    // ======================================

    // 54. MELHOR LUGAR DA ESCOLA
    else if (
        texto.includes("qual e o melhor lugar da escola") ||
        texto.includes("melhor lugar da escola") ||
        texto.includes("lugar favorito da escola")
    ) {
        return "Cada cantinho tem sua importância, mas o laboratório de informática tem um charme especial! 🤖";
    }

    // 55. MELHOR MATÉRIA
    else if (
        texto.includes("qual e a melhor materia") ||
        texto.includes("melhor materia") ||
        texto.includes("materia favorita")
    ) {
        return "Aquela em que você aprende algo novo todos os dias!";
    }

    // 56. COMPUTADOR TRAVADO
    else if (
        texto.includes("computador trava") ||
        texto.includes("computador travou") ||
        texto.includes("quando o computador trava")
    ) {
        return "Calma! Chame o pessoal da informática! 😂";
    }

    // 57. REI OU RAINHA DA PROGRAMAÇÃO
    else if (
        texto.includes("rei da programacao") ||
        texto.includes("rainha da programacao") ||
        texto.includes("rei ou rainha da programacao") ||
        texto.includes("quem manda na programacao")
    ) {
        return "Essa disputa está aberta! Mostre suas habilidades!";
    }

    // 58. QUANDO ACABA A INTERNET
    else if (
        texto.includes("quando acaba a internet") ||
        texto.includes("acabou a internet") ||
        texto.includes("sem internet")
    ) {
        return "É hora de testar nossos conhecimentos de informática offline!";
    }

    // 59. SENTIMENTOS DO CHATBOT
    else if (
        texto.includes("chatbot tem sentimentos") ||
        texto.includes("voce tem sentimentos") ||
        texto.includes("voce sente emocoes")
    ) {
        return "Ainda não, mas fui programado para ser muito simpático!";
    }

    // 60. QUEM MANDA NA TECNOLOGIA DA ESCOLA
    else if (
        texto.includes("quem manda na tecnologia") ||
        texto.includes("quem controla a tecnologia da escola")
    ) {
        return "Os estudantes que estão aprendendo a transformar ideias em soluções!";
    }

    // 61. FUTURO DA ESCOLA
    else if (
        texto.includes("qual e o futuro da nossa escola") ||
        texto.includes("futuro da escola") ||
        texto.includes("como sera o futuro da escola")
    ) {
        return "Um futuro cheio de conhecimento, inovação e oportunidades!";
    }

    // ======================================
    // SAUDAÇÕES
    // ======================================

    else if (
        texto === "oi" ||
        texto === "ola" ||
        texto === "ei" ||
        texto === "bom dia" ||
        texto === "boa tarde" ||
        texto === "boa noite"
    ) {
        return "Olá! Que bom conversar com você! Como posso ajudar?";
    }

    // HTML
    else if (texto.includes("html")) {
        return "HTML é a linguagem utilizada para estruturar páginas da internet.";
    }

    // CSS
    else if (texto.includes("css")) {
        return "CSS é utilizado para estilizar páginas web, definindo cores, fontes, tamanhos e layouts.";
    }

    // JAVASCRIPT
    else if (texto.includes("javascript")) {
        return "JavaScript é uma linguagem de programação que permite adicionar interatividade aos sites.";
    }

    // INTELIGÊNCIA ARTIFICIAL
    else if (
        texto.includes("inteligencia artificial") ||
        texto === "ia"
    ) {
        return "Inteligência Artificial é uma tecnologia que permite que máquinas realizem tarefas que normalmente exigem capacidades humanas, como reconhecer padrões e gerar textos.";
    }

    // PROGRAMAÇÃO
    else if (texto.includes("programacao")) {
        return "Programação é o processo de criar instruções para que o computador execute determinadas tarefas.";
    }

    // CURSO TÉCNICO
    else if (texto.includes("curso")) {
        return "O curso técnico de informática prepara os alunos para trabalhar com programação, redes, manutenção, desenvolvimento web e tecnologia.";
    }

    // HORÁRIOS E AULAS
    else if (
        texto.includes("horario") ||
        texto.includes("aula")
    ) {
        return "Para consultar os horários das aulas, procure a secretaria ou consulte os canais oficiais da escola.";
    }

    // PROFESSORES
    else if (texto.includes("professor")) {
        return "Os professores estão aqui para ajudar você a aprender e desenvolver suas habilidades!";
    }

    // AGRADECIMENTOS
    else if (
        texto.includes("obrigado") ||
        texto.includes("obrigada")
    ) {
        return "Por nada! Estou sempre pronto para ajudar!";
    }

    // DESPEDIDA
    else if (texto.includes("tchau")) {
        return "Até logo! Continue estudando e explorando a tecnologia!";
    }

    // RESPOSTA PADRÃO
    else {
        return "Ainda não sei responder essa pergunta. Tente perguntar sobre nossa escola, professores, horários, curso técnico, programação, robótica, redes, tecnologia ou Semana da Programação.";
    }
}

// ==========================================
// FUNÇÃO DOS BOTÕES DE PERGUNTAS SUGERIDAS
// ==========================================

function perguntar(texto) {
    document.getElementById("user-input").value = texto;
    enviarMensagem();
}
