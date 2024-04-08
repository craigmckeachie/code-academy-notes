import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Code Academy",

      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Git",
          items: [
            { label: "Getting Started", link: "/git/getting-started" },
            { label: "Configuring Git", link: "/git/configuration" },
            { label: "Using Git in VS Code", link: "/git/git-vscode" },
            { label: "Using Git on the Command-Line", link: "/git/git-command-line" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
