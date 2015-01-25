Angular Jedi School
===================

Hands on project for the angular jedi school presentation.

##v0

This is a simple static website built on the [Bootstrap](http://getbootstrap.com/) using their starter template. You can run it either directly from the filesystem or by running a simple web server to serve the static files (***recommended***).

If you are on a Windows machine, a simple website to serve static files can be set up in IIS or using a static web server like [Fenix](http://fenixwebserver.com/) or by running the Python web server (SimpleHttpServer for 2.x or http.server for 3.x) if you have Python installed. On a Unix based system (MAC or Linux), you can run [nginx](http://nginx.com/) server or a Python http server.

###Your mission

***Add angular.js and demonstrate a simple data driven page.***

##v1

Steps:

1.	Download the [AngularJS — Superheroic JavaScript MVW Framework](https://angularjs.org/) javascript file
2.	Add it to the list of scripts.
3.	Add the angular module.
4.	Define the controller on the module, and add $scope as a dependency.
5.	Define a property on the $scope, and bind to it in the HTML.

###Making HTTP calls

Angular provides the `$http` service, which can be used to make calls to HTTP endpoints. Add this as a dependency to the controller and mae the `get` call to the HTTP endpoint. This returns a promise, which like a callback, returns the data or the error from the HTTP call. Assign this to the scope and bind it to an HTML element.
