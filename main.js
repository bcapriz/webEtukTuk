const faqs = [
    {
        question: '¿Qué es eTukTuk?',
        answer: 'eTukTuk es un proyecto basado en blockchain para la gente. eTukTuk está construyendo la infraestructura de recarga del mañana. Impulsado por la cadena de bloques, eTukTuk impulsará un ecosistema de recarga sostenible y sólido para las redes de transporte en los países en desarrollo y más allá. El ecosistema proporcionará soluciones de transporte sostenibles y garantizará la inclusión financiera en las regiones en desarrollo.'
    },
    {
        question: '¿Cuáles son los detalles del token $TUK?',
        answer: '$TUK es un token BEP-20 en la cadena inteligente BNB con un suministro máximo de 2.000.000.000 (2.000 millones). El token $TUK es el token nativo de la cadena de bloques que constituye la columna vertebral del ecosistema eTukTuk. La dirección del contrato de tokens es 0x84E03e21dA9B32555885a85b7c23e5FC123C25DD. Por favor, no envíes fondos a esta dirección de contrato de tokens, ya que no se pueden recuperar. Actualmente, $TUK sólo puede adquirirse a través de la preventa oficial en buy.tuktoken.io'
    },
    {
        question: '¿Por qué el token $TUK?',
        answer: 'El token $TUK impulsará todo el ecosistema eTukTuk. El token $TUK proporcionará recompensas a largo plazo a los poseedores del token $TUK en forma de Power Staking. Además, formará una red superpuesta de pagos junto a las transacciones fiat que facilitará la barrera de entrada al ecosistema eTukTuk para aquellos que se encuentran entre los no bancarizados (es decir, sin acceso a los servicios financieros tradicionales).'
    },
    {
        question: '¿Cuándo es la reclamación y el lanzamiento del token $TUK?',
        answer: 'La reclamación de tus tokens $TUK y el lanzamiento público del token tendrán lugar el mismo día, una vez finalizada la preventa, y se anunciarán una vez confirmada la fecha. También se anunciarán las CEX y DEX en las que podrás comerciar con $TUK, una vez confirmadas. Si tienes más preguntas, no dudes en ponerte en contacto con nuestro equipo de asistencia. Estamos aquí para ayudarte en este apasionante viaje.'
    },
    {
        question: '¿Cómo me pongo en contacto con el servicio de asistencia?',
        answer: 'Para ponerte en contacto con nuestro equipo de asistencia, envíanos un correo electrónico a contact@etuktuk.io. Nuestro personal de asistencia estará encantado de ayudarte con cualquier pregunta, duda o consulta que puedas tener. Nos esforzamos por ofrecer respuestas oportunas y útiles para garantizar que tu experiencia con nuestro proyecto sea fluida y agradable. No dudes en ponerte en contacto con nosotros en cualquier momento, y esperamos poder proporcionarte una asistencia y un servicio excelentes. ¡Gracias por elegir eTukTuk!'
    }
];

const textWinTokens = [
    {
        title: 'Paso 1: Conectar',
        answer: 'Necesitará tener una billetera compatible con web3 para participar en la preventa.',
        answer2: `Para computadoras de escritorio, sugerimos usar la extensión del navegador Metamask y para dispositivos móviles sugerimos usar Trust Wallet para una experiencia de usuario más fluida. <a href="https://metamask.io/download/" target="_blank">haciendo clic aquí.</a>`,
        answer3: '¡Puedes usar BNB, ETH, USDT o tu tarjeta bancaria si es necesario! Asegúrate también de tener suficientes criptomonedas para la gasolina.'
    },
    {
        title: 'Paso 2: Conéctate',
        answer: 'Recomendamos apostar sus tokens para comenzar a ganar $TUK inmediatamente como recompensa. Una vez que su billetera esté conectada, seleccione la opción Comprar y apostar para comenzar a ganar intereses sobre sus tokens apostados hoy.',
        answer2: 'Las apuestas se realizan solo en la red BNB Smart Chain por ahora, por lo que recomendamos comprar en esta cadena para aprovechar las apuestas.',
        answer3: 'Alternativamente, puedes simplemente comprar tokens $TUK como parte de la preventa y reclamarlos una vez que finalice la preventa.'
    }
]

