# Contributing to adapt-mediaGallery

Thank you for your interest in contributing to adapt-mediaGallery! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project follows the [Adapt Learning Community Code of Conduct](https://community.adaptlearning.org/). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/cgkineo/adapt-mediaGallery/issues) to avoid duplicates.

When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Environment details**:
  - Adapt Framework version
  - Browser and version
  - Operating system
  - Device type (desktop/mobile/tablet)
- **Screenshots or video** if applicable
- **Configuration** (example.json excerpt)
- **Console errors** from browser developer tools

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear title** that describes the enhancement
- **Provide detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **Include mockups or examples** if applicable

### Contributing Code

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes
6. Push to your fork
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- Adapt CLI (`npm install -g adapt-cli`)
- Git

### Initial Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/adapt-mediaGallery.git
cd adapt-mediaGallery

# Add upstream remote
git remote add upstream https://github.com/cgkineo/adapt-mediaGallery.git

# Install in an Adapt Framework project
cd /path/to/adapt-framework
adapt install adapt-mediaGallery
```

### Development Workflow

```bash
# Create a feature branch
git checkout -b feature/my-feature

# Make changes and test
adapt build
adapt preview

# Commit changes
git add .
git commit -m "feat: add amazing feature"

# Keep your fork updated
git fetch upstream
git rebase upstream/master

# Push to your fork
git push origin feature/my-feature
```

## Coding Standards

### JavaScript

We follow modern ES6+ JavaScript standards:

```javascript
// Use ES6 imports
import Adapt from 'core/js/adapt';
import ComponentView from 'core/js/views/componentView';

// Use class syntax
class MediaGalleryView extends ComponentView {
  
  // Use arrow functions for callbacks
  onItemClicked = (e) => {
    // Implementation
  }
  
  // Use const/let, not var
  selectItem(index) {
    const itemCfg = this.getItems()[index];
    let isPlaying = false;
  }
}
```

#### Code Style

- **Indentation**: 2 spaces (no tabs)
- **Semicolons**: Use them
- **Quotes**: Single quotes for strings
- **Line length**: Maximum 100 characters
- **Naming conventions**:
  - Classes: `PascalCase`
  - Functions/methods: `camelCase`
  - Constants: `UPPER_SNAKE_CASE`
  - Private methods: prefix with `_`

#### Comments

```javascript
/**
 * Selects a media item and updates the player
 * @param {number} index - The index of the item to select
 */
selectItem(index) {
  // Get the selected item configuration
  const itemCfg = this.getItems()[index];
  
  // Update classes
  this.$('.js-mediagallery-item').removeClass('is-selected');
}
```

### HTML/Handlebars

```handlebars
{{!-- Use semantic HTML --}}
<button 
  class="mediagallery__item js-mediagallery-item" 
  data-index="{{@index}}" 
  aria-label="{{ariaLabel}}"
>
  {{!-- Proper indentation --}}
  {{#if _graphic.src}}
  <img class="mediagallery__item-image" src="{{_graphic.src}}" alt="{{_graphic.alt}}">
  {{/if}}
</button>
```

### CSS/LESS

```less
// Use BEM naming convention
.mediagallery {
  &__item-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  &__item {
    width: calc(~'25% - 1rem');
    
    // Hover states
    &:hover {
      transform: scale(0.95);
    }
    
    // State classes
    &.is-selected {
      border-color: @item-color-selected;
    }
  }
}

// Mobile-first responsive design
@media (max-width: @device-width-small) {
  .mediagallery {
    &__item {
      width: 100%;
    }
  }
}
```

### JSON Schema

```json
{
  "type": "object",
  "properties": {
    "propertyName": {
      "type": "string",
      "title": "Human Readable Title",
      "description": "Clear description of what this property does",
      "default": "sensible-default",
      "_adapt": {
        "translatable": true
      },
      "_backboneForms": {
        "type": "Text"
      }
    }
  }
}
```

## Testing Guidelines

### Browser Testing Matrix

Test your changes in:

**Desktop:**
- Chrome (latest)
- Firefox (latest + ESR)
- Edge (latest)
- Safari (latest)

**Mobile:**
- iOS Safari (iOS 14+)
- Chrome for Android
- Samsung Internet

### Accessibility Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Activate with Enter/Space
   - Test escape key behavior

2. **Screen Readers**
   - Test with NVDA (Windows) or VoiceOver (Mac/iOS)
   - Verify all content is announced
   - Check ARIA labels are meaningful

3. **Color Contrast**
   - Use browser dev tools or contrast checker
   - Ensure 4.5:1 ratio for normal text
   - Ensure 3:1 ratio for large text

### Responsive Testing

Test at these breakpoints:
- 320px (small mobile)
- 520px (mobile)
- 768px (tablet portrait)
- 1024px (tablet landscape)
- 1440px (desktop)

### Device Testing

If possible, test on:
- iPhone (iOS)
- iPad (iPadOS)
- Android phone
- Android tablet
- Windows touchscreen device

### Manual Testing Checklist

- [ ] Component loads without errors
- [ ] All videos play correctly
- [ ] Thumbnails display properly
- [ ] Clicking thumbnails switches videos
- [ ] Captions work (if enabled)
- [ ] Transcripts display correctly
- [ ] Full-screen works (if enabled)
- [ ] Volume controls work
- [ ] Progress bar functions correctly
- [ ] Completion tracking works
- [ ] Component is responsive
- [ ] Touch gestures work on mobile
- [ ] Keyboard navigation works
- [ ] Screen reader announces content
- [ ] RTL layout works (if applicable)

## Submitting Changes

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(gallery): add video preloading option

Add _preloadVideos option to allow preloading the first
video for faster initial playback.

Closes #123
```

```
fix(player): prevent video element from growing on repeated plays

Implemented resetPlayerSize() method following the pattern from
adapt-contrib-media to ensure consistent player dimensions.

Fixes #45
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

Examples:
- `feature/youtube-support`
- `fix/caption-alignment`
- `docs/accessibility-guide`

## Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Run existing tests** to ensure nothing broke
4. **Test across browsers** and devices
5. **Update CHANGELOG.md** with your changes
6. **Check code style** matches our guidelines

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile devices
- [ ] Tested with screen reader
- [ ] Tested keyboard navigation

## Related Issues
Closes #123
Related to #456

## Screenshots
(if applicable)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] CHANGELOG.md updated
- [ ] No console errors or warnings
```

### Review Process

1. **Automated checks** must pass (if configured)
2. **Code review** by maintainer(s)
3. **Testing** by reviewer
4. **Feedback addressed** by contributor
5. **Approval** and merge by maintainer

### After Your PR is Merged

1. Delete your feature branch
2. Update your fork's master branch
3. Celebrate! 🎉

## Development Tips

### Local Testing with Adapt Authoring Tool

```bash
# Create a symbolic link to your development version
cd adapt_authoring/adapt_framework/src/components
ln -s /path/to/your/adapt-mediaGallery adapt-mediaGallery

# Rebuild the authoring tool
cd adapt_authoring
npm run build
```

### Debugging

```javascript
// Add console logs for debugging
console.log('MediaGallery: Item selected', index);

// Use debugger statement
debugger;

// Inspect model data
console.log('Model data:', this.model.toJSON());
```

### Performance Profiling

Use browser developer tools:
1. Open Performance tab
2. Record interaction
3. Analyze results
4. Optimize bottlenecks

## Resources

- [Adapt Framework Wiki](https://github.com/adaptlearning/adapt_framework/wiki)
- [Adapt Component Development Guide](https://github.com/adaptlearning/adapt_framework/wiki/Developers-guide-%E2%80%90-components)
- [MediaElement.js Documentation](http://www.mediaelementjs.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Questions?

- Join the [Adapt Community Forums](https://community.adaptlearning.org/)
- Ask in [GitHub Discussions](https://github.com/cgkineo/adapt-mediaGallery/discussions)
- Tag maintainers in issues

## License

By contributing, you agree that your contributions will be licensed under the GPL-3.0 License.

---

Thank you for contributing to adapt-mediaGallery! Your efforts help make e-learning better for everyone. 🚀
