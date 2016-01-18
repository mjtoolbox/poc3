# Proof of Concept 3 (PoC3)
A simple demo web application built with AngularJS, Bootstrap, Grunt, Bower, Jasmine, Karma, and json-server.

## Prerequisite
  * [Node.js](https://nodejs.org/en/)
  * [ConEmu](https://conemu.github.io/) – to have Git option, install ConEmu first.
  * [Git](https://git-scm.com/downloads)
  * [Brackets](http://brackets.io/) or any Editor that you are comfortable with.

## Install
Install JSON server
```bash
$ npm install -g json-server
```
Create a folder named **json-server**, and move to this folder.
Copy db.json (project directory) to the folder above.
Start JSON Server to reflect any change in the db.json. 

```bash
$ json-server --watch -p 9988 db.json
```
By default, it runs on port 3000, but above start script will change the port to 9988 to avoid any port conflict. Without json-server running, this demo application will not load any data.


## Start from scratch
If you want to start a fresh project, here is the steps.

Install Bower

```bash
$ npm install bower
```

Initialize Bower on a new project. [Resource](http://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Bower/Initialize_Bower_on_a_new_Project.html)

```bash
$ bower init
```

Now add dependent packages -  angular, bootstrap, font-awesome, angular-ui-router, angular-resource, angular-mocks
```bash
$ bower install angular -S
```

```bash
$ bower install bootstrap -S
```

```bash
$ bower install font-awesome -S
```

```bash
$ bower install angular-ui-router -S
```

```bash
$ bower install angular-resource -S
```

```bash
$ bower install angular-mocks -S
```

Install Grunt CLI. [Resource](http://gruntjs.com/getting-started)

```bash
$ npm install -g grunt-cli
```
Install Grunt locally

```bash
$ npm install grunt --save-dev
```

Create a Gruntfile.js in your project root directory. Basic file listed below. For a complete file, please copy Gruntfile.js from this project.

```javascript
'use strict';
module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    //Define the configuration for all the tasks
    grunt.initConfig({

    });

    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default', ['build']);
};
```

Create .jsintrc file in your project root directory - configuration for JSHint. For a complete file, please copy Gruntfile.js from this project.

Install Grunt Tasks --save-dev option is to update package.json devDependencies. 
  * JSHint
  * jshint-stylish
  * time-grunt
  * jit-grunt
  
```bash
$ npm install grunt-contrib-jshint jshint-stylish time-grunt jit-grunt --save-dev
```

  * copy, clean: Copying and Clean up Dist folder

```bash
$ npm install grunt-contrib-copy grunt-contrib-clean --save-dev
```

  * useminPrepare task: Looks for block configuration in html, automatically generate configuration information for concat, cssmin, and uglify
  * filerev: revision your file
  * usemin: After concat, cssmin, uglify and filerev are run, this will replace css, JS with single concatenated files  

```bash
$ npm install grunt-contrib-concat grunt-contrib-cssmin grunt-contrib-uglify grunt-filerev grunt-usemin --save-dev
```
  
  * watch, connect and serve: Reflect any changes and publish to http://localhost:9000

```
$ npm install grunt-contrib-watch grunt-contrib-connect --save-dev
```

Install Grunt ng-annotate - automatically add explicit dependency injection to your source code. [Resource](https://www.npmjs.com/package/grunt-ng-annotate)

```bash
$ npm install grunt-ng-annotate --save-dev
```

## Start Grunt

Based on Gruntfile.js, default task is to compile.

```bash
$ grunt
```

To start the Live view

```bash
$ grunt serve
```