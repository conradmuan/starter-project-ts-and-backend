# A Trivial API Backend

A very simple backend. Node modules in auto resolve from the `src/` directory and when built, the `module-alias` aliases `src/` to `dist/`

Defaults to servering the backend on [http://localhost:4000](http://localhost:4000)

## Available Scripts

### `npm run start`

Production-ish start script: compiles typescript to the `dist/` and runs `node dist/index`

### `npm run dev`

Starts `nodemon` to watch the `src/` directory, compiles typescript to the `dist/` directory and runs our the backend app at `dist/index`.

### `npm run build`

Compiles typescript to the `dist/` directory