const phases = [
    {
        title: "Fase 1",
        subtitle: "Concepción",
        items: [
            "Libro Blanco publicado",
            "Sri Lanka como territorio de lanzamiento anunciado",
            "eTukTuk presentado en el Foro Economico Mundial de Davos",
            "Lanzamiento de la aplicacion Rewards: TukStation",
            "Se presenta el prototipo eTukTuk",
            "Se publica el documento Power Stake",
            "Apertura oficina SL",
            "Apertura de la oficina de Singapur",
            "Capital Maharaja Group se presenta como socio importante para el lanzamiento en Sri Lanka"
        ]
    },
    {
        title: "Fase 2",
        subtitle: "Preventa",
        items: [
            "Comienza la venta de tokens",
            "Revelación de la cadena lateral de capa 2: onBNB",
            "Auditoría de contrato inteligente completada",
            "Contrato inteligente implementado",
            "Se inicia el desarrollo de la aplicación del controlador",
            "Lanzamiento de la función Comprar y apostar",
            "Contrato de participación implementado",
            "La estación Tuk llega a 80.000 usuarios"
        ]
    },
    {
        title: "Fase 3",
        subtitle: "Lanzamiento",
        items: [
            "Primeras estaciones de carga instaladas en Sri Lanka",
            "Lanzamiento oficial del gobierno de eTukTuk",
            "La aplicación para pasajeros comienza a desarrollarse",
            "Lanzamiento del token $TUK en CEX",
            "Mercancía eTukTuk disponible para la venta",
            "Comienza el Power Stake",
            "Se presenta el prototipo de estación de carga",
            "Se adquiere la primera planta de producción y comienza la renovación"
        ]
    },
    {
        title: "Fase 4",
        subtitle: "Crecimiento",
        items: [
            "Anuncio en conjunto con el gobierno de Sri Lanka",
            "Comienza la producción de eTukTuks en Sri Lanka",
            "Primeras donaciones caritativas realizadas a la comunidad local.",
            "Aplicación del controlador finalizada",
            "Objetivo 200 puntos de carga instalados en Sri Lanka",
            "Finalización de la aplicación del pasajero",
            "Objetivo: 6.000 eTukTuks en carretera para finales de año",
            "Se anuncia el segundo territorio/país eTukTuk",
            "Primer punto de carga instalado en el segundo territorio/país eTukTuk",
            "Presentación del tercer país/territorio eTukTuk",
            "Desarrollo de Segundo Modelo (entregas de última milla)",
            "Instalar la primera estación de carga solar"
        ]
    }
];

function loadHeader() {
    const headerContainer = document.querySelector('header');
    headerContainer.innerHTML = '';

    const containerImgTitulo = document.createElement('div');
    containerImgTitulo.className = 'container-ImgTitulo';

    const imgHeader = document.createElement('div');
    imgHeader.className = 'img-header';

    const img = document.createElement('img');
    img.src = './img/logo.png';
    img.width = 55;
    img.alt = 'logo-etuktuk';

    const h1 = document.createElement('h1');
    h1.className = 'visually-hidden';
    h1.textContent = 'eTuk eTuk';

    imgHeader.appendChild(img);
    containerImgTitulo.appendChild(imgHeader);
    containerImgTitulo.appendChild(h1);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'container-links';

    const links = [
        { href: '#home', text: 'Inicio' },
        { href: '#learnMore', text: 'Aprende más' },
        { href: '#buy', text: 'Cómo comprar' },
        { href: '#game', text: 'Juego' },
        { href: '#roadMap', text: 'Mapa Vial' },
        { href: '#frequentlyAskedQuestions', text: 'Preguntas Frecuentes' },
        { href: './assets/documents/whitepaper.pdf', text: 'Papel Blanco', target: '_blank' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        li.className = 'listLink';

        const a = document.createElement('a');
        a.className = 'link';
        a.href = link.href;
        if (link.target) a.target = link.target;
        a.textContent = link.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    headerContainer.appendChild(containerImgTitulo);
    headerContainer.appendChild(nav);
}


document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('opacity');
    } else {
        header.classList.remove('opacity');
    }
});

