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

const modal = document.querySelector("#project-modal");
const projectsGrid = document.querySelector("#projects-grid");
const title = modal.querySelector(".modal-title");
const image = modal.querySelector(".modal-img");
const projectText = modal.querySelector(".modal-project");
const description = modal.querySelector(".modal-description");
const list = modal.querySelector(".modal-skills");
const githubLink = modal.querySelector(".modal-github");
const siteLink = modal.querySelector(".modal-site");

fetch("data/projects.json")
  .then((response) => response.json())
  .then((projects) => {
    projects.forEach((project, index) => {
      const card = document.createElement("button");

      card.type = "button";
      card.classList.add("project-card");
      card.dataset.project = index;

      const img = document.createElement("img");

      img.src = project.cardImage;
      img.alt = `Aperçu projet ${project.title}`;
      img.width = 900;
      img.height = 775;
      img.loading = "lazy";
      img.decoding = "async";

      const span = document.createElement("span");
      span.textContent = project.title;

      card.appendChild(img);
      card.appendChild(span);

      projectsGrid.appendChild(card);

      card.addEventListener("click", () => {
        title.textContent = project.title;

        image.src = project.modalImage;
        image.alt = `Aperçu du projet ${project.title}`;

        projectText.textContent = project.project;
        description.textContent = project.description;

        list.textContent = "";

        project.skills.forEach((skill) => {
          const li = document.createElement("li");
          li.textContent = skill;
          list.appendChild(li);
        });

        githubLink.href = project.github;

        if (project.site) {
          siteLink.href = project.site;
          siteLink.style.display = "inline-block";
        } else {
          siteLink.style.display = "none";
        }

        modal.showModal();
      });
    });
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des projets :", error);
  });

document
  .querySelector(".modal-close")
  .addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
