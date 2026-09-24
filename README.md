# tools

Small static browser tools for working with JSON. No build step: open `index.html` or serve the directory.

- **jzb** — decode/encode JZB (URL-safe base64 of zlib-deflated JSON). Edit either side.
- **b64** — decode/encode base64 text. Formats JSON when Beautify is on, shows anything else as-is.
- **minifier** — beautify/minify JSON in both directions.
- **diffhist** — paste or upload a JSON array of snapshots and step through the diff between each consecutive pair. Supports filtering to diffs that touch a field, reversing order, hiding unchanged values, and converting epoch timestamps in `last*`/`current*`/`created*` fields to ISO dates.
- **mapper** — apply a JS mapping function (e.g. `x => x.user`) to JSON (each element, if it's an array), then filter to comma-separated dotted paths like `user.name, tags.k`.

`test/` is an unlisted scratch page.