function loadHome() {
    const homeContainer = document.getElementById('home');
    homeContainer.innerHTML = '';

    const mainSection = document.createElement('section');
    mainSection.className = 'container-main-aside';

    const containerTitleMain = document.createElement('section');
    containerTitleMain.className = 'container-titleMain';

    const article = document.createElement('article');
    article.className = 'container-titleTextoMain';

    const h2 = document.createElement('h2');
    h2.className = 'titleMain';
    h2.innerHTML = 'Únase a la revolución verde de la IA<br>¡Compre y apueste sus tokens $TUK para ganar ahora!';

    const p = document.createElement('p');
    p.className = 'text-Main';
    p.textContent = 'Únase a la revolución del transporte sostenible eTukTuk con nuestra preventa de tokens verdes de $TUK. eTukTuk es el futuro del transporte ecológico e integrado con IA, que le permite invertir y ganar dinero de inmediato. ¡Compre tokens $TUK y apúntelos para comenzar a ganar recompensas hoy!';

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'button-main';

    const a1 = document.createElement('a');
    a1.href = './assets/documents/whitepaper.pdf';
    a1.target = '_blank';
    const button1 = document.createElement('button');
    button1.className = 'button';
    button1.textContent = 'PAPEL BLANCO';
    a1.appendChild(button1);

    const a2 = document.createElement('a');
    a2.href = '#';
    const button2 = document.createElement('button');
    button2.className = 'button';
    button2.textContent = 'COMPRAR $TUK';
    a2.appendChild(button2);

    buttonDiv.appendChild(a1);
    buttonDiv.appendChild(a2);

    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(buttonDiv);
    containerTitleMain.appendChild(article);

    const aside = document.createElement('aside');
    aside.className = 'container-aside-img';

    const divImg = document.createElement('div');
    divImg.className = 'div-img';

    const img = document.createElement('img');
    img.src = './img/token.png';
    img.alt = 'logo del token eTukTuk';
    img.className = 'img-aside';

    divImg.appendChild(img);
    aside.appendChild(divImg);

    mainSection.appendChild(containerTitleMain);
    mainSection.appendChild(aside);
    homeContainer.appendChild(mainSection);
}

function loadALearnMore() {
    const learnMoreContainer = document.getElementById('learnMore');
    learnMoreContainer.innerHTML = '';

    learnMoreContainer.className = 'container-section-articles-topics container-section';

    const articleTexto = document.createElement('article');
    articleTexto.className = 'container-article-topics';

    const h3 = document.createElement('h3');
    h3.className = 'titles';
    h3.textContent = '¿Qué es eTukTuk?';

    const p = document.createElement('p');
    p.className = 'text-Main';
    p.textContent = 'eTukTuk es una solución de transporte sostenible impulsada por inteligencia artificial que revolucionará el transporte en los países en desarrollo y, en última instancia, en todo el mundo. eTukTuk está construyendo la infraestructura de carga del mañana, impulsada por blockchain, y esta preventa es su oportunidad de invertir en un proyecto que apunta a cambiar el mundo. No pierda esta oportunidad excepcional de ser parte de un futuro mejor y sostenible para todos.';

    articleTexto.appendChild(h3);
    articleTexto.appendChild(p);

    const articleVideo = document.createElement('article');
    articleVideo.className = 'container-article-topics';

    const videoDiv = document.createElement('div');
    videoDiv.className = 'container-video';

    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = 'https://www.youtube.com/embed/NHAM27SnvzE?si=5yMR2hf7OEQcxmpT';
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    videoDiv.appendChild(iframe);
    articleVideo.appendChild(videoDiv);

    learnMoreContainer.appendChild(articleTexto);
    learnMoreContainer.appendChild(articleVideo);
}


