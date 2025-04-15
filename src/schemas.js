/**
 * Central export for all schema definitions
 */

import { generateImageUrlSchema, generateImageSchema, listImageModelsSchema } from './services/imageSchema.js';

// Re-export all schemas
export {
  // Image schemas
  generateImageUrlSchema,
  generateImageSchema,
  listImageModelsSchema
};

/**
 * Get all tool schemas as an array
 * @returns {Array} Array of all tool schemas
 */
export function getAllToolSchemas() {
  return [
    generateImageUrlSchema,
    generateImageSchema,
    listImageModelsSchema
  ];
}
