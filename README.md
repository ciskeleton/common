# 🚀 CiSkeleton Common

**Shared front-end assets and utilities for the CiSkeleton (CSK) framework.**

The [`ciskeleton/common`](https://github.com/ciskeleton/common) repository maintains reusable assets shared across the CiSkeleton ecosystem, helping keep common functionality and presentation resources consistent.

## 📦 What's Included

The repository provides shared resources used by CSK applications and components, including:

- **JavaScript** — Common scripts, UI helpers, and browser-side utilities.
- **Stylesheets** — CSS files, shared styling, and design variables.
- **Fonts and icons** — Typography and icon resources used throughout the interface.
- **Images** — Shared visual assets.

The exact contents may evolve as the framework and its components develop.

## 🏗️ Repository Structure

```text
common/
├── .github/
│   └── workflows/ # GitHub Actions workflows
├── src/           # Shared assets and resources
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CITATION.cff
└── README.md
```

The `src/` directory contains the shared resources, while `.github/workflows/` holds the repository's automation.

## 🔧 Role in the CSK Ecosystem

CSK Common complements the framework core and the independently maintained packages and applications built around it.

| Repository | Responsibility |
| :--- | :--- |
| [`core`](https://github.com/ciskeleton/core) | The CiSkeleton framework |
| [`common`](https://github.com/ciskeleton/common) | Shared assets and utilities |
| [`packages`](https://github.com/ciskeleton/packages) | Reusable packages, including modules, plugins, themes, languages, libraries, helpers, and services |
| [`apps`](https://github.com/ciskeleton/apps) | Applications built with CiSkeleton |

Each repository has a distinct responsibility, allowing shared resources, reusable components, and complete applications to evolve independently.

## 🤝 Contributing

Contributions that improve shared assets and utilities are welcome.

Before submitting a change:

- Keep resources reusable and relevant to the CSK ecosystem.
- Avoid introducing unnecessary dependencies.
- Preserve compatibility with the components and applications that consume these resources.
- Include appropriate documentation for new functionality.

Use GitHub Issues to report problems or propose improvements, and submit a pull request with your changes.

## 📄 Licensing

CiSkeleton Common is licensed under the [MIT License](LICENSE.md).

Third-party assets and dependencies remain subject to their respective licenses. Applicable third-party notices are maintained separately and distributed with CSK installations through `system/THIRD_PARTY_NOTICES.txt`.

---

<div align="center">
  <sub>Maintained by <a href="https://github.com/bkader">Kader Bouyakoub</a>, trading as <a href="https://www.ianhub.dz">Ianhub</a>, as part of the <a href="https://github.com/ciskeleton">CiSkeleton</a> ecosystem.</sub>
</div>
