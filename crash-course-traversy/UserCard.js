const template = document.createElement("template");
template.innerHTML = `
<style>
.user-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-width: 100%;
    border-radius: 5px;
    border-bottom: darkorchid 5px solid;
    background-color: #f3f3f3;
    padding: 1rem;
    gap: 1rem
  }
  
  .user-card img {
    width: 100%;
  }

  .user-card button{
    background:  darkorchid ;
    color: #fff;
    cursor:pointer;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
  }
  
</style>

<div class='user-card'>
    <img />
    <div>
        <h3></h3>

        <div class="info">
            <p><slot name="email"/></p>
            <p><slot name="phone"/></p>
        </div>

        <button id="toggle-info">Hide Info</button>
    </div>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    
    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector(".info");
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

    if (this.showInfo) {
      info.style.display = "block";
      toggleBtn.innerText = "Hide Info";
    } else {
      info.style.display = "none";
      toggleBtn.innerText = "Show Info";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("user-card", UserCard);
