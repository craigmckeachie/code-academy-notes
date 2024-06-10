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
          label: "Reference",
          items: [
            { label: "HTML ", link: "/reference/html" },
            { label: "CSS ", link: "/reference/css" },
            { label: "JavaScript ", link: "/reference/javascript" },
            { label: "HTML & JavaScript ", link: "/reference/html-javascript" },
            {
              label: "Naming Conventions ",
              link: "/reference/naming-conventions",
            },
            {
              label: "Special Characters ",
              link: "/reference/special-characters",
            },
            { label: "Rest", link: "/reference/rest" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "HTML ", link: "/resources/html" },
            { label: "CSS ", link: "/resources/css" },
            { label: "JavaScript ", link: "/resources/javascript" },
          ],
        },
        {
          label: "Git",
          items: [
            { label: "Getting Started", link: "/git/git-getting-started" },
            { label: "Configuring Git", link: "/git/git-configuration" },
            { label: "Using Git in VS Code", link: "/git/git-vscode" },
            {
              label: "Using Git on the Command-Line",
              link: "/git/git-command-line",
            },
            {
              label: "Git GUI vs Command-Line",
              link: "/git/git-gui-cli",
            },
            {
              label: "Git Clone",
              link: "/git/git-clone",
            },
            {
              label: "Git Branch Merge",
              link: "/git/git-branch-merge",
            },
            {
              label: "Git Remote",
              link: "/git/git-remote",
            },
            {
              label: "Git Collaboration",
              link: "/git/git-collaboration",
            },
            {
              label: "Git Feature Branch Workflow",
              link: "/git/git-feature-branch-workflow",
            },
            {
              label: "Github Repository Configuration",
              link: "/git/github-repository-configuration",
            },
            {
              label: "Git Collaboration Cheatsheet",
              link: "/git/git-collaboration-cheatsheet",
            },
          ],
        },
        {
          label: "Visual Studio Code",
          items: [
            { label: "Configuring VS Code", link: "/vscode/configuration" },
          ],
          // autogenerate: { directory: "reference" },
        },
        {
          label: "Operating Systems",
          items: [
            { label: "Windows", link: "/operating-system/windows" },
            { label: "Mac", link: "/operating-system/mac" },
          ],
          // autogenerate: { directory: "operating-system" },
        },
        {
          label: "Exercises",
          items: [
            { label: "1-47", link: "/exercises/1-47-city-site" },
            { label: "2-21", link: "/exercises/2-21-city-site" },
            { label: "3-16", link: "/exercises/3-16-bootstrap-examples-setup" },
            { label: "3-25", link: "/exercises/3-25-bootstrap-examples-grid" },
            {
              label: "3-38",
              link: "/exercises/3-38-bootstrap-examples-utility-classes",
            },
            { label: "3-46", link: "/exercises/3-46-bootstrap-examples-forms" },
            { label: "3-47", link: "/exercises/3-47-bootstrap-examples-cards" },
            {
              label: "3-49",
              link: "/exercises/3-49-bootstrap-examples-navbar",
            },
          ],
        },
      ],
    }),
  ],
});
