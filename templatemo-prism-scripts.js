
// DADOS DO PORTFÓLIO


const portfolioData = [
    {
        id: 1,
        title: 'Peças Gráficas',
        description: 'Designs criados para fortalecer a identidade visual da sua marca, transmitir profissionalismo e gerar mais confiança para o seu público.',
        tech: ['Photoshop', 'Figma'],
        link: 'https://www.behance.net/gallery/245643923/Exemplos-de-Design'
    },
    {
        id: 2,
        title: 'Vídeos Curtos',
        description: 'Conteúdos dinâmicos e estratégicos para Instagram, TikTok e Reels, desenvolvidos para capturar a atenção nos primeiros segundos.',
        tech: ['Vídeos Curtos', 'TikTok', 'Instagram'],
        link3: 'https://www.instagram.com/p/DV_VybHjVvL/',
        link4: 'https://www.instagram.com/p/DV8w2YbCfiB/',
        link5: 'https://www.instagram.com/p/DXKoyPGERxt/'
    },
    {
        id: 3,
        title: 'Cobertura de Eventos',
        description: 'Registros dinâmicos de eventos, capturando os melhores momentos com uma edição envolvente e profissional.',
        tech: ['Filmmaker', 'Fotos'],
        link1: 'https://www.instagram.com/reel/DW_z0LHDlfU/?igsh=anQ3bHQ4eDNta2Vv',
        link2: 'https://www.instagram.com/p/DO6zsbhifFF/?img_index=4&igsh=YmNpc2tobTlmd3gz'
    },
    {
        id: 4,
        title: 'Promocionais',
        description: 'Vídeos voltados para divulgação de produtos, serviços e campanhas, combinando estratégia, criatividade e conversão.',
        tech: ['Vídeos Promocionais', 'Tráfego Pago', 'CapCut', 'After Effects'],
        link: 'https://drive.google.com/drive/folders/1FpeKLh2a9bMJYJd6k3h9UCZvML2uWY3m'
    },
    {
        id: 5,
        title: 'Curtas',
        description: 'Produções audiovisuais com narrativa, direção e edição cinematográfica, criadas para envolver o espectador do início ao fim.',
        tech: ['Cinema', 'Roteiro', 'Direção', 'Edição'],
        link: 'https://www.youtube.com/@CineDivas'
    },
    {
        id: 6,
        title: 'Vídeos UGC',
        description: 'Vídeos promocionais de produtos de forma orgânica.',
        tech: ['Produtos', 'Promocionais', 'Vídeos rápidos'],
        link: 'https://drive.google.com/drive/folders/1oRJ5kbxylr_P7aoT4n1YEVsijslP22tE?usp=sharing'
    }
];


// DADOS DE HABILIDADES

const skillsData = [
    {
        name: 'Premiere Pro',
        icon: '',
        level: 70,
        category: 'frontend'
    },
    {
        name: 'After Effects',
        icon: '',
        level: 80,
        category: 'backend'
    },
    {
        name: 'Cap Cut',
        icon: '',
        level: 100,
        category: 'frontend'
    },
    {
        name: 'Figma',
        icon: '',
        level: 100,
        category: 'cloud'
    },
    {
        name: 'Photoshop',
        icon: '',
        level: 100,
        category: 'cloud'
    }
];


// FUNÇÃO PARA ABRIR LINK EXTERNO


function openProjectLink(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    }
}



// PARTÍCULAS


function initParticles() {
    const particlesContainer = document.getElementById('particles');

    if (!particlesContainer) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');

        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration =
            (18 + Math.random() * 8) + 's';

        particlesContainer.appendChild(particle);
    }
}



// CARROSSEL 3D


let currentIndex = 0;

let carousel = null;
let indicatorsContainer = null;


// CRIAR ITEM DO CARROSSEL


