# Translatr - Text to Internet Slang Converter


## 🚀 Overview

Translatr is a modern web application that converts regular text into various levels of internet slang. Built with Next.js, TypeScript, and powered by Google's Gemini AI, it offers real-time text transformation with smooth animations and a responsive design.

### ✨ Key Features

- 🎯 Multiple slang intensity levels (Mild to Crazy)
- 🎨 Sleek, responsive UI for both desktop and mobile
- ⚡ Real-time text transformation
- 🔄 GSAP-powered animations
- 📱 Mobile-first design
- 📋 One-click copy functionality

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **AI**: Google Gemini AI
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- Google Gemini API key
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Translatr.git
cd Translatr
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create a .env.local file and add:
GOOGLE_API_KEY=your_gemini_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎮 Usage

1. Enter your text in the input field
2. Select desired slang level (Mild, Medium, Heavy, Extreme, or Crazy)
3. Click "Translate" to convert
4. Copy the result or play the animation again
5. Mobile users can access the input field through the menu button

## 🎨 Features in Detail

### Slang Levels

- **Mild**: Basic internet abbreviations and light slang
- **Medium**: Common internet slang and abbreviations
- **Heavy**: More intense slang with popular internet terms
- **Extreme**: Heavy slang usage with emojis
- **Crazy**: Maximum slang intensity with abundant emojis

### UI/UX Features

- Smooth GSAP animations
- Responsive design for all devices
- Dark mode interface
- Copy to clipboard functionality
- Loading states and error handling
- Mobile-optimized interface

## 📱 Mobile Support

The application is fully responsive with:
- Collapsible input panel
- Touch-friendly buttons
- Horizontal scroll for slang levels
- Optimized spacing for mobile screens

## 🛠️ Development

### Project Structure
```
Translatr/
├── app/
│   ├── api/
│   │   └── translate/
│   │       └── route.ts
│   ├── components/
│   │   └── TextSlangTranslator.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── styles/
├── package.json
└── next.config.js
```

### API Usage

The application uses Google's Gemini AI API for text transformation. Ensure you have proper API key configuration and error handling in place.

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👏 Acknowledgments

- Google Gemini AI for powerful text processing
- GSAP for smooth animations
- Vercel for hosting
- Next.js team for the amazing framework

## 📫 Contact

Email - vinitjain088@gmail.com

Project Link: [https://github.com/yourusername/Translatr](https://github.com/yourusername/Translatr)
