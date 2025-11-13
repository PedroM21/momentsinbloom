import { defineField, defineType } from "sanity";

export const seasonalType = defineType({
  name: "seasonalMenu",
  title: "Seasonal Menu",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "price",
      type: "string",
    }),
    defineField({
      name: "photo",
      type: "image",
    }),
  ],
});
