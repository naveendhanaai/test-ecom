# Product Image Sequence Directory

Place your pre-rendered 3D image frames in this directory.

### Naming Convention
By default, the image preloader looks for files named:
```
cream_0001.webp
cream_0002.webp
cream_0003.webp
...
cream_0120.webp
```

### Configuration
If your frames use a different prefix, format, or total count, adjust the configuration constants in:
`app/components/ProductScrollCanvas.tsx`

```typescript
const TOTAL_FRAMES = 120; // Set to your frame count (e.g. 180, 220)
const FRAME_PREFIX = "cream";
const FRAME_DIRECTORY = "/sequence";
const BG_COLOR = "#050505";
```

### Automatic Fallback Engine
If no image files are placed in this folder yet, the application automatically activates its procedural 3D physical engine to simulate the exact opening, internal reveal, exploded view, and reassembly sequence so the website remains 100% functional and interactive.
