# @peter_marklund/json

An npm package that provides a convenient way to work with JSON using JavaScript in the terminal.

## TODO

* Use stable/sorted JSON stringify

## Installation

```sh
npm install @peter_marklund/json -g
```

## Usage

```sh
echo '{"foo": "1"}' | json .foo
```

## Running the Tests

```sh
npm install
npm link
npm test
```

## Publishing a new Version

```sh
npm login
npm publish --access public
```

# Prior Art

* [trentm/json](https://github.com/trentm/json) - nice library with [very good documentation](https://trentm.com/json/)
