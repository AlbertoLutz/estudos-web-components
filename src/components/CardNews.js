class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const autor = document.createElement("span");
    autor.textContent = "By " + this.getAttribute("autor") || "By Anonymous";

    const linkTitie = document.createElement("a");
    linkTitie.textContent = this.getAttribute("title");
    linkTitie.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitie);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo");
    newsImage.alt = this.getAttribute("alt");

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {}
}

customElements.define("card-news", CardNews);
