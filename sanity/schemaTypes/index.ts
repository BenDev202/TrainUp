import type { SchemaTypeDefinition } from "sanity"
import { studentType } from "./studentType"
import { moduleType } from "./moduleType"
import { instructorType } from "./instructorType"
import { lessonCompletionType } from "./lessonCompletionType"
import { lessonType } from "./lessonType"
import { enrollmentType } from "./enrollmentType"
import { blockContent } from "./blockContent"
import { courseType } from "./courseType"
import { categoryType } from "./categoryType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    moduleType,
    instructorType,
    lessonCompletionType,
    lessonType,
    enrollmentType,
    blockContent,
    courseType,
    categoryType,
  ],
}
