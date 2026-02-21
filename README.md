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

# Colorized pretty printing is the default
cat test/input/array.json | json           
# [
#   {
#     "id": 1,
#     "name": "Item 1",
#     "value": 100
#   },
#   {
#     "id": 2,
#     "name": "Item 2",
#     "value": 200
#   },
#   {
#     "id": 3,
#     "name": "Item 3",
#     "value": 300
#   }
# ]

# Without pretty printing (single line):
cat test/input/basic.json | PRETTY=false json
# {"bar":"Hello world","baz":false,"data":[{"id":1,"name":"Item 1","value":100},{"id":2,"name":"Item 2","value":200},{"id":3,"name":"Item 3","value":300}],"foo":1,"nested":{"foo":{"bar":"nested value"}}}

# JSONL output (for an array with one JSON object per line)
cat test/input/array.json | JSONL=true json 
# {"id":1,"name":"Item 1","value":100}
# {"id":2,"name":"Item 2","value":200}
# {"id":3,"name":"Item 3","value":300}

# The json command can take JSONL as input as well
cat test/input/array.jsonl | json

# The json command can also parse JSON data at the end of log lines:
cat test/input/log-with-json.log | json
# [
#   {
#     "_line": "192.168.1.1 - - [21/Feb/2026:10:00:01 +0000] \"GET /api/users HTTP/1.1\" 200 ",
#     "cache": "hit",
#     "duration_ms": 42,
#     "user_id": 1021
#   },
#   {
#     "_line": "192.168.1.2 - - [21/Feb/2026:10:00:03 +0000] \"POST /api/orders HTTP/1.1\" 201 ",
#     "cache": "miss",
#     "duration_ms": 87,
#     "user_id": 4432
#   },
#   ...
# ]
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
