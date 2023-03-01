<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Empty Stream

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an "empty" [readable stream][readable-stream].



<section class="usage">

## Usage

```javascript
import emptyStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-empty@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory, objectMode } from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-empty@deno/mod.js';
```

<a name="empty-stream"></a>

#### emptyStream( \[options] )

Returns an "empty" [readable stream][readable-stream] (i.e., a [stream][stream] which never streams any values).

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@deno/mod.js';

function log( chunk ) {
    // This function should never be called...
    console.log( chunk.toString() );
}

var stream = emptyStream();
var iStream = inspectStream( log );

stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true
};

var stream = emptyStream( opts );
```

* * *

#### emptyStream.factory( \[options] )

Returns a `function` for creating "empty" [readable streams][readable-stream].

```javascript
var opts = {
    'objectMode': true
};

var createStream = emptyStream.factory( opts );

var stream1 = createStream();
var stream2 = createStream();
// ...
```

The method accepts the same `options` as [`emptyStream()`](#empty-stream).

* * *

#### emptyStream.objectMode()

This method is a convenience function to create "empty" [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@deno/mod.js';

function log( v ) {
    console.log( v );
}

var stream = emptyStream.objectMode();

var opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@deno/mod.js';
import emptyStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-empty@deno/mod.js';

function log( v ) {
    console.log( v.toString() );
}

var opts = {
    'objectMode': true
};
var stream = emptyStream( opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/streams-node/from-constant`][@stdlib/streams/node/from-constant]</span><span class="delimiter">: </span><span class="description">create a readable stream which always streams the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/streams-node-empty.svg
[npm-url]: https://npmjs.org/package/@stdlib/streams-node-empty

[test-image]: https://github.com/stdlib-js/streams-node-empty/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/streams-node-empty/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/streams-node-empty/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/streams-node-empty?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/streams-node-empty.svg
[dependencies-url]: https://david-dm.org/stdlib-js/streams-node-empty/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/streams-node-empty#cli
[cli-url]: https://github.com/stdlib-js/streams-node-empty/tree/cli
[@stdlib/streams-node-empty]: https://github.com/stdlib-js/streams-node-empty/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/streams-node-empty/tree/deno
[umd-url]: https://github.com/stdlib-js/streams-node-empty/tree/umd
[esm-url]: https://github.com/stdlib-js/streams-node-empty/tree/esm
[branches-url]: https://github.com/stdlib-js/streams-node-empty/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/streams-node-empty/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

<!-- <related-links> -->

[@stdlib/streams/node/from-constant]: https://github.com/stdlib-js/streams-node-from-constant/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