function createCarouselItem(data, index) {

    const item = document.createElement('div');

    item.className = 'carousel-item';
    item.dataset.index = index;


    // Tecnologias
    const techBadges = data.tech.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');


    // Botões
    let buttonsHTML = '';


    // COBERTURA DE EVENTOS
    if (data.id === 3) {

        buttonsHTML = `
            <div class="card-buttons">

                <button
                    class="card-cta"
                    onclick="openProjectLink('${data.link1}')">
                    Explorar
                </button>

                <button
                    class="card-cta"
                    onclick="openProjectLink('${data.link2}')">
                    Explorar
                </button>

            </div>
        `;

    }


    // VÍDEOS CURTOS
    else if (data.id === 2) {

        buttonsHTML = `
            <div class="card-buttons">

                <button
                    class="card-cta"
                    onclick="openProjectLink('${data.link3}')">
                    Explorar
                </button>

                <button
                    class="card-cta"
                    onclick="openProjectLink('${data.link4}')">
                    Explorar
                </button>

                <button
                    class="card-cta"
                    onclick="openProjectLink('${data.link5}')">
                    Explorar
                </button>

            </div>
        `;

    }


    // TODOS OS OUTROS
    else {

        buttonsHTML = `
            <button
                class="card-cta"
                onclick="openProjectLink('${data.link}')">
                Explorar
            </button>
        `;

    }


    // HTML DO CARD
    item.innerHTML = `

        <div class="card">

            <h3 class="card-title">
                ${data.title}
            </h3>

            <p class="card-description">
                ${data.description}
            </p>

            <div class="card-tech">
                ${techBadges}
            </div>

            ${buttonsHTML}

        </div>

    `;


    return item;
}



// INICIALIZAR CARROSSEL

function initCarousel() {

    carousel = document.getElementById('carousel');
    indicatorsContainer =
        document.getElementById('indicators');


    if (!carousel) return;


    carousel.innerHTML = '';


    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = '';
    }


    portfolioData.forEach((data, index) => {

        const item =
            createCarouselItem(data, index);

        carousel.appendChild(item);


        if (indicatorsContainer) {

            const indicator =
                document.createElement('div');

            indicator.className = 'indicator';


            if (index === 0) {
                indicator.classList.add('active');
            }


            indicator.dataset.index = index;


            indicator.addEventListener(
                'click',
                () => goToSlide(index)
            );


            indicatorsContainer.appendChild(
                indicator
            );
        }

    });


    updateCarousel();
}



// ATUALIZAR CARROSSEL

function updateCarousel() {

    if (!carousel) return;


    const items =
        document.querySelectorAll('.carousel-item');

    const indicators =
        document.querySelectorAll('.indicator');


    const totalItems = items.length;


    if (totalItems === 0) return;


    const isMobile =
        window.innerWidth <= 768;

    const isTablet =
        window.innerWidth > 768 &&
        window.innerWidth <= 1024;


    items.forEach((item, index) => {

        let offset =
            index - currentIndex;


        if (offset > totalItems / 2) {

            offset -= totalItems;

        }
        else if (offset < -totalItems / 2) {

            offset += totalItems;

        }


        const absOffset =
            Math.abs(offset);

        const sign =
            offset < 0 ? -1 : 1;


        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';

        item.style.transition =
            'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';


        // Espaçamento DESKTOP
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;


        // MOBILE
        if (isMobile) {

            spacing1 = 280;
            spacing2 = 420;
            spacing3 = 550;

        }


        // TABLET
        else if (isTablet) {

            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;

        }


        // CARD CENTRAL
        if (absOffset === 0) {

            item.style.transform =
                'translate(-50%, -50%) translateZ(0) scale(1)';

            item.style.opacity = '1';

            item.style.zIndex = '10';

        }


        // PRIMEIRO CARD LATERAL
        else if (absOffset === 1) {

            const translateX =
                sign * spacing1;

            const rotation =
                isMobile ? 25 : 30;

            const scale =
                isMobile ? 0.88 : 0.85;


            item.style.transform =
                `translate(-50%, -50%)
                 translateX(${translateX}px)
                 translateZ(-200px)
                 rotateY(${-sign * rotation}deg)
                 scale(${scale})`;

            item.style.opacity = '0.8';

            item.style.zIndex = '5';

        }


        // SEGUNDO CARD LATERAL
        else if (absOffset === 2) {

            const translateX =
                sign * spacing2;

            const rotation =
                isMobile ? 35 : 40;

            const scale =
                isMobile ? 0.75 : 0.7;


            item.style.transform =
                `translate(-50%, -50%)
                 translateX(${translateX}px)
                 translateZ(-350px)
                 rotateY(${-sign * rotation}deg)
                 scale(${scale})`;

            item.style.opacity = '0.5';

            item.style.zIndex = '3';

        }


        // TERCEIRO CARD LATERAL
        else if (absOffset === 3) {

            const translateX =
                sign * spacing3;

            const rotation =
                isMobile ? 40 : 45;

            const scale =
                isMobile ? 0.65 : 0.6;


            item.style.transform =
                `translate(-50%, -50%)
                 translateX(${translateX}px)
                 translateZ(-450px)
                 rotateY(${-sign * rotation}deg)
                 scale(${scale})`;

            item.style.opacity = '0.3';

            item.style.zIndex = '2';

        }


        // CARDS ESCONDIDOS
        else {

            item.style.transform =
                'translate(-50%, -50%) translateZ(-500px) scale(0.5)';

            item.style.opacity = '0';

            item.style.zIndex = '1';

        }

    });


    indicators.forEach((indicator, index) => {

        indicator.classList.toggle(
            'active',
            index === currentIndex
        );

    });

}