function loadTWT() {
    const twtSectionContainer = document.getElementById('buy');
    const twtContainer = document.querySelector('.container-section-win-token');
    twtContainer.innerHTML = '';

    const h3 = document.createElement('h3');
    h3.className = 'title-win-token titles';
    h3.textContent = 'Cómo comprar $TUK';
    twtSectionContainer.appendChild(h3);

    textWinTokens.forEach((text) => {
        const twtArticle = document.createElement('article');
        twtArticle.classList.add('container-article-win-token');

        const twtDiv = document.createElement('div');

        const twtTitle = document.createElement('h4');
        twtTitle.textContent = text.title;

        const twtUl = document.createElement('ul');
        twtUl.classList.add('text-Main');

        const twtLi1 = document.createElement('li');
        twtLi1.innerHTML = text.answer;

        const twtLi2 = document.createElement('li');
        twtLi2.innerHTML = text.answer2;

        const twtLi3 = document.createElement('li');
        twtLi3.innerHTML = text.answer3;

        twtUl.appendChild(twtLi1);
        twtUl.appendChild(twtLi2);
        twtUl.appendChild(twtLi3);

        twtDiv.appendChild(twtTitle);
        twtDiv.appendChild(twtUl);

        twtArticle.appendChild(twtDiv);
        twtContainer.appendChild(twtArticle);

    });

    const twtArticleIMG = document.createElement('article');
    twtArticleIMG.classList.add('container-article-topics');
    const div = document.createElement('div');
    div.className = 'container-aside-img img-powering';
    div.innerHTML = '<img src="./img/powered.png" height="400" alt="impulsado por IA">';
    twtArticleIMG.appendChild(div);
    twtContainer.appendChild(twtArticleIMG);
    twtSectionContainer.appendChild(twtContainer);
}

function loadGame() {
    const gameContainer = document.getElementById("game");
    gameContainer.innerHTML = '';

    const articleGame = document.createElement("article");
    articleGame.classList.add("container-article-game");

    const h3Title = document.createElement("h3");
    h3Title.classList.add("titles");
    h3Title.textContent = "Juego eTukTuk Play-to-Earn";

    const pDescription = document.createElement("p");
    pDescription.classList.add("text-Main");
    pDescription.textContent = "Etuktuk te trae un juego Play-to-Earn basado en el emblemático vehículo eTukTuk. Al estilo de Crazy Taxi, recorrerás las calles de Sri Lanka mientras recoges y dejas a clientes que necesitan llegar rápido a algún sitio. Cuanto más rápido conduzcas, ¡más ganarás! Podrás mejorar tu eTukTuk, desbloquear nuevas ciudades y mucho más. Pronto te daremos más detalles.";

    const aLink = document.createElement("a");
    aLink.href = "https://play.google.com/store/apps/details?id=com.tuktuk.taxi&pli=1";
    aLink.target = "_blank";

    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "IR A GOOGLE PLAY";

    aLink.appendChild(button);
    articleGame.appendChild(h3Title);
    articleGame.appendChild(pDescription);
    articleGame.appendChild(aLink);

    const articleImg = document.createElement("article");
    articleImg.classList.add("container-article-img-game");

    const divGameContainer = document.createElement("div");
    divGameContainer.classList.add("container-game");

    const aImageLink = document.createElement("a");
    aImageLink.href = "https://play.google.com/store/apps/details?id=com.tuktuk.taxi&pli=1";
    aImageLink.target = "_blank";

    const img = document.createElement("img");
    img.src = "./img/game-img.svg";
    img.alt = "Juego eTukTuk";

    aImageLink.appendChild(img);
    divGameContainer.appendChild(aImageLink);
    articleImg.appendChild(divGameContainer);

    gameContainer.appendChild(articleGame);
    gameContainer.appendChild(articleImg);
}


