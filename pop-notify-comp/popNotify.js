const template = document.createElement("template");

template.innerHTML = /* css */ `
    <style>

        .tooltip-container {
            display: inline-block;
            position: relative;
            z-index: 2;
        }

        svg {
            width: 1rem;
            fill: blue;
            transition: 0.3s ease-in-out;
        }

        .cancel {
            display: none;
        }

        .notify-container {
            position: absolute;
            bottom: 125%;
            width: 300px;
            z-index: 9;
            background: white;
            box-shadow: 5px 5px 10px rgba(0,0,0,.1);
            font-size: .8em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }
    </style>

    <div class="tooltip-container">
        <svg viewBox="0 0 512 512" class="alert">
            <path
            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
            />
        </svg>

        <svg viewBox="0 0 512 512" class="cancel">
            <path
            d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"
            />
        </svg>

        <div class="notify-container">
           <slot name='message'/>
        </div>
    </div>
`;

class PopNotify extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  tooltip(expandState) {
    const tooltip = this.shadowRoot.querySelector(".notify-container");
    const alert = this.shadowRoot.querySelector(".alert");
    const cancel = this.shadowRoot.querySelector(".cancel");

    if (expandState == true) {
      tooltip.style.transform = "scale(1)";
      alert.style.display = "none";
      cancel.style.display = "block";
      expandState = false;
    } else {
      tooltip.style.transform = "scale(0)";
      alert.style.display = "block";
      cancel.style.display = "none";
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".alert").addEventListener("click", () => {
      this.tooltip(true);
    });
    this.shadowRoot.querySelector(".cancel").addEventListener("click", () => {
      this.tooltip(false);
    });

    if (this.getAttribute("tip_bg")) {
      this.shadowRoot.querySelector(".notify-container").style.background =
        this.getAttribute("tip_bg");
    }
    if (this.getAttribute("tip_color")) {
      this.shadowRoot.querySelector(".notify-container").style.color =
        this.getAttribute("tip_color");
    }
  }
}

customElements.define("popup-notify", PopNotify);