// PRÓXIMO SLIDE


function nextSlide() {

    currentIndex =
        (currentIndex + 1) %
        portfolioData.length;

    updateCarousel();

}



// SLIDE ANTERIOR


function prevSlide() {

    currentIndex =
        (currentIndex - 1 +
            portfolioData.length) %
        portfolioData.length;

    updateCarousel();

}



// IR PARA SLIDE


function goToSlide(index) {

    currentIndex = index;

    updateCarousel();

}



// HABILIDADES


function initSkillsGrid() {

    const skillsGrid =
        document.getElementById('skillsGrid');

    const categoryTabs =
        document.querySelectorAll('.category-tab');


    if (!skillsGrid) return;


    function displaySkills(category = 'all') {

        skillsGrid.innerHTML = '';


        const filteredSkills =
            category === 'all'
                ? skillsData
                : skillsData.filter(
                    skill =>
                        skill.category === category
                );


        filteredSkills.forEach(
            (skill, index) => {

                const hexagon =
                    document.createElement('div');

                hexagon.className =
                    'skill-hexagon';

                hexagon.style.animationDelay =
                    `${index * 0.1}s`;


                hexagon.innerHTML = `

                    <div class="hexagon-inner">

                        <div class="hexagon-content">

                            <div class="skill-icon-hex">
                                ${skill.icon}
                            </div>

                            <div class="skill-name-hex">
                                ${skill.name}
                            </div>

                            <div class="skill-level">

                                <div
                                    class="skill-level-fill"
                                    style="width: ${skill.level}%">
                                </div>

                            </div>

                            <div class="skill-percentage-hex">
                                ${skill.level}%
                            </div>

                        </div>

                    </div>

                `;


                skillsGrid.appendChild(
                    hexagon
                );

            }
        );

    }


    categoryTabs.forEach(tab => {

        tab.addEventListener(
            'click',
            () => {

                categoryTabs.forEach(
                    t =>
                        t.classList.remove(
                            'active'
                        )
                );


                tab.classList.add('active');


                displaySkills(
                    tab.dataset.category
                );

            }
        );

    });


    displaySkills();

}


// CONTROLES DO CARROSSEL


document.addEventListener(
    'DOMContentLoaded',
    () => {

        initCarousel();
        initSkillsGrid();
        initParticles();


        const nextBtn =
            document.getElementById('nextBtn');

        const prevBtn =
            document.getElementById('prevBtn');


        if (nextBtn) {

            nextBtn.addEventListener(
                'click',
                nextSlide
            );

        }


        if (prevBtn) {

            prevBtn.addEventListener(
                'click',
                prevSlide
            );

        }

    }
);