function loadPhases() {
    const phaseContainer = document.getElementById("roadMap");
    phaseContainer.innerHTML = '';

    const divTitle = document.createElement("div");
    divTitle.classList.add("div-title-phases");

    const h3MainTitle = document.createElement("h3");
    h3MainTitle.classList.add("titles", "title-win-token");
    h3MainTitle.textContent = "Mapa Vial";

    divTitle.appendChild(h3MainTitle);
    phaseContainer.appendChild(divTitle);

    const container = document.createElement("section");
    container.classList.add("container-article-phases");

    phases.forEach(phase => {
        const article = document.createElement("article");
        article.classList.add("phase");

        const divPhases = document.createElement("div");
        divPhases.classList.add("div-phases");

        const h3PhaseTitle = document.createElement("h3");
        h3PhaseTitle.textContent = phase.title;
        h3PhaseTitle.classList.add("titles", "titles-phases");

        const h4PhaseSubtitle = document.createElement("h4");
        h4PhaseSubtitle.textContent = phase.subtitle;
        h4PhaseSubtitle.classList.add("titles-secondary", "titles-phases");

        const ul = document.createElement('ul');
        ul.classList.add("list-phase");
        ul.style.display = "none";

        phase.items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });

        divPhases.addEventListener("click", function () {
            ul.style.display = ul.style.display === "block" ? "none" : "block";
            ul.classList.add("show");
        });

        article.appendChild(divPhases);
        article.appendChild(ul);
        divPhases.appendChild(h3PhaseTitle);
        divPhases.appendChild(h4PhaseSubtitle);
        container.appendChild(article);

    });

    phaseContainer.appendChild(container);
}


