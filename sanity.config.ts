import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "6l1wyfou",
    dataset: "production",
    title: "Ananda Stones",
    apiVersion: "2023-07-23",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas} 
});

export default config;