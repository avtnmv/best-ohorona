const tabButtons = document.querySelectorAll('.workflow__tab');
const contentContainer = document.getElementById('workflowContent');

const templates = {
  remote: `
    <div class="workflow__content" id="remotePanel" role="tabpanel" aria-labelledby="remoteTab">
      <img class="workflow__image" src="./img/how-we-work-img.webp" alt="image" />
      <div class="workflow__steps">
        ${generateSteps([
          'Ви залишаєте заявку або телефонуєте',
          'Ми проводимо безкоштовний аудит <br> і встановлюємо обладнання',
          'Підключення на пульт — об\'єкт під охороною',
          'У разі тривоги група прибуває за лічені хвилини',
        ])}
      </div>
    </div>

    <div class="workflow__threats container">
      <div class="workflow__mobile-header" style="display:none;">
        <h3>Від яких загроз захищає пультова охорона:</h3>
        <button class="workflow__mobile-toggle-btn" aria-expanded="false" aria-controls="threatsContent">
          Дивитись
          <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.675.158 5.5 3.975 9.325.158 10.5 1.333l-5 5-5-5z" fill="#767676"/>
          </svg>
        </button>
      </div>
      <h3 class="workflow__threats-title">Від яких загроз захищає пультова охорона:</h3>
      <div id="threatsContent" class="workflow__threats-content">
        ${generateThreats([
          ['Крадіжка майна', 'Охоронна сигналізація реагує на будь-які типи проникнень: відкриття дверей, рух, розбиття скла, руйнування стіни і т.д.'],
          ['Напад', 'Стаціонарні або радіо кнопки тривожної сигналізації дозволять Вам викликати групу реагування в будь-якій ситуації'],
          ['Пожежа', 'Системи виявлення диму та вогню миттєво передають сигнал — ми викликаємо пожежників і повідомляємо вас'],
          ['Затоплення, виток газу', 'Датчики затоплення та газу миттєво передають сигнал на пульт — ви одразу отримуєте сповіщення'],
        ])}
      </div>
    </div>
  `,

  physical: `
    <div class="workflow__content" id="physicalPanel" role="tabpanel" aria-labelledby="physicalTab">
      <img class="workflow__image" src="./img/how-we-work-physical.webp" alt="image" />
      <div class="workflow__steps">
        ${generateSteps([
          'Ви залишаєте заявку або телефонуєте',
          'Вирішуємо Вашу потребу в охороні',
          'Індивідуально будуємо та <br> узгоджуємо схему безпеки',
          'Підписуємо договір',
        ])}
      </div>
    </div>

    <div class="workflow__threats container">
      <div class="workflow__mobile-header" style="display:none;">
        <h3>Фізична охорона захищає від:</h3>
        <button class="workflow__mobile-toggle-btn" aria-expanded="false" aria-controls="threatsContent">
          Дивитись
          <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.675.158 5.5 3.975 9.325.158 10.5 1.333l-5 5-5-5z" fill="#767676"/>
          </svg>
        </button>
      </div>
      <h3 class="workflow__threats-title">Фізична охорона захищає від:</h3>
      <div id="threatsContent" class="workflow__threats-content">
        ${generateThreats([
          ['Аналіз і захист', 'Проводимо аналіз об’єкта та створюємо ефективну систему захисту з технічними засобами'],
          ['Повна документація', 'Для інтеграції з підприємством ми готуємо всю необхідну документацію: режим, план охорони, інструкції та перепустки'],
          ['Швидке підсилення', 'У разі необхідності пост охорони посилюється нарядом групи реагування на протязі 3-5 хвилин'],
          ['Пільгове оснащення', 'Об\'єкти, які ми охороняємо, оснащуються системами безпеки на пільгових умовах'],
        ])}
      </div>
    </div>
  `
};

function generateSteps(texts) {
  return texts.map((desc, index) => `
    <div class="workflow__step">
      <div class="workflow__icon-wrapper">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.839 11.472V7.876c0-2.031 0-3.047-.487-3.71-.486-.663-1.587-.984-3.788-1.628a29 29 0 0 1-3.888-1.452C17.233.426 16.511.096 16 .096c-.51 0-1.232.33-2.676.99a29 29 0 0 1-3.888 1.452c-2.2.644-3.301.965-3.788 1.628s-.487 1.679-.487 3.71v3.596c0 6.968 6.098 11.149 9.146 12.804.731.396 1.096.595 1.693.595s.962-.199 1.693-.595c3.049-1.655 9.146-5.836 9.146-12.804" fill="#E4E4E4"/><path d="M11.355 13.172s1.161 0 2.322 2.409c0 0 3.69-6.022 6.968-7.226" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        ${index < texts.length - 1 ? '<span class="workflow__line"></span>' : ''}
      </div>
      <div class="workflow__text">
        <span class="workflow__step-title">Крок ${index + 1}:</span>
        <span class="workflow__step-desc">${desc}</span>
      </div>
    </div>
  `).join('');
}

function generateThreats(data) {
  return [0, 1].map(col => `
    <div class="workflow__threats-column">
      ${[0, 1].map(row => {
        const i = col * 2 + row;
        if (!data[i]) return '';
        const [name, text] = data[i];
        return `
          <div class="workflow__threat">
            <div class="workflow__threat-number">${i + 1}</div>
            <p class="workflow__threat-name">${name}</p>
            <div class="workflow__threat-line"></div>
            <p class="workflow__threat-text">${text}</p>
          </div>
        `;
      }).join('')}
    </div>
  `).join('');
}

function setupMobileToggle() {
  const mobileHeaders = contentContainer.querySelectorAll('.workflow__mobile-header');
  mobileHeaders.forEach(header => {
    const btn = header.querySelector('.workflow__mobile-toggle-btn');
    const threatsContent = contentContainer.querySelector('.workflow__threats-content');

    if (!btn || !threatsContent) return;

    header.style.display = 'flex';

    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Дивитись ';
    btn.appendChild(createArrowSVG());

    btn.addEventListener('click', () => {
      const isOpen = threatsContent.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        btn.innerText = 'Закрити ';
        btn.appendChild(createArrowSVG(true));
      } else {
        btn.innerText = 'Дивитись ';
        btn.appendChild(createArrowSVG(false));
      }
    });
  });
}

function createArrowSVG(isOpen = false) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("width", "11");
  svg.setAttribute("height", "7");
  svg.setAttribute("viewBox", "0 0 11 7");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", ns);
  svg.style.transition = "transform 0.3s ease";
  if (isOpen) {
    svg.style.transform = "rotate(180deg)";
  }

  const path = document.createElementNS(ns, "path");
  path.setAttribute("d", "M1.675.158 5.5 3.975 9.325.158 10.5 1.333l-5 5-5-5z");
  path.setAttribute("fill", "#767676");

  svg.appendChild(path);
  return svg;
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('is-active')) return;
    tabButtons.forEach(btn => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-selected', 'false');
    });
    button.classList.add('is-active');
    button.setAttribute('aria-selected', 'true');

    contentContainer.classList.add('fade-out');

    setTimeout(() => {
      contentContainer.innerHTML = index === 0 ? templates.remote : templates.physical;
      contentContainer.classList.remove('fade-out');
      setupMobileToggle();
    }, 400);
  });
});

// Инициализация по умолчанию
contentContainer.innerHTML = templates.remote;
setupMobileToggle();
