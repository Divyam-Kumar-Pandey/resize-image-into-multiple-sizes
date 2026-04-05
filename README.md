# MultiResize

MultiResize is a fast, free, and organic offline client-side image resizing application. Designed for simplicity and privacy, it resizes your images entirely in your browser without ever uploading them to any external server. 

## Features

- **Client-Side Processing**: All image resizing is done using your browser. No uploads, no server processing. Your images stay yours.
- **Multiple Output Sizes**: Define any number of custom dimensions and export them all at once.
- **Organic Presets**: Quick options for standard sizes like Instagram Squares, Stories, LinkedIn banners, and Twitter posts.
- **High-Quality Scaling**: Utilizes `pica` for beautiful, sharp image resizing that exceeds standard native browser canvas downscaling. 
- **Zip Export**: Packs all your processed images into a single ZIP file for a clean, easy download.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Divyam-Kumar-Pandey/resize-image-into-multiple-sizes.git
   cd resize-image-into-multiple-sizes
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start resizing images.

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Image Resizing**: Pica
- **File Archiving**: JSZip
- **Icons**: React-Icons

## License

All rights reserved. © 2024 MultiResize.
