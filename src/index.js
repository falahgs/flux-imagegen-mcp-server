/**
 * Pollinations API Client
 *
 * A simple client for the Pollinations APIs that follows the thin proxy design principle
 */

// Import services
import { generateImageUrl, generateImage, listImageModels } from './services/imageService.js';

// Export all service functions
export {
  // Image services
  generateImageUrl,
  generateImage,
  listImageModels
};

// If this file is run directly (e.g., with Node.js)
if (typeof require !== 'undefined' && require.main === module) {
  async function run() {
    try {
      console.log('Testing Pollinations API client...');

      // Test image URL generation
      const imageUrl = await generateImageUrl('A beautiful sunset over the ocean');
      console.log('Image URL:', imageUrl);

      // Test model listing
      const imageModels = await listImageModels();
      console.log('Image models:', imageModels);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  run();
}
