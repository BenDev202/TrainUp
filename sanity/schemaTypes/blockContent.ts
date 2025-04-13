import { defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Content",
  type: "array",
  of: [{ type: "block" }],
});
