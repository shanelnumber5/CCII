# GFC MSU Student Success Pathway Builder

Open `index.html` in a browser. The course builder, journey cards, and Mo dialog run locally without a build step. The web fonts and QR image load from external services.

## Where to make updates

| File | What to edit |
| --- | --- |
| `index.html` | Page sections, navigation, journey and flip-card text, category dropdown, and the Mo dialog |
| `course-data.js` | Course records, learning outcomes, workforce language, sample résumé bullets, and reflection prompts |
| `script.js` | Journey and flip-card interactions, course selection, language toggle, and the NACE label audit |
| `styles.css` | Colors, typography, layout, and responsive and print rules |
| `mo-easter-egg.js` | Mo dialog controls and audio playback |
| `images/` and `audio/` | Included Mo artwork and soundtrack |

To add a course, copy a course record in the appropriate category in `course-data.js` and give it a unique key within that category. The builder uses that key as the dropdown label. To add a category, also add an option with the matching key to `degreeSelect` in `index.html`. Keep the `course-data.js` script tag above `script.js`.

Click the Mo logo in the header to open Captain Transferable Skills. The included `audio/mo-theme.mp3` plays when the dialog opens and stops when it closes. The dialog can still open if audio playback is unavailable.
