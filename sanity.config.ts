"use client";

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [visionTool({ defaultApiVersion: apiVersion }), markdownSchema()],
  structure, // Use the structure function directly
});
