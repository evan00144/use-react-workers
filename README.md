<h1 align="center">
  useWebWorker: Reacts hooks for Web Workers
</h1>

## 🎨 Features

- Run expensive function **without blocking UI**
- Returns **Promise** instead of event-messages
- Strongly Typed
- Garbage collector web worker instance
- Timeout, Remote Deps, terminate

## 💻 [Installation](https://www.npmjs.com/package/useWebWorker)

```bash
# Yarn
yarn add useWebWorker

# npm
npm install useWebWorker
```

## Limitations

Web Workers have built in limitations. Before using this [hook](https://www.npmjs.com/package/useWebWorker), I HIGHLY recommend you to read the [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) documentation.

## 🔨 Import

There are currently two hooks in the package depending on your use-case. Either:

- useWorkerFunc
- useWebWorker

One returns the function so you can call the Web Worker on your own, and the other
provides the value your return.

```jsx
import { useWebWorker, useWorkerFunc } from 'useWebWorker';
```

## 🎬 Usage

```tsx
import React from 'react';
import { useWorkerFunc } from 'useWebWorker';

// Heavy compute function
function fibonacci(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const MyCoolComponent = () => {
  const [fibWorker] = useWorkerFunc(fibonacci);

  const handleClick = async () => {
    const result = await fibWorker(45); // Will not block the main thread
    console.log(result);
  };

  return (
    <button type="button" onClick={runSort}>
      Run Fibonacci
    </button>
  );
};
```

OR

```tsx
import React from 'react';
import { useWebWorker } from 'useWebWorker';

// Heavy compute function
function fibonacci(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const MyCoolComponent = () => {
  const [result] = useWebWorker(fibonacci, 45); // Will not block the main thread

  return <h1>{result ? `Fibonacci of 45: ${result}` : 'Calculating'}</h1>;
};
```

## 🖼 Live Demo

<img alt="useWebWorker demo" src="https://user-images.githubusercontent.com/980844/82120716-70151e00-9788-11ea-8f8d-07b06a13dde2.gif" />

## 🐾 Examples

[![Edit white-glitter-icji4](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/white-glitter-icji4?fontsize=14&hidenavigation=1&theme=dark)

More examples: https://github.com/jpwallace22/useWebWorker/tree/develop/example

## 🔧 Roadmap

- [x] Kill Web Worker
- [x] Reactive web worker status
- [x] Add timeout option
- [x] Import and use remote script inside `useWebWorker` function
- [x] support [Transferable Objects](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects)
- [ ] Import and use local script inside function
- [ ] Jest Testing suite
- [ ] Node env support

## 🧐 Motivation

Setting up Web workers isn't hard, but there is too much boilerplate and the syntax is annoying (in my opinion).
This is a great package if you just want to offload some heavy computation to a web worker
without having to go through the song and dance.

## 🌏 Contribute? Bug? New Feature?

The library is experimental so if you find a **bug** or would like to request a new **feature**, open an [issue](https://github.com/jpwallace22/useWebWorker/issues/new)

## 💡 Similar Projects

- [useWorker](https://github.com/alewin/useWorker)
  - This package is heavily influenced by this. So please, take some time to give it a star.

## 💻 Maintainers

- [@jpwallace22](https://github.com/jpwallace22)

## 💻 Contributors

_How to contribute?_

Read [CONTRIBUTE.md](docs/CONTRIBUTE.md)

## 📜 License

[MIT](https://github.com/jpwallace22/useWebWorker/LICENSE)
