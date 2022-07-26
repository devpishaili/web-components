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

      // Grabbing the message button and the div wrapping the profile for later use.
      let msgbtn = this.shadowRoot.querySelector(".messagebtn"),
        profileEl = this.shadowRoot.querySelector(".profile-wrapper"),
        zname = this.getElementsByTagName("span")[0].innerHTML;

      // Adding the event listener
      msgbtn.addEventListener("click", function (e) {
        // creating all the elements we'll need to build our form
        let formEl = document.createElement("form"),
          subjectEl = document.createElement("input"),
          subjectlabel = document.createElement("label"),
          contentEl = document.createElement("textarea"),
          contentlabel = document.createElement("label"),
          submitEl = document.createElement("input"),
          closebtn = document.createElement("button");

        //   Setting up the form element. The action just goes to a page
        formEl.setAttribute("method", "post");
        formEl.setAttribute(
          "action",
          "https://johnrhea.com/undead-form-practice.php"
        );
        formEl.classList.add("hello");

        // Setting up a close button so we can close the message if we get shy
        closebtn.innerHTML = "x";
        closebtn.addEventListener("click", function () {
          formEl.remove();
        });

        // Setting up form fields and labels
        subjectEl.setAttribute("type", "text");
        subjectEl.setAttribute("name", "subj");
        subjectlabel.setAttribute("for", "subj");
        subjectlabel.innerHTML = "Subject:";

        contentEl.innerHTML = "Hi " + zname + ",\nI like your braaains...";
        contentEl.setAttribute("name", "cntnt");
        contentlabel.setAttribute("for", "cntnt");
        contentlabel.innerHTML = "Message:";

        submitEl.setAttribute("type", "submit");
        submitEl.setAttribute("value", "Send Message");

        // Putting all the elments in the Form
        formEl.appendChild(closebtn);
        formEl.appendChild(subjectlabel);
        formEl.appendChild(subjectEl);
        formEl.appendChild(contentlabel);
        formEl.appendChild(contentEl);
        formEl.appendChild(submitEl);

        // Putting the form on the page
        profileEl.appendChild(formEl);
      });
    }
  }
);

customElements.define(
  "zombie-watermark",
  class extends HTMLElement {
    constructor() {
      super();
      let watermark = document.getElementById("zwatermarktemplate");
      let mywatermark = watermark.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        mywatermark.cloneNode(true)
      );
    }
  }
);