// ROTAÇÃO AUTOMÁTICA

let autoSlide =
    setInterval(
        nextSlide,
        5000
    );



// NAVEGAÇÃO POR TECLADO


document.addEventListener(
    'keydown',
    (e) => {

        if (e.key === 'ArrowLeft') {
            prevSlide();
        }

        if (e.key === 'ArrowRight') {
            nextSlide();
        }

    }
);





window.addEventListener(
    'resize',
    () => {
        updateCarousel();
    }
);



// MENU MOBILE


const menuToggle =
    document.getElementById('menuToggle');

const navMenu =
    document.getElementById('navMenu');


if (menuToggle) {

    menuToggle.addEventListener(
        'click',
        () => {

            if (navMenu) {

                navMenu.classList.toggle(
                    'active'
                );

            }

            menuToggle.classList.toggle(
                'active'
            );

        }
    );

}


// CABEÇALHO


const header =
    document.getElementById('header');


window.addEventListener(
    'scroll',
    () => {

        if (!header) return;


        if (window.scrollY > 100) {

            header.classList.add('scrolled');

        }
        else {

            header.classList.remove('scrolled');

        }

    }
);


// ROLAGEM SUAVE


const sections =
    document.querySelectorAll(
        'section[id]'
    );

const navLinks =
    document.querySelectorAll(
        '.nav-link'
    );


navLinks.forEach(link => {

    link.addEventListener(
        'click',
        function(e) {

            e.preventDefault();


            const href =
                this.getAttribute('href');


            if (!href) return;


            const targetId =
                href.substring(1);


            const targetSection =
                document.getElementById(
                    targetId
                );


            if (targetSection) {

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    targetSection.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: 'smooth'

                });


                if (navMenu) {

                    navMenu.classList.remove(
                        'active'
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        'active'
                    );

                }

            }

        }
    );

});



// NAVEGAÇÃO ATIVA


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 100;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute('id');


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove(
                    'active'
                );


                const href =
                    link.getAttribute('href');


                if (!href) return;


                const linkId =
                    href.substring(1);


                if (linkId === sectionId) {

                    link.classList.add(
                        'active'
                    );

                }

            });

        }

    });

}


window.addEventListener(
    'scroll',
    updateActiveNav
);



// CONTADOR


function animateCounter(element) {

    const target =
        parseInt(
            element.dataset.target
        );


    if (isNaN(target)) return;


    const duration = 2000;

    const step =
        target /
        (duration / 16);


    let current = 0;


    const counter =
        setInterval(
            () => {

                current += step;


                if (current >= target) {

                    element.textContent =
                        target;

                    clearInterval(
                        counter
                    );

                }
                else {

                    element.textContent =
                        Math.floor(
                            current
                        );

                }

            },
            16
        );

}


// OBSERVER DO CONTADOR


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const statNumbers =
                        entry.target
                            .querySelectorAll(
                                '.stat-number'
                            );


                    statNumbers.forEach(
                        number => {

                            if (
                                !number.classList
                                    .contains(
                                        'animated'
                                    )
                            ) {

                                number.classList.add(
                                    'animated'
                                );


                                animateCounter(
                                    number
                                );

                            }

                        }
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


const statsSection =
    document.querySelector(
        '.stats-section'
    );


if (statsSection) {

    observer.observe(
        statsSection
    );

}


// FORMULÁRIO


const contactForm =
    document.getElementById(
        'contactForm'
    );


if (contactForm) {

    contactForm.addEventListener(
        'submit',
        (e) => {

            e.preventDefault();


            const formData =
                new FormData(
                    contactForm
                );


            const data =
                Object.fromEntries(
                    formData
                );


            alert(
                `Obrigado ${data.name || ''}! Mensagem enviada.`
            );


            contactForm.reset();

        }
    );

}


// LOADER


window.addEventListener(
    'load',
    () => {

        setTimeout(
            () => {

                const loader =
                    document.getElementById(
                        'loader'
                    );


                if (loader) {

                    loader.classList.add(
                        'hidden'
                    );

                }

            },
            1500
        );

    }
);
```