function loadFAQs() {
    const faqContainer = document.getElementById('frequentlyAskedQuestions');
    faqContainer.innerHTML = '';

    const h3MainTitle = document.createElement("h3");
    h3MainTitle.classList.add("titles", "title-win-token");
    h3MainTitle.textContent = "Preguntas Frecuentes";
    faqContainer.appendChild(h3MainTitle);
    faqs.forEach((faq) => {
        const faqArticle = document.createElement('article');
        faqArticle.classList.add('container-article-questions');

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('article-questions');

        const questionTitle = document.createElement('h4');
        questionTitle.classList.add('titles-secondary');
        questionTitle.textContent = faq.question;

        const toggleButton = document.createElement('button');
        toggleButton.classList.add('svg-question');
        toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;

        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(toggleButton);

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('text-questions', 'div-text-questions');
        answerDiv.style.display = 'none';
        answerDiv.innerHTML = `<p>${faq.answer}</p>`;
        toggleButton.addEventListener('click', () => {
            const isVisible = answerDiv.style.display === 'block';
            answerDiv.style.display = isVisible ? 'none' : 'block';

            if (isVisible) {
                toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;
            } else {
                toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>`;
            }
        });
        faqArticle.appendChild(questionDiv);
        faqArticle.appendChild(answerDiv);
        faqContainer.appendChild(faqArticle);
    });
}

document.querySelectorAll('.div-phases').forEach(divPhase => {
    divPhase.addEventListener('click', function () {
        const isVisible = this.nextElementSibling.classList.contains('show');
        if (isVisible) {
            this.nextElementSibling.classList.remove('show');
        } else {
            document.querySelectorAll('.list-phases').forEach(list => {
                list.classList.remove('show');
            });
            this.nextElementSibling.classList.add('show');
        }
    });
});

function loadFooter() {
    const footerContainer = document.querySelector("footer");
    footerContainer.innerHTML = '';

    const containerFooter = document.createElement("div");
    containerFooter.classList.add("container-footer");

    const containerInfoFooter1 = document.createElement("div");
    containerInfoFooter1.classList.add("container-info-footer");

    const divInfoFooter1 = document.createElement("div");
    divInfoFooter1.classList.add("div-info-footer");

    const h4Title1 = document.createElement("h4");
    h4Title1.classList.add("title-footer");
    h4Title1.textContent = "SITIO:";

    const ulLinks1 = document.createElement("ul");
    ulLinks1.classList.add("container-links-footer");

    const links1 = [
        { text: "LEER MÁS", href: "#aprende-mas" },
        { text: "CÓMO COMPRAR", href: "#compra" },
        { text: "PREGUNTAS FRECUENTES", href: "#preguntas-frecuentes" },
        { text: "PAPEL BLANCO", href: "./assets/documents/whitepaper.pdf", target: "_blank" }
    ];

    links1.forEach(link => {
        const li = document.createElement("li");
        li.classList.add("listLink");

        const a = document.createElement("a");
        a.classList.add("link");
        a.textContent = link.text;
        a.href = link.href;
        if (link.target) a.target = link.target;

        li.appendChild(a);
        ulLinks1.appendChild(li);
    });

    divInfoFooter1.appendChild(h4Title1);
    divInfoFooter1.appendChild(ulLinks1);
    containerInfoFooter1.appendChild(divInfoFooter1);

    const containerInfoFooter2 = document.createElement("div");
    containerInfoFooter2.classList.add("container-info-footer");

    const divInfoFooter2 = document.createElement("div");
    divInfoFooter2.classList.add("div-info-footer");

    const h4Title2 = document.createElement("h4");
    h4Title2.classList.add("title-footer");
    h4Title2.textContent = "REDES SOCIALES:";

    const ulLinks2 = document.createElement("ul");
    ulLinks2.classList.add("container-links-footer");

    const links2 = [
        { text: "FACEBOOK", href: "https://www.facebook.com/eTukTukio", target: "_blank" },
        { text: "TWITTER", href: "https://twitter.com/eTukTukio" },
        { text: "INSTAGRAM", href: "https://www.instagram.com/etuktukio/?igshid=YmMyMTA2M2Y%3D", target: "_blank" },
        { text: "TELEGRAM", href: "https://t.me/eTukTuk" }
    ];

    links2.forEach(link => {
        const li = document.createElement("li");
        li.classList.add("listLink");

        const a = document.createElement("a");
        a.classList.add("link");
        a.textContent = link.text;
        a.href = link.href;
        if (link.target) a.target = link.target;

        li.appendChild(a);
        ulLinks2.appendChild(li);
    });

    divInfoFooter2.appendChild(h4Title2);
    divInfoFooter2.appendChild(ulLinks2);
    containerInfoFooter2.appendChild(divInfoFooter2);

    const divImgFooter = document.createElement("div");
    divImgFooter.classList.add("div-img-footer");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = "./img/logo.png";
    img.width = 100;
    img.alt = "logo-etuktuk";

    figure.appendChild(img);
    divImgFooter.appendChild(figure);

    containerFooter.appendChild(containerInfoFooter1);
    containerFooter.appendChild(containerInfoFooter2);
    containerFooter.appendChild(divImgFooter);

    const textFinalFooter = document.createElement("div");
    textFinalFooter.classList.add("text-final-footer");

    const pText = document.createElement("p");
    pText.textContent = "© Creado por Bruno Capriz. Descargo de responsabilidad: Es posible que las criptomonedas no estén reguladas en su jurisdicción. El valor de las criptomonedas puede subir o bajar. Las ganancias pueden estar sujetas a ganancias de capital u otros impuestos aplicables en su jurisdicción.";

    textFinalFooter.appendChild(pText);

    footerContainer.appendChild(containerFooter);
    footerContainer.appendChild(textFinalFooter);
}



window.onload = function () {
    loadHeader();
    loadHome();
    loadALearnMore();
    loadGame();
    loadPhases();
    loadFAQs();
    loadTWT();
    loadFooter();
};