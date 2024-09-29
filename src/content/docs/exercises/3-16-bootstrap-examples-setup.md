---
title: Exercise 3-16
---

In this exercise, you create a `bootstrap-examples` project and configure a home page to use Bootstrap. It is step 1 for other exercises in this module.

## Setting up Bootstrap

1.  Create a folder named `bootstrap-examples`.
1.  **Open** the **folder** in Visual Studio Code.
1.  Create three folders:

    - css
    - images
    - scripts
      > You will leave them empty for now.

1.  Create the file `bootstrap-examples\index.html`.

    > Files at this level are referred to as being at the root of the project (folder).

1.  In `index.html`, create the standard HTML layout including `DOCTYPE`, `html`, `head` and `body` elements.

    > HINT: Use emmet to do the work for you

1.  Add an `h1` and a `paragraph` to the `index.html` page.
1.  Test the page to verify that the bootstrap stylesheet changed the look of the page.
1.  In the `css` folder create a file `bootstrap.css`. Copy [the contents of this file](https://gist.github.com/craigmckeachie/357e9180b245d2cb87c342fd319c4d0e) into your empty `bootstrap.css` file.
1.  Add a stylesheet link in `index.html` to point to the `css\bootstrap.css` file you downloaded in the last step.
1.  Test the page to verify it still looks the same.
1.  Install the extension [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
    [Details on how to do install the extensions are here](../setup/vscode-config.md).
1.  Click the **lightning bolt** in the toolbar.
1.  Test that the css class names from Bootstrap now autocomplete in your project.
