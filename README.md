# Flux ImageGen MCP Server

A specialized Model Context Protocol (MCP) server for image generation and manipulation, powered by Pollinations AI.

## Developer
- **Author**: Falah.G.Salieh
- **Copyright**: © 2025 All rights reserved

## Overview

ImageGen MCP Server is a streamlined server implementation that provides powerful image generation capabilities through the Model Context Protocol (MCP). This server specializes in three core functionalities:

1. Image URL Generation
2. Direct Image Generation
3. Model Listing and Management

## Features

- 🖼️ **Image Generation**: Create stunning images from text prompts
- 🎨 **Multiple Models**: Support for various image generation models
- 🔧 **Flexible Configuration**: Easy to set up and customize
- 🚀 **High Performance**: Optimized for quick response times
- 🔄 **MCP Compatible**: Fully compliant with Model Context Protocol

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flux-imagegen-mcp-server.git

# Install dependencies
npm install
```

## Configuration

### Claude Desktop Configuration

To use this server with Claude Desktop, update your configuration file at:
`C:\Users\[YourUsername]\AppData\Roaming\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "mcpollinations": {
      "command": "cmd",
      "args": [
        "/c",
        "node",
        "PATH_TO_YOUR_SERVER\\server.js"
      ],
      "tools": [
        "generateImageUrl",
        "generateImage",
        "listImageModels"
      ]
    }
  }
}
```

Replace `PATH_TO_YOUR_SERVER` with your actual server path.

## Available Tools

### 1. Generate Image URL (`generateImageUrl`)
Generates a URL for an image based on a text prompt.

```javascript
{
  "prompt": "A beautiful sunset over mountains",
  "model": "flux",  // optional, defaults to 'flux'
  "width": 1024,    // optional
  "height": 1024,   // optional
  "enhance": true,  // optional
  "safe": false     // optional
}
```

### 2. Generate Image (`generateImage`)
Generates and saves an image directly from a text prompt.

```javascript
{
  "prompt": "A serene lake reflecting mountains",
  "model": "flux",
  "width": 1024,
  "height": 1024,
  "enhance": true,
  "safe": false,
  "outputPath": "./output",
  "fileName": "mountain_lake",
  "format": "png"
}
```

### 3. List Image Models (`listImageModels`)
Returns a list of available image generation models.

```javascript
// Example response:
{
  "models": [
    {
      "id": "flux",
      "name": "Flux",
      "description": "Default image generation model"
    },
    // ... other models
  ]
}
```



 

## Running the Server

```bash
# Start the server
node pollinations-mcp-server.js
```

## Environment Requirements

- Node.js >= 16.0.0
- NPM >= 7.0.0
- Windows/Linux/MacOS compatible

## Development

To contribute or modify the server:

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request

## Error Handling

The server provides detailed error messages for common issues:

```javascript
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { /* Additional error details */ }
  }
}
```

## Examples

### Basic Image Generation
```javascript
// Generate an image URL
const response = await generateImageUrl({
  prompt: "A futuristic city at night",
  model: "flux",
  width: 1024,
  height: 1024
});

// Generate and save an image
const image = await generateImage({
  prompt: "A peaceful garden with butterflies",
  outputPath: "./images",
  fileName: "garden_scene"
});
```

### Download Image Example
```javascript
// Download an image from URL
const downloadResult = await downloadImage({
  imageUrl: "https://example.com/image.jpg",
  fileName: "downloaded-image",
  format: "png"
});
```

## Support

For issues and feature requests, please create an issue in the repository or contact the developer:
- Email: [Your contact email]
- GitHub: [Your GitHub profile]

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
Made with ❤️ by Falah.G.Salieh
© 2025 All rights reserved

