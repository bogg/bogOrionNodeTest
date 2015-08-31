# Orion (4.0)
A minimal, single-user deployment of [Eclipse Orion](http://www.eclipse.org/orion/). Orion provides an extensible IDE that runs in your browser. It's particularly good for writing Javascript.

## For JazzHub and BlueMix

* You should be able to __code__ this directly from the JazzHub project page and Launch it.
* **Warning:** Any files you create on the remote side will be deleted if your BlueMix instance is restarted.
* You can, however write a small program and run it right away from within Orionode.
* **Or** you can change the __orion.conf__ workspace property to point to **/** and have a look around your instance file system in Orion
* __Debugging__ does not work, the port is not exposed at BlueMix.


## Features
* Basic file management
* Source code editing
* Install plugins to customize your environment
* Shell command for launching a node app (type ```help node``` in the Shell page to find out more)
* Shell command for supporting npm
* Client caching for static content
* Gzip
* **Not on this version so you can edit Orionode** Pages are concatenated and minified so they load faster

## Usage
For full instructions, see the [Getting Started guide](http://wiki.eclipse.org/Orion/Node/Getting_started).

### Running the server
1. Run ```npm start orion``` or ```node [node_modules]/orion/server.js```.
2. Go to [localhost:8081](http://localhost:8081) to use Orion. (You can change the port by passing the```-p``` option).

### Using Orion within a larger app
Use ```require('orion')``` to get access to our startServer function, which is suitable for use within a larger [connect](https://github.com/senchalabs/connect/) project:

```
var orion = require('orion');
var connect = require('connect');
var myapp = connect()
    .use(orion({ workspaceDir: '.myworkspace' }))
/* .use( additional handlers ) */
```

### Running the tests
We use [Mocha](https://github.com/visionmedia/mocha) for our tests. Run ```npm test``` or ```mocha```.

## License
Dual-licensed under the [Eclipse Public License v1.0](http://www.eclipse.org/legal/epl-v10.html) and the [Eclipse Distribution License v1.0](http://www.eclipse.org/org/documents/edl-v10.html).
