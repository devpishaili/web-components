customElements.define(
  "apocalyptic-warning",

  class extends HTMLElement {
    constructor() {
      super();

      let warning = document.getElementById("warningtemplate");

      let mywarning = warning.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        mywarning.cloneNode(true)
      );
    }
  }
);

customElements.define(
  "zombie-profile",
  class extends HTMLElement {
    constructor() {
      super();
      let profile = document.getElementById("zprofiletemplate");
      let myprofile = profile.content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        myprofile.cloneNode(true)
      );
    }
  }
);
