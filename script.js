<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Сайт про двох котів — Боба і Блошку: їхні характери, цікаві факти та форма для зв'язку.">
  <meta name="keywords" content="коти, мейнкун, дворняжка, сайт про тварин, Боб, Блошка">
  <meta name="author" content="OpenAI">
  <title>Боб і Блошка — домашній котоблог</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Перейти до вмісту</a>

  <header class="site-header">
    <div class="site-header__inner container">
      <div class="brand">
        <div class="brand__mark">🐾</div>
        <div>
          <p class="brand__eyebrow">Домашній котоблог</p>
          <h1 class="brand__title">Боб і Блошка</h1>
        </div>
      </div>

      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        <span class="nav-toggle__line"></span>
        <span class="nav-toggle__line"></span>
        <span class="nav-toggle__line"></span>
        <span class="visually-hidden">Відкрити меню</span>
      </button>

      <nav class="nav" id="primary-nav" aria-label="Основна навігація">
        <ul class="nav__list">
          <li class="nav__item"><a class="nav__link nav__link--active" href="index.html">Головна</a></li>
          <li class="nav__item"><a class="nav__link" href="cats.html">Наші коти</a></li>
          <li class="nav__item"><a class="nav__link" href="contact.html">Форма</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main" class="main-layout container">
    <section class="hero panel">
      <div class="hero__content">
        <p class="section-tag">Проєкт для лабы з гіпертексту та гіпермедіа</p>
        <h2 class="hero__title">Два коти, два характери і безліч історій</h2>
        <p class="hero__text">
          На цьому сайті зібрано все про Боба та Блошку: їхні звички, кумедні вчинки,
          порівняння з рисами порід і трохи особистої котячої філософії.
        </p>
        <div class="hero__actions">
          <a class="button" href="cats.html">Подивитися котів</a>
          <a class="button button--ghost" href="contact.html">Залишити повідомлення</a>
        </div>
      </div>
      <aside class="hero__aside">
        <div class="stat-card">
          <span class="stat-card__value">2</span>
          <span class="stat-card__label">котики вдома</span>
        </div>
        <div class="stat-card stat-card--accent">
          <span class="stat-card__value">100%</span>
          <span class="stat-card__label">любові та хаосу</span>
        </div>
      </aside>
    </section>

    <section class="grid-cards panel">
      <article class="info-card">
        <h3 class="info-card__title">Боб</h3>
        <p>Мейнкун, 2 роки. Спокійний, але з характером. Один раз приніс чайний пакетик з мусорки як ранкову «виплату» за сніданок.</p>
        <p class="info-card__meta">Чи збігається з породою: так, загалом дуже схожий — великий, урівноважений і незалежний.</p>
      </article>

      <article class="info-card">
        <h3 class="info-card__title">Блошка</h3>
        <p>Дворняжка, 1 рік. Ласкава, неймовірно активна і трохи божевільна. Тягне все, що погано лежить.</p>
        <p class="info-card__meta">Чи збігається з породою: так, бо вуличне походження часто дає кмітливість, жвавість і сильний інстинкт дослідника.</p>
      </article>

      <article class="info-card info-card--wide">
        <h3 class="info-card__title">Що є на сайті</h3>
        <ul class="feature-list">
          <li>адаптивний дизайн із Grid Layout</li>
          <li>хлібні крихти / навігація і мобільне меню</li>
          <li>форма з перевіркою полів</li>
          <li>невелика JS-взаємодія</li>
        </ul>
      </article>
    </section>

    <section class="panel compare">
      <h2 class="section-title">Коротке порівняння</h2>
      <div class="table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Кіт</th>
              <th>Порода</th>
              <th>Головна риса</th>
              <th>Чи збігається</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Боб</td>
              <td>Мейнкун</td>
              <td>Спокій + гідність</td>
              <td>Так</td>
            </tr>
            <tr>
              <td>Блошка</td>
              <td>Дворняжка</td>
              <td>Активність + кмітливість</td>
              <td>Так</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p>© 2026 • Сайт про Боба і Блошку</p>
      <a href="#main">Повернутися вгору</a>
    </div>
  </footer>
</body>
</html>
