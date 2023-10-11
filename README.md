# automation-test-with-submodule-typescript-sdk

SDKs (no submodules) to test automation workflows.

[![npm](https://img.shields.io/badge/npm-v1.0.4-blue)](https://www.npmjs.com/package/automation-test-with-submodule-typescript-sdk/v/1.0.4)
[![GitHub last commit](https://img.shields.io/github/last-commit/eddiechayes/automation-test/tree/main/typescript.svg)](https://github.com/eddiechayes/automation-test/tree/main/typescript/commits)

## Table of Contents

<!-- toc -->

- [Installing](#installing)
  * [npm](#npm)
  * [yarn](#yarn)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`automationtestwithsubmodule.greetings.hello`](#automationtestwithsubmodulegreetingshello)

<!-- tocstop -->

## Installing

### npm
```
npm install automation-test-with-submodule-typescript-sdk --save
```

### yarn
```
yarn add automation-test-with-submodule-typescript-sdk
```

## Getting Started

```typescript
import { AutomationTestWithSubmodule } from "automation-test-with-submodule-typescript-sdk";

const automationtestwithsubmodule = new AutomationTestWithSubmodule({
  // Defining the base path is optional and defaults to http://google.com
  // basePath: "http://google.com",
  apiKey: "API_KEY",
});

const helloResponse = await automationtestwithsubmodule.greetings.hello();

console.log(helloResponse);
```

## Reference


### `automationtestwithsubmodule.greetings.hello`

Get a simple greeting!!!

#### 🛠️ Usage

```typescript
const helloResponse = await automationtestwithsubmodule.greetings.hello();
```

#### 🔄 Return

[HelloResponse](./models/hello-response.ts)

#### 🌐 Endpoint

`/hello` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
