const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
const projects = [
  {
    title: "Booki",
    image: "assets/img/booki-modal.webp",
    project:
      "Création de la page d’accueil responsive d’une agence de voyage à partir d’une maquette Figma.",
    description:
      "Projet réalisé en HTML5 et CSS3 consistant à intégrer une interface web moderne et responsive en respectant une maquette fournie. \n\nLe site présente des hébergements et des activités touristiques avec une mise en page adaptée aux formats mobile, tablette et desktop.",
    skills: [
      "Intégration HTML sémantique",
      "Mise en page avec Flexbox",
      "Responsive Design",
      "Utilisation des media queries",
      "Respect d’une maquette Figma",
      "Organisation du CSS",
      "Accessibilité web",
      "Interactions et animations CSS",
    ],
    github: "https://github.com/oxford777/page_accueil_agence_voyage_BOOKI",
    site: "https://oxford777.github.io/page_accueil_agence_voyage_BOOKI/",
  },
  {
    title: "Sophie Bluel",
    image: "assets/img/sophie_BLUEL-modal.webp",
    project:
      "Développement du portfolio de Sophie Bluel, architecte d’intérieur, à partir d’une maquette Figma et d’une API REST fournie. \n\nLe projet consistait à rendre le site interactif en JavaScript avec un système d’authentification administrateur, une galerie filtrable et une interface de gestion des projets via une modale.",
    description:
      "Ce projet m’a permis de concevoir une interface web dynamique en JavaScript. J’ai mis en place la récupération des données depuis une API afin d’afficher automatiquement les projets dans la galerie. \n\nJ’ai également développé un système de filtres par catégories, une connexion administrateur avec gestion du token utilisateur, ainsi qu’une modale permettant d’ajouter ou supprimer des projets sans rechargement de page. \n\nLe formulaire d’ajout comprend la validation des champs, la prévisualisation de l’image et l’envoi des données avec FormData. \n\nCe projet m’a aussi amené à travailler l’organisation du code, la gestion des états de l’interface et la séparation entre logique JavaScript et mise en forme CSS.",
    skills: [
      "Développement d’une interface dynamique en JavaScript",
      "Manipulation du DOM et gestion des événements",
      "Utilisation des requêtes API avec fetch et async/await",
      "Gestion de l’authentification utilisateur et du token de connexion",
      "Création et validation de formulaires dynamiques",
      "Utilisation de FormData pour l’envoi de données et d’images",
      "Mise à jour dynamique du contenu sans rechargement de page",
      "Intégration responsive à partir d’une maquette Figma",
      "Mise en page avec Flexbox et CSS Grid",
      "Gestion des modales et des états d’interface",
      "Séparation de la logique JavaScript et du style CSS",
      "Utilisation de Git et GitHub pour le versionning du projet",
    ],
    github: "https://github.com/oxford777/Projet-Sophie-BLUEL",
  },
  {
    title: "Nina Carducci",
    image: "assets/img/nina_carducci-modal.webp",
    project: "Nina Carducci – Optimisation d’un site de photographe",
    description:
      "Audit et optimisation complète du site vitrine d’une photographe professionnelle afin d’améliorer les performances, le référencement naturel (SEO) et l’accessibilité. \n\nLe projet comprenait l’analyse Lighthouse, l’optimisation des images, l’ajout des données structurées Schema.org, l’amélioration de l’accessibilité avec Wave ainsi que le débogage de plusieurs fonctionnalités JavaScript de la galerie.",
    skills: [
      "SEO",
      "Lighthouse",
      "Accessibilité web (Wave)",
      "Open Graph",
      "Optimisation des performances",
      "Optimisation d’images (Squoosh)",
      "Debug JavaScript",
      "HTML / CSS",
      "Responsive design",
      "Bonnes pratiques web",
    ],
    github:
      "https://github.com/oxford777/D-buggez-et-optimisez-un-site-de-photographe",
    site: "https://oxford777.github.io/D-buggez-et-optimisez-un-site-de-photographe/",
  },
  {
    title: "Kasa",
    image: "assets/img/kasa-modal.webp",
    project:
      "Kasa est une application web de location immobilière développée avec React. \n\nLe projet consiste à construire une interface moderne en composants réutilisables, avec une navigation fluide grâce à React Router.",
    description:
      "Développement d’une application de location immobilière en React avec React Router. \n\nCréation d’une interface dynamique et responsive à partir de maquettes Figma, avec gestion de la navigation, des composants réutilisables et des données JSON. \n\nImplémentation de fonctionnalités interactives comme les collapses, le carrousel d’images et les pages d’erreur.",
    skills: [
      "React",
      "React Router",
      "Composants réutilisables",
      "Gestion du state (useState)",
      "Responsive design",
      "SCSS / architecture CSS",
      "Manipulation de données JSON",
      "Accessibilité web",
    ],
    github: "https://github.com/oxford777/Kaza",
    site: "https://kaza-red.vercel.app/",
  },
  {
    title: "Mon vieux grimoire",
    image: "assets/img/mon_vieux_grimoire-modal.webp",
    project:
      "Développement du backend de l’application Mon Vieux Grimoire, une plateforme de notation de livres permettant aux utilisateurs de gérer leurs ouvrages, ajouter des notes et partager des couvertures. \n\nLe projet a été réalisé avec Node.js, Express, MongoDB, Multer et Sharp dans une architecture MVC sécurisée par authentification JWT.",
    description:
      "Projet full-stack orienté API réalisé avec Node.js, Express et MongoDB. \n\nL’objectif était de construire une API REST sécurisée avec authentification JWT et gestion des droits utilisateurs. \n\nLe backend gère les opérations CRUD complètes sur les livres, la notation des ouvrages, l’upload d’images avec Multer ainsi que leur optimisation avec Sharp. \n\nLes données sont stockées dans MongoDB et sécurisées grâce au hashage des mots de passe avec bcrypt.",
    skills: [
      "Création d’une API REST avec Node.js et Express",
      "Mise en place d’une authentification sécurisée avec JWT",
      "Hashage des mots de passe avec bcrypt",
      "Gestion d’une base de données MongoDB avec Mongoose",
      "Réalisation des opérations CRUD",
      "Gestion des routes et des middlewares Express",
      "Upload et optimisation d’images avec Multer et Sharp",
      "Sécurisation des accès utilisateurs et gestion des autorisations",
      "Manipulation des requêtes HTTP et tests avec Postman",
      "Gestion des erreurs backend",
      "Liaison frontend / backend via API",
      "Organisation d’une architecture MVC",
      "Utilisation de variables d’environnement (.env)",
    ],
    github: "https://github.com/oxford777/Mon_vieux-grimoire",
    site: "",
  },
  {
    title: "Menu Maker",
    image: "assets/img/menu_maker-modal.webp",
    project: "Menu Maker – Planification et gestion de projet web",
    description:
      "Projet consistant à préparer et organiser le développement d’une application web nommée “Menu Maker”. \n\nL’objectif était de planifier la création d’un site permettant aux restaurateurs de concevoir et diffuser leurs menus en ligne. \n\nLe travail portait sur l’analyse des besoins fonctionnels, la rédaction des spécifications techniques, la mise en place d’une veille technologique, ainsi que l’organisation du projet avec une méthode Agile et un tableau Kanban.",
    skills: [
      "Analyse des besoins fonctionnels d’un projet web",
      "Rédaction de spécifications techniques",
      "Découpage des fonctionnalités en tâches Kanban",
      "Organisation d’un projet avec une méthode Agile",
      "Utilisation d’un tableau Kanban avec Notion",
      "Mise en place d’une veille technologique",
      "Choix d’une architecture technique adaptée",
      "Présentation d’une solution technique à un client",
      "Identification des contraintes techniques et de sécurité",
      "Planification des phases de développement",
    ],
    github: "#",
    site: "",
  },
];
const modal = document.querySelector("#project-modal");

const title = modal.querySelector(".modal-title");
const image = modal.querySelector(".modal-img");
const projectText = modal.querySelector(".modal-project");
const description = modal.querySelector(".modal-description");
const list = modal.querySelector(".modal-skills");
const githubLink = modal.querySelector(".modal-github");
const siteLink = modal.querySelector(".modal-site");

document.querySelectorAll(".project-card").forEach((card) =>
  card.addEventListener("click", () => {
    const p = projects[card.dataset.project];

    title.textContent = p.title;
    image.src = p.image;
    image.hidden = false;
    image.alt = `Aperçu du projet ${p.title}`;
    projectText.textContent = p.project;
    description.textContent = p.description;
    list.innerHTML = p.skills.map((s) => `<li>${s}</li>`).join("");

    githubLink.href = p.github;
    siteLink.href = p.site;

    if (p.site) {
      siteLink.style.display = "inline-block";
    } else {
      siteLink.style.display = "none";
    }
    modal.showModal();
  }),
);

document
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
