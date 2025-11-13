import { type SchemaTypeDefinition } from "sanity";
import { seasonalType } from "@/app/studio/[[...tool]]/schemaTypes/seasonalType";
import { menuType } from "@/app/studio/[[...tool]]/schemaTypes/menuType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seasonalType, menuType],
};
