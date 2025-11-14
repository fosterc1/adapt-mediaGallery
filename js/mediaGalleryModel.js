import ComponentModel from 'core/js/models/componentModel';

class MediaGalleryModel extends ComponentModel {

  init() {
    // Support both old format (_items at root) and new format (_mediaGallery._items)
    const mediaGallery = this.get('_mediaGallery') || { _items: this.get('_items') };
    const items = mediaGallery._items;
    
    // Store _mediaGallery wrapper for consistent access
    if (!this.get('_mediaGallery')) {
      this.set('_mediaGallery', mediaGallery);
    }
    
    this.set({
      _media: items[0]._media,
      _originalTranscript: this.get('_transcript')
    });
  }

}

export default MediaGalleryModel;
