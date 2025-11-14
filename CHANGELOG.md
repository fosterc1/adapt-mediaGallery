# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-11-14

### Added
- **Full Adapt Authoring Tool (AAT) Support**
  - Created `properties.schema` for legacy AAT (v4-5) compatibility
  - Created `schema/component.schema.json` for modern AAT (v6+) using JSON Schema 2020-12
  - Created `schema/course.schema.json` for global strings and ARIA labels
  - Complete UI configuration interface in both legacy and modern authoring tools
  
- **Enhanced Data Structure**
  - Introduced `_mediaGallery` wrapper object for better plugin isolation
  - Updated `targetAttribute` to `_mediaGallery` to prevent conflicts with other components
  - Comprehensive asset field mapping for all media types (video, audio, captions, transcripts)
  
- **Accessibility Improvements**
  - Full WCAG 2.1 AA compliance (WAI AA)
  - Comprehensive ARIA labels for all interactive elements
  - Keyboard navigation support
  - Screen reader optimizations
  - Skip to transcript functionality
  - Proper focus management
  
- **Documentation**
  - Comprehensive README with installation instructions
  - Detailed attribute documentation
  - JSON configuration examples
  - Accessibility guidelines
  - Browser compatibility matrix
  - Developer documentation
  - CHANGELOG for version tracking

### Changed
- **Breaking Changes**
  - Data structure now requires `_mediaGallery` wrapper object (backward compatible via model)
  - Updated `targetAttribute` from `_component` to `_mediaGallery` in bower.json
  - Component now properly extends adapt-contrib-media v5.1+
  
- **Improved Player Behavior**
  - Implemented `resetPlayerSize()` method to prevent video element growth on repeated plays
  - Enhanced device change handling with proper size recalculation
  - Better MediaElement.js integration following official adapt-contrib-media patterns
  
- **Enhanced View Logic**
  - Added proper null checks for `mediaElement.player` before calling methods
  - Improved item selection and media switching logic
  - Better handling of poster images and closed captions
  - Optimized transcript display and toggling

### Fixed
- **Video Player Issues**
  - Fixed video player growing larger on repeated thumbnail clicks (v1.1.1, v1.1.2, v1.1.3)
  - Resolved `Cannot read properties of undefined (reading 'rebuildtracks')` error
  - Fixed inline dimension accumulation from MediaElement.js
  - Corrected player container sizing to match component widget width
  
- **Upload and Configuration Issues**
  - Resolved "plugin already installed with target attribute" conflict
  - Fixed asset field paths for proper media upload in AAT
  - Corrected closed caption track handling

- **Backward Compatibility**
  - Model now supports both old format (`_items` at root) and new format (`_mediaGallery._items`)
  - Existing courses will continue to work without modification

## [1.1.3] - 2024-11-14

### Fixed
- Video player size growing on repeated video selection
- Implemented `resetPlayerSize()` pattern from official adapt-contrib-media
- Added proper sizing on player ready, device change, and after item selection

## [1.1.2] - 2024-11-14

### Changed
- Added CSS constraints to prevent video growing
- Removed inline width/height attributes from video element
- Enhanced player controls styling

## [1.1.1] - 2024-11-14

### Fixed
- Fixed runtime error: "Cannot read properties of undefined (reading 'rebuildtracks')"
- Added conditional check for `mediaElement.player` before calling methods
- Improved video switching logic with pause, poster updates, and caption handling

## [1.1.0] - 2024-11-14

### Added
- Initial Adapt Authoring Tool (AAT) compatibility
- Created `properties.schema` for legacy AAT support
- Refactored data structure with `_mediaGallery` wrapper
- Updated targetAttribute to resolve conflicts

### Changed
- Updated all code references to use new data structure
- Modified template to iterate over `_mediaGallery._items`
- Updated example.json with new structure

## [1.0.0] - Initial Release

### Added
- Core media gallery functionality extending adapt-contrib-media
- Multiple video selection with thumbnail gallery
- Individual poster images per video
- Per-video closed captioning support
- Multi-language caption support
- Completion tracking (play, allPlayed, ended, allEnded, inview)
- Transcript support (inline and external)
- Responsive grid layout for thumbnails
- Touch device support
- Visual feedback for visited/selected items

### Features
- Extends adapt-contrib-media for consistent media playback
- MediaElement.js v7.0.7 integration
- Full-screen support
- Volume controls
- Playback controls
- Caption/subtitle support
- Customizable player options

---

## Version History Summary

- **v2.0.0** - Full AAT support, enhanced accessibility, comprehensive documentation
- **v1.1.3** - Video player sizing fixes
- **v1.1.2** - CSS enhancements for player sizing
- **v1.1.1** - Runtime error fixes
- **v1.1.0** - Initial AAT compatibility
- **v1.0.0** - Initial release with core functionality

## Upgrade Guide

### Upgrading from 1.x to 2.0.0

The data structure has changed to improve AAT compatibility and prevent conflicts:

**Old Structure (1.x):**
```json
{
  "_component": "mediagallery",
  "_items": [...]
}
```

**New Structure (2.0.0):**
```json
{
  "_component": "mediagallery",
  "_mediaGallery": {
    "_items": [...]
  }
}
```

**Note:** The component includes backward compatibility support. Existing configurations with `_items` at the root level will continue to work. However, new content created in the Adapt Authoring Tool will use the new structure automatically.

For existing content, you can optionally update to the new structure for consistency, but it is not required.

## Links

- [GitHub Repository](https://github.com/cgkineo/adapt-mediaGallery)
- [Issues](https://github.com/cgkineo/adapt-mediaGallery/issues)
- [Adapt Learning Community](https://community.adaptlearning.org/)
- [Adapt Framework](https://github.com/adaptlearning/adapt_framework)
