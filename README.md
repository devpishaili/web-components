# Web Components
 Web Components are a suite of different technologies, implemented with the web platform APIs, that allows us to create custom reusable and encapsulated html tags to use in webpages and web apps.
 
 Web Components do not require any 3rd party libraries or frameworks but can certainly be used with them.

# 3  Building Blocks of Web Components

### 1.  Custom Elements 
Custom elements give us the capability to create our own custom html tags, extend html tags and make lifecycle methods available. There are four (4) custom elements lifecycle methods, and these include:

   - **constructor()**: called when an instance of the element is created or upgraded
   - **connectedCallback()**: called everytime the element is inserted into the DOM 
   - **disconnectedCallback()**: called everytime the element is removed from the DOM
   - **attributeChangedCallback(attributeName, oldValue, newValue)**: called when an attribute is added, removed, updated or replaced.
   
### 2. Shadow DOM: 
This is basically self-containment. It alows us to contain all of our HyperText Markups and styles in our ustom element, that our custime element is basically it's own entity set apart from the regular DOM (Document Object Model). In this case, the styling in here is separte from the global css of the webpage / app.

### 3. HTML Templates
This is basically how we define our encapsulated markup of our web component on page load. The template tag allows us to store some markups on a page that can later be cloned and reused, which include both the HTML and CSS of our template.
   - slots in template help to make template dynamic by allowing us to add custom texts and outputs to our template.  

# VS Code Extensions to Support Building Web Components
1. Comment tagged template

# Alternative Libraries and Frameworks
1. Vue
2. Angular
3. React

# References
