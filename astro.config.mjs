import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Code Academy",

      social: {
        github: "https://github.com/craigmckeachie/code-academy-notes",
      },
      sidebar: [
        {
          label: "Operating System",
          items: [
            { label: "Windows Quickstart", link: "/operating-system/windows" },
            { label: "Mac Quickstart", link: "/operating-system/mac" },
          ],
          // autogenerate: { directory: "operating-system" },
        },
        {
          label: "Visual Studio Code",
          items: [{ label: "Configuring VS Code", link: "/vscode/configuration" }],
          // autogenerate: { directory: "reference" },
        },
        {
          label: "Exercises",
          items: [
            { label: "1-47", link: "/exercises/1-47-city-site" },
            { label: "2-21", link: "/exercises/2-21-city-site" },
            { label: "3-16", link: "/exercises/3-16-bootstrap-examples-setup" },
            { label: "3-25", link: "/exercises/3-25-bootstrap-examples-grid" },
            { label: "3-38", link: "/exercises/3-38-bootstrap-examples-utility-classes" },
            { label: "3-46", link: "/exercises/3-46-bootstrap-examples-forms" },
            { label: "3-47", link: "/exercises/3-47-bootstrap-examples-cards" },
            { label: "3-49", link: "/exercises/3-49-bootstrap-examples-navbar" },
          ],
        },
        {
          label: "Git",
          items: [
            { label: "Getting Started", link: "/git/getting-started" },
            { label: "Configuring Git", link: "/git/configuration" },
            { label: "Using Git in VS Code", link: "/git/git-vscode" },
            { label: "Using Git on the Command-Line", link: "/git/git-command-line" },
          ],
        },
      ],
    }),
  ],
});
