import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "nmfc-content-studio",
  title: "nMFC",
  projectId,
  dataset,
  // Desk tool allows us to update content
  // Vision tool allows us to test GROQ queries
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // This is the component that renders the toolbar
      // We can use this to add our own custom toolbar items
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
