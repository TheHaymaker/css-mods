CSS-at-scale:

- namespace collisions
- nest selectors

  - specificity hell
    - e.g. 'div.wrapper input#select > div.button'
  - dead code

- Optimize for deletability

  - Button/

    - Button.js
      -button.css

    - CSS encapsulation
      - eliminate namespace collisions

- BEM

  - convention
    Block Element Modifier

  - .e.g. .header-title
    e.g. .header-title\_\_italic {
    text-decoration: italic;
    }

- ITCSS
  - Inverted Triangle
  - Organizing stylesheets
