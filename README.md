# ext-tabs-api

[![npm version](https://img.shields.io/npm/v/@theluckystrike/ext-tabs-api)](https://npmjs.com/package/@theluckystrike/ext-tabs-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://github.com/theluckystrike/ext-tabs-api/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/ext-tabs-api/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/ext-tabs-api?style=social)](https://github.com/theluckystrike/ext-tabs-api)

> Enhanced Chrome tabs API with modern features and better TypeScript support.

Part of the [Zovo](https://zovo.one) family of privacy-first Chrome extensions and developer tools.

## Overview

`ext-tabs-api` is a comprehensive TypeScript wrapper around Chrome's tabs API, providing enhanced functionality, better type safety, and modern async/await patterns for extension development.

## Features

- ✅ **Promise-based API** - Modern async/await syntax
- ✅ **TypeScript Support** - Fully typed for better developer experience
- ✅ **Enhanced Methods** - Additional utility methods beyond Chrome API
- ✅ **MV3 Compatible** - Works with Manifest V3 extensions
- ✅ **Event Handling** - Improved event management
- ✅ **Privacy-First** - No data collection, all local

## Installation

### From npm

```bash
npm install @theluckystrike/ext-tabs-api
```

### From Source

```bash
# Clone the repository
git clone https://github.com/theluckystrike/ext-tabs-api.git
cd ext-tabs-api

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Querying Tabs

```typescript
import { queryTabs, getTab, createTab, updateTab } from '@theluckystrike/ext-tabs-api';

// Query all tabs in current window
const tabs = await queryTabs({ currentWindow: true });

// Get a specific tab
const tab = await getTab(tabId);

// Create a new tab
const newTab = await createTab({ url: 'https://example.com' });

// Update a tab
await updateTab(tabId, { pinned: true });
```

### Tab Operations

```typescript
import { activateTab, reloadTab, duplicateTab, moveTab } from '@theluckystrike/ext-tabs-api';

// Activate a tab
await activateTab(tabId);

// Reload a tab
await reloadTab(tabId);

// Duplicate a tab
const newTab = await duplicateTab(tabId);

// Move a tab to a new window
await moveTab(tabId, { windowId: newWindowId });
```

### Working with Tab Groups

```typescript
import { groupTabs, ungroupTab, getTabGroup } from '@theluckystrike/ext-tabs-api';

// Group tabs
const groupId = await groupTabs([tabId1, tabId2], { title: 'My Group' });

// Ungroup a tab
await ungroupTab(tabId);

// Get tab group info
const group = await getTabGroup(groupId);
```

## API Reference

### Functions

| Function | Description |
|----------|-------------|
| `queryTabs(query)` | Query tabs with filters |
| `getTab(tabId)` | Get a specific tab |
| `createTab(props)` | Create a new tab |
| `updateTab(tabId, props)` | Update tab properties |
| `activateTab(tabId)` | Activate a tab |
| `reloadTab(tabId)` | Reload a tab |
| `duplicateTab(tabId)` | Duplicate a tab |
| `moveTab(tabId, moveProps)` | Move a tab |
| `groupTabs(tabIds, props)` | Group tabs together |

## Related Packages

This package is part of the Zovo extension tabs ecosystem:

- [ext-tab-groups-api](https://github.com/theluckystrike/ext-tab-groups-advanced) - Tab groups API
- [ext-tab-stats](https://github.com/theluckystrike/ext-tab-stats) - Tab statistics
- [chrome-tabs-api](https://github.com/theluckystrike/chrome-tabs-api) - Chrome tabs utilities
- [chrome-tab-groups-advanced](https://github.com/theluckystrike/chrome-tab-groups-api) - Advanced tab groups

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/tabs-improvement`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/tabs-improvement`
7. **Submit** a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/theluckystrike/ext-tabs-api.git
cd ext-tabs-api

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [zovo-extension-template](https://github.com/theluckystrike/zovo-extension-template) - Boilerplate for building privacy-first Chrome extensions
- [zovo-types-webext](https://github.com/theluckystrike/zovo-types-webext) - Comprehensive TypeScript type definitions for browser extensions
- [zovo-permissions-scanner](https://github.com/theluckystrike/zovo-permissions-scanner) - Privacy scanner for Chrome extensions
- [zovo-indexer](https://github.com/theluckystrike/zovo-indexer) - Indexing service for Zovo extensions
- [zovo-tab-suspender-public](https://github.com/theluckystrike/zovo-tab-suspender-public) - Memory-saving tab suspenders

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT - [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
