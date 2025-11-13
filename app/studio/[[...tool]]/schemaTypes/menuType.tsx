import { defineField, defineType } from "sanity";

export const menuType = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { value: "Classic Blends", title: "Classic Blends" },
          { value: "Green & White Teas", title: "Green & White Teas" },
          { value: "House Specialties", title: "House Specialties" },
          { value: "Sweet & Savory Bites", title: "Sweet & Savory Bites" },
          { value: "Coffee Companions", title: "Coffee Companions" },
        ],
      },
    }),
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
  ],
});
