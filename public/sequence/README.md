# Sequence Assets

The production image sequence lives in this folder:

- `frame_001.jpg`
- `frame_002.jpg`
- ...
- `frame_060.jpg`

The default component configuration expects 60 JPG frames at
`/sequence/frame_${String(index + 1).padStart(3, "0")}.jpg`.
