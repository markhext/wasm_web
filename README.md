# WASM WEB

A Sandbox project for exporting functions written in RUST and exported as WASM functions that can be used in a VITE JS / React project.

## Install Rust & WASM Pack

[Install WASM Pack here](https://rustwasm.github.io/wasm-pack/)


## Install RUST on Mac
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Or visit
[https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)


Ensure your are running Node JS version 14 >

## Get Started with React Interface

```
yarn install
yarn dev
```

Go to [http://localhost:5173](http://localhost:5173)

## Get Started Rust

Inside the `wasm/src/lib.rs` directory are the Rust functions. Create a new function and then compile the code:

```
wasm-pack build --target web
```
Files will shipped to the `pkg` directory

## Calling functions from React

In the `src/App.tsx` you can see an example of how the function is imported.

The WASM functions is now available for use on the front-end




