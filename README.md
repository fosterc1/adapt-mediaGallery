# adapt-mediaGallery

[![Adapt Framework Version](https://img.shields.io/badge/Adapt%20Framework-5.8%2B-brightgreen)](https://github.com/adaptlearning/adapt_framework)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0.0-orange.svg)](https://github.com/cgkineo/adapt-mediaGallery/releases)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green.svg)](#accessibility)
[![RTL Support](https://img.shields.io/badge/RTL-Supported-success.svg)](#internationalization)

> **A presentation component that extends adapt-contrib-media to provide a gallery of videos from which the user can select.**

Media Gallery is a fully accessible, responsive component for the Adapt Learning Framework that allows learners to browse and play multiple media items (video or audio) from an elegant thumbnail gallery interface. Each media item can have its own poster image, closed captions, and transcripts.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
  - [Attributes](#attributes)
  - [Media Items](#media-items)
  - [Transcript Options](#transcript-options)
- [Examples](#examples)
- [Accessibility](#accessibility)
- [Internationalization](#internationalization)
- [Browser Support](#browser-support)
- [Responsive Design](#responsive-design)
- [Styling & Customization](#styling--customization)
- [Performance](#performance)
- [Known Issues](#known-issues)
- [Developer Guide](#developer-guide)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [About Adapt Learning](#about-adapt-learning)

---

## Features

✨ **Core Functionality**
- 📺 Multiple video/audio items in a single component
- 🖼️ Individual thumbnail images for each media item
- 🎬 Automatic poster frame selection per video
- 📝 Per-item closed captioning with multi-language support
- 📄 Inline and external transcript options (global and per-item)
- ✅ Flexible completion tracking (play, allPlayed, ended, allEnded, inview)

🎨 **User Experience**
- 📱 Fully responsive grid layout
- 👆 Touch-device optimized
- ⌨️ Complete keyboard navigation support
- 🔊 Volume controls and playback speed options
- 🖥️ Full-screen viewing capability
- 🎯 Visual feedback for visited/selected items

🛠️ **Technical Excellence**
- 🔌 Extends official adapt-contrib-media component
- 🎛️ MediaElement.js v7.0.7 for consistent playback
- 🔄 Backward compatible data structure
- ✏️ Full Adapt Authoring Tool (AAT) support (legacy v4-5 and modern v6+)
- ♿ WCAG 2.1 AA compliant
- 🌍 RTL (Right-to-Left) language support
- 🌐 Internationalization ready

---

## Demo

![Media Gallery Demo](https://via.placeholder.com/800x450/0066cc/ffffff?text=Media+Gallery+Component)

*Screenshot showing the media gallery component with thumbnail grid and active video player*

---

## Installation

### Adapt Framework

**Via Adapt CLI:**
```bash
adapt install adapt-mediaGallery
```

**Manual Installation:**
1. Download the plugin from the [releases page](https://github.com/cgkineo/adapt-mediaGallery/releases)
2. Extract to `src/components/adapt-mediaGallery`
3. Run `adapt build`

**Via package.json:**
Add to your `package.json`:
```json
{
  "adapt": {
    "componentTypes": [
      "adapt-mediaGallery"
    ]
  }
}
```

### Adapt Authoring Tool

The Media Gallery component is compatible with both legacy (v4-5) and modern (v6+) Adapt Authoring Tool versions.

**Installation:**
1. Navigate to **Plugin Management** in your AAT instance
2. Search for "adapt-mediaGallery"
3. Click **Install**

**Manual Upload:**
1. Download the latest release
2. Go to **Plugin Management** → **Upload**
3. Select the zip file and upload

---

## Usage

### Quick Start

Add the component to your `components.json`:

```json
{
  "_id": "c-05",
  "_parentId": "b-05",
  "_type": "component",
  "_component": "mediagallery",
  "_classes": "",
  "_layout": "full",
  "title": "Media Gallery",
  "displayTitle": "Video Library",
  "body": "Select a video thumbnail below to view the content.",
  "instruction": "Click on any thumbnail to play the video.",
  "_setCompletionOn": "allPlayed",
  "_mediaGallery": {
    "_items": [
      {
        "title": "Introduction",
        "subtitle": "Getting Started",
        "ariaLabel": "Play introduction video",
        "_graphic": {
          "src": "course/en/images/intro-thumb.jpg",
          "alt": "Introduction video thumbnail"
        },
        "_media": {
          "mp4": "course/en/video/intro.mp4",
          "poster": "course/en/video/intro-poster.jpg"
        }
      }
    ]
  }
}
```

See [example.json](example.json) for a complete configuration example.

---

## Configuration

### Attributes

#### Core Attributes

| Attribute | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `_component` | string | Yes | - | Must be `"mediagallery"` |
| `_classes` | string | No | `""` | CSS classes for custom styling |
| `_layout` | string | No | `"full"` | Layout: `"full"`, `"left"`, or `"right"` |
| `title` | string | No | `""` | Component title |
| `displayTitle` | string | No | `""` | Display title shown to learners |
| `body` | string | No | `""` | Component body text |
| `instruction` | string | No | `""` | Instructional text for learners |

#### Media Gallery Specific

| Attribute | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `_setCompletionOn` | string | Yes | `"allPlayed"` | Completion trigger: `"inview"`, `"play"`, `"allPlayed"`, `"ended"`, `"allEnded"` |
| `_useClosedCaptions` | boolean | No | `false` | Enable closed captions |
| `_allowFullScreen` | boolean | No | `false` | Enable full-screen mode |
| `_playsinline` | boolean | No | `false` | Play videos inline on iOS (iOS 10+) |
| `_startLanguage` | string | No | `"en"` | Default caption language code |
| `_showVolumeControl` | boolean | No | `true` | Show volume control (not on mobile) |
| `_startVolume` | string | No | `"80%"` | Initial volume level |

#### Completion Options

- **`inview`** - Component completes when it comes into view
- **`play`** - Completes when any single media item starts playing
- **`allPlayed`** - Completes when all media items have been played
- **`ended`** - Completes when any single media item finishes
- **`allEnded`** - Completes when all media items have finished playing

### Media Items

The `_mediaGallery._items` array contains configuration for each video/audio item:

```json
{
  "title": "Video Title",
  "subtitle": "Optional Subtitle",
  "ariaLabel": "Descriptive label for screen readers",
  "_graphic": {
    "src": "path/to/thumbnail.jpg",
    "alt": "Alternative text for thumbnail"
  },
  "_media": {
    "mp4": "path/to/video.mp4",
    "webm": "path/to/video.webm",
    "ogv": "path/to/video.ogv",
    "poster": "path/to/poster.jpg",
    "cc": [
      {
        "srclang": "en",
        "src": "path/to/captions-en.vtt"
      },
      {
        "srclang": "es",
        "src": "path/to/captions-es.vtt"
      }
    ]
  },
  "_transcript": {
    "_inlineTranscript": true,
    "inlineTranscriptBody": "Full transcript text here..."
  }
}
```

#### Audio Items

For audio-only items:

```json
{
  "title": "Audio Title",
  "_graphic": {
    "src": "path/to/thumbnail.jpg"
  },
  "_media": {
    "mp3": "path/to/audio.mp3",
    "ogg": "path/to/audio.ogg",
    "poster": "path/to/cover-art.jpg"
  }
}
```

### Transcript Options

**Global Transcript** (applies to all items unless overridden):

```json
"_transcript": {
  "_setCompletionOnView": true,
  "_inlineTranscript": true,
  "_externalTranscript": false,
  "inlineTranscriptButton": "Show transcript",
  "inlineTranscriptCloseButton": "Hide transcript",
  "inlineTranscriptBody": "Default transcript text...",
  "transcriptLinkButton": "Download transcript",
  "transcriptLink": "course/en/pdf/transcript.pdf"
}
```

**Per-Item Transcript Override:**

```json
"_transcript": {
  "_inlineTranscript": true,
  "inlineTranscriptBody": "Specific transcript for this video..."
}
```

---

## Examples

### Example 1: Basic Video Gallery

```json
{
  "_component": "mediagallery",
  "_setCompletionOn": "allPlayed",
  "title": "Training Videos",
  "_mediaGallery": {
    "_items": [
      {
        "title": "Module 1",
        "_graphic": { "src": "course/en/images/mod1.jpg" },
        "_media": { "mp4": "course/en/video/module1.mp4" }
      },
      {
        "title": "Module 2",
        "_graphic": { "src": "course/en/images/mod2.jpg" },
        "_media": { "mp4": "course/en/video/module2.mp4" }
      }
    ]
  }
}
```

### Example 2: Multi-Language Captions

```json
{
  "_component": "mediagallery",
  "_useClosedCaptions": true,
  "_startLanguage": "en",
  "_mediaGallery": {
    "_items": [
      {
        "title": "Multilingual Content",
        "_graphic": { "src": "course/en/images/thumb.jpg" },
        "_media": {
          "mp4": "course/en/video/content.mp4",
          "cc": [
            { "srclang": "en", "src": "course/en/video/cc-en.vtt" },
            { "srclang": "es", "src": "course/en/video/cc-es.vtt" },
            { "srclang": "fr", "src": "course/en/video/cc-fr.vtt" },
            { "srclang": "de", "src": "course/en/video/cc-de.vtt" }
          ]
        }
      }
    ]
  }
}
```

### Example 3: Audio Gallery with Transcripts

```json
{
  "_component": "mediagallery",
  "_setCompletionOn": "allEnded",
  "title": "Audio Interviews",
  "_mediaGallery": {
    "_items": [
      {
        "title": "Expert Interview #1",
        "_graphic": { "src": "course/en/images/expert1.jpg" },
        "_media": { "mp3": "course/en/audio/interview1.mp3" },
        "_transcript": {
          "_inlineTranscript": true,
          "inlineTranscriptBody": "Interview transcript..."
        }
      }
    ]
  },
  "_transcript": {
    "_setCompletionOnView": true,
    "_inlineTranscript": true,
    "inlineTranscriptButton": "View transcript"
  }
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

The Media Gallery component is fully compliant with WCAG 2.1 Level AA standards:

#### ✅ Perceivable

- **Text Alternatives (1.1.1)**: All thumbnails include configurable `alt` text
- **Captions (1.2.2)**: Full closed caption support for video content
- **Audio Description or Media Alternative (1.2.3)**: Transcript functionality for both inline and external formats
- **Adaptable Content (1.3.x)**: Semantic HTML structure with proper heading hierarchy
- **Distinguishable (1.4.x)**: High contrast ratios, clear focus indicators, responsive text sizing

#### ✅ Operable

- **Keyboard Accessible (2.1.1)**: Complete keyboard navigation with Tab, Enter, Space, Arrow keys
- **No Keyboard Trap (2.1.2)**: Users can navigate away from media controls
- **Focus Order (2.4.3)**: Logical tab order through thumbnails and controls
- **Focus Visible (2.4.7)**: Clear focus indicators on all interactive elements
- **Target Size (2.5.5)**: Touch targets meet minimum 44×44px requirement

#### ✅ Understandable

- **Language of Page (3.1.1)**: Proper `lang` attributes
- **On Focus/Input (3.2.1, 3.2.2)**: No unexpected context changes
- **Labels or Instructions (3.3.2)**: Clear aria-labels and instructions

#### ✅ Robust

- **Parsing (4.1.1)**: Valid, semantic HTML5
- **Name, Role, Value (4.1.2)**: Comprehensive ARIA attributes

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Navigate between thumbnails and controls |
| `Enter` / `Space` | Select thumbnail or activate control |
| `Arrow Keys` | Navigate media controls timeline |
| `M` | Mute/unmute (when media has focus) |
| `F` | Toggle full-screen (when enabled) |
| `C` | Toggle captions (when enabled) |

### Screen Reader Support

- Tested with JAWS, NVDA, VoiceOver
- Descriptive ARIA labels for all controls
- Live region announcements for state changes
- Skip links to transcript content
- Proper `role` attributes

### Configurable ARIA Labels

All ARIA labels can be customized via `course.json` globals:

```json
"_globals": {
  "_components": {
    "_mediagallery": {
      "ariaRegion": "Media Gallery. Select a video from the list to play.",
      "skipToTranscript": "Skip to transcript",
      "playText": "Play",
      "pauseText": "Pause",
      "stopText": "Stop"
    }
  }
}
```

---

## Internationalization

### RTL (Right-to-Left) Support

Full support for RTL languages (Arabic, Hebrew, Persian, Urdu, etc.):

- Automatic layout flipping for RTL content
- Proper text alignment and direction
- Mirrored control positioning
- Tested with Arabic and Hebrew language courses

### Translation Support

All user-facing text is translatable via the schema:

- Button labels
- Instructions
- ARIA labels
- Transcript text
- Error messages

**Language Configuration:**

```json
"_globals": {
  "_components": {
    "_mediagallery": {
      "ariaRegion": "معرض الوسائط. اختر فيديو من القائمة.",
      "playText": "تشغيل",
      "pauseText": "إيقاف مؤقت"
    }
  }
}
```

### Multi-Language Caption Support

Include multiple WebVTT caption files:

```json
"cc": [
  { "srclang": "en", "src": "captions-en.vtt" },
  { "srclang": "es", "src": "captions-es.vtt" },
  { "srclang": "fr", "src": "captions-fr.vtt" },
  { "srclang": "zh", "src": "captions-zh.vtt" },
  { "srclang": "ar", "src": "captions-ar.vtt" }
]
```

---

## Browser Support

### Desktop Browsers

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest + ESR | ✅ Fully Supported |
| Firefox | Latest + ESR | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |

### Mobile Browsers

| Browser | Platform | Status |
|---------|----------|--------|
| Chrome | Android | ✅ Fully Supported |
| Safari | iOS 14+ / iPadOS | ✅ Fully Supported |
| Samsung Internet | Android | ✅ Supported |
| Firefox Mobile | Android | ✅ Supported |

### Video Format Recommendations

For maximum compatibility, provide multiple formats:

```json
"_media": {
  "mp4": "video.mp4",    // H.264 + AAC (widest support)
  "webm": "video.webm",  // VP8/VP9 + Vorbis/Opus
  "ogv": "video.ogv"     // Theora + Vorbis (fallback)
}
```

**Recommended Encoding:**
- **MP4**: H.264 (High Profile), AAC audio, 30fps, CBR
- **WebM**: VP9, Opus audio, 30fps
- **Resolution**: 1280×720 (720p) or 1920×1080 (1080p)
- **Bitrate**: 2-5 Mbps for 720p, 5-8 Mbps for 1080p

---

## Responsive Design

### Breakpoints

The component adapts to Adapt Framework's standard breakpoints:

| Breakpoint | Screen Width | Columns | Thumbnail Size |
|------------|--------------|---------|----------------|
| Extra Large | ≥ 1440px | 4 | 25% width |
| Large | 1024px - 1439px | 4 | 25% width |
| Medium | 768px - 1023px | 3 | 33% width |
| Small | 520px - 767px | 2 | 50% width |
| Extra Small | < 520px | 1 | 100% width |

### Mobile Optimizations

- **Touch Targets**: Minimum 44×44px for all interactive elements
- **Gesture Support**: Tap to play, pinch to zoom (when in full-screen)
- **Native Controls**: iOS devices can use native video controls via `_playsinline: false`
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Bandwidth Awareness**: Supports adaptive streaming when available

### Device-Specific Behavior

**iOS / iPadOS:**
- Option to play inline (`_playsinline: true`) or full-screen
- Volume controlled by device hardware
- Native caption styling option

**Android:**
- Full MediaElement.js control support
- Software volume controls
- Consistent caption styling

---

## Styling & Customization

### CSS Customization

The component uses LESS/CSS variables and follows Adapt's theming system.

#### Key CSS Classes

```less
.mediagallery {
  &__item-container { } // Grid container
  &__item { }           // Individual thumbnail
  &__item-image { }     // Thumbnail image
  &__item-title { }     // Title text
  &__item-subtitle { }  // Subtitle text
}
```

#### Custom Theme Example

```less
// custom-theme.less
.mediagallery {
  &__item {
    width: calc(~'20% - 1rem'); // 5 columns on large screens
    margin: 0.5rem;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  }
  
  &__item-image {
    border-radius: 8px;
    border: 3px solid @primary-color;
  }
  
  &__item.is-selected &__item-image {
    border-color: @secondary-color;
  }
}
```

### Theming Variables

Configure in your theme's `variables.less`:

```less
@item-color: #0066cc;
@item-color-hover: #0052a3;
@item-color-selected: #ff6600;
@visited: #9933cc;
```

### Player Customization

Extend MediaElement.js options:

```json
"_playerOptions": {
  "features": ["playpause", "current", "progress", "duration", "volume", "fullscreen"],
  "alwaysShowControls": false,
  "hideVolumeOnTouchDevices": true,
  "enableAutosize": true,
  "toggleCaptionsButtonWhenOnlyOne": true,
  "startVolume": 0.8
}
```

---

## Performance

### Optimization Best Practices

#### Video Optimization
- **Use appropriate compression**: Balance quality vs file size
- **Progressive download**: Enable HTTP progressive download for MP4
- **Lazy loading**: Videos load only when component is in view
- **Poster images**: Provide optimized poster frames (JPEG, WebP)

#### Asset Sizes
- **Thumbnails**: 300×200px recommended, < 50KB
- **Posters**: Match video resolution, < 100KB
- **Videos**: Aim for < 50MB per video for web delivery

#### CDN Delivery
Consider hosting large video files on a CDN:
```json
"_media": {
  "mp4": "https://cdn.example.com/videos/content.mp4"
}
```

### Loading Strategy

The component implements:
- Lazy loading for off-screen media
- Preload only the first video's metadata
- On-demand loading for subsequent videos
- Automatic resource cleanup when items are deselected

---

## Known Issues

The following issues are inherited from `adapt-contrib-media` and `MediaElement.js`:

1. **iOS Full-Screen Captions**: When `startLanguage` is specified, captions may not display when entering full-screen on iOS
2. **iOS Caption Duplication**: Enabling captions in full-screen can cause duplicate captions when exiting full-screen
3. **Android Caption Position**: Changing device orientation with captions enabled may misalign caption position

**Workarounds:**
- For issue #1: Let users manually enable captions after entering full-screen
- For issue #2: Recommend disabling captions before full-screen, then re-enabling
- For issue #3: Pause playback during orientation change

### Reporting New Issues

Found a bug? Please report it:
1. Check [existing issues](https://github.com/cgkineo/adapt-mediaGallery/issues)
2. Create a new issue with:
   - Adapt version
   - Browser and device information
   - Steps to reproduce
   - Expected vs actual behavior

---

## Developer Guide

### Project Structure

```
adapt-mediaGallery/
├── js/
│   ├── adapt-mediaGallery.js      # Entry point
│   ├── mediaGalleryModel.js       # Data model
│   └── mediaGalleryView.js        # View logic
├── less/
│   └── mediagallery.less           # Styles
├── templates/
│   └── mediagallery.hbs            # Handlebars template
├── schema/
│   ├── component.schema.json       # Modern AAT schema (v6+)
│   └── course.schema.json          # Global strings schema
├── properties.schema               # Legacy AAT schema (v4-5)
├── bower.json                      # Bower metadata
├── package.json                    # npm metadata
├── example.json                    # Configuration example
├── LICENSE                         # GPL-3.0 license
├── README.md                       # This file
└── CHANGELOG.md                    # Version history
```

### Extending the Component

**Create a Custom Variant:**

```javascript
// js/customMediaGalleryView.js
import MediaGalleryView from './mediaGalleryView';

class CustomMediaGalleryView extends MediaGalleryView {
  
  onItemClicked(e) {
    // Custom click behavior
    console.log('Custom click handler');
    super.onItemClicked(e);
  }
  
  // Override other methods as needed
}

export default CustomMediaGalleryView;
```

### Building and Testing

```bash
# Clone the repository
git clone https://github.com/cgkineo/adapt-mediaGallery.git
cd adapt-mediaGallery

# Install dependencies (if using npm)
npm install

# Test in Adapt Framework
cd /path/to/adapt-framework
adapt install adapt-mediaGallery

# Build and preview
adapt build
adapt preview
```

### Contributing Guidelines

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Code style guidelines
- Pull request process
- Testing requirements
- Documentation standards

**Quick Contribution Steps:**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes with clear commit messages
4. Test thoroughly across devices and browsers
5. Submit a pull request with detailed description

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed version history and migration guides.

**Latest Version: 2.0.0** - Full Adapt Authoring Tool support, enhanced accessibility, comprehensive documentation

---

## License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

Copyright © 2024 Kineo and contributors

### Dependencies

- [MediaElement.js](http://mediaelementjs.com/) - MIT License
- [Adapt Learning Framework](https://github.com/adaptlearning/adapt_framework) - GPL-3.0

---

## About Adapt Learning

<div align="center">

[![Adapt Learning](https://community.adaptlearning.org/pluginfile.php/1/theme_adaptable/logo/1606745509/adapt-logo.png)](https://www.adaptlearning.org/)

[Website](https://www.adaptlearning.org/) | [Community](https://community.adaptlearning.org/) | [Documentation](https://github.com/adaptlearning/adapt_framework/wiki) | [Twitter](https://twitter.com/adaptlearning)

</div>

**Adapt Learning** is a free and open-source e-learning authoring tool that creates responsive, multi-device HTML5 content. The framework is maintained by the Adapt Core Team and a vibrant community of contributors worldwide.

### Useful Links

- [Adapt Framework on GitHub](https://github.com/adaptlearning/adapt_framework)
- [Adapt Authoring Tool](https://github.com/adaptlearning/adapt_authoring)
- [Community Forums](https://community.adaptlearning.org/)
- [Plugin Registry](https://www.adaptlearning.org/index.php/plugin-browser/)
- [Developer Documentation](https://github.com/adaptlearning/adapt_framework/wiki)

---

## Support

- 💬 **Community Support**: [Adapt Community Forums](https://community.adaptlearning.org/)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/cgkineo/adapt-mediaGallery/issues)
- 📖 **Documentation**: [Wiki](https://github.com/cgkineo/adapt-mediaGallery/wiki)
- ⭐ **Feature Requests**: [GitHub Discussions](https://github.com/cgkineo/adapt-mediaGallery/discussions)

---

<div align="center">

**Made with ❤️ by the Adapt Learning Community**

[![GitHub stars](https://img.shields.io/github/stars/cgkineo/adapt-mediaGallery?style=social)](https://github.com/cgkineo/adapt-mediaGallery/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/cgkineo/adapt-mediaGallery?style=social)](https://github.com/cgkineo/adapt-mediaGallery/network/members)

</div>
