# ext-tabs-api

[![npm version](https://img.shields.io/npm/v/@theluckystrike/ext-tabs-api)](https://npmjs.com/package/@theluckystrike/ext-tabs-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://github.com/theluckystrike/ext-tabs-api/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/ext-tabs-api/actions)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/ext-tabs-api?style=social)](https://github.com/theluckystrike/ext-tabs-api)

A TypeScript wrapper library for Chrome extension tab operations, providing a simplified interface with better type safety and modern async patterns.

## Installation

```bash
npm install @theluckystrike/ext-tabs-api
```

## Usage

```typescript
import { createWrapper } from '@theluckystrike/ext-tabs-api';

const api = createWrapper({ debug: true });
await api.initialize();
```

## API REFERENCE

### Options

Configuration options for the API wrapper.

```typescript
interface Options {
  debug?: boolean;
}
```

### APIWrapper

The main wrapper class for Chrome Extension Tab APIs.

```typescript
const wrapper = new APIWrapper({ debug: true });
await wrapper.initialize();
```

### createWrapper

Factory function to create a new APIWrapper instance.

```typescript
const api = createWrapper({ debug: false });
await api.initialize();
```

## DEVELOPMENT

Clone and setup:

```bash
git clone https://github.com/theluckystrike/ext-tabs-api.git
cd ext-tabs-api
npm install
```

Run tests:

```bash
npm test
```

Build:

```npm run build```

## CONTRIBUTING

Contributions are welcome. Please read the CONTRIBUTING.md file for guidelines.

## RELATED PACKAGES

This package is part of the Zovo developer tools ecosystem:

- ext-tab-groups-api - Tab groups API
- ext-tab-stats - Tab statistics
- chrome-tabs-api - Chrome tabs utilities

## ABOUT

ext-tabs-api is maintained by theluckystrike and is part of the Zovo family of privacy-first Chrome extensions and developer tools.

Visit [zovo.one](https://zovo.one) for more information.

## LICENSE

MIT License - Copyright (c) 2025 theluckystrike
