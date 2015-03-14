## Synopsis

This tutorial series for Angular JS will show how to use the basics of AngularJS. You will learn how to make a simple web page and a simple web application.
AngularJS is an open-source framework in JavaScript. It was created and maintained by Google as an alternative to other JavaScript frameworks to make single-page applications easier.

It is an MVC (Model-View-Controller) framework so a brief understanding of MVC is suggested, but not required, to use this tutorial.
##Angular JS :- 
 HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop. 
##Bower :-
Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json. How you use packages is up to you. Bower provides hooks to facilitate using packages in your tools and workflows. 
##Gulp :- 
By preferring code over configuration, gulp keeps things simple and makes complex tasks manageable.
Using the power of node streams, gulp gives you fast builds that don't write intermediary files to disk.
By enforcing strict plugin guidelines, we ensure that plugins stay simple and work as expected.
Easy to Learn
Using node best practices and maintaining a minimal API surface, your build works exactly as you would imagine.
##Grunt Task runner Taks:- 
In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it through a Gruntfile, a task runner can do most of that mundane work for you—and your team—with basically zero effort.
Saas 
uglify
concate
Watch		

## Course Videos 
coming soon ...
Its demo how to setup Bower Grunt and Angular with Bootstrap using Node package Module 

start with Demo application using Node  & how to install npm Node package Module 

##Installation of Bower & Grunt
**command to install Bower 

cd <proj-dir>
sudo npm install
sudo npm install bower
It will install Bower package using npm into your directory 

##Now follow these steps for basic setup for Frontend application 
:- sudo bower install bootstrap  or if you have bower.json simply run :- sudo bower install
sudo bower install angularjs
if you have bower.json already with you then you can run or you can create bower.json using command 
:- sudo bower init 
:- sudo bower install 
it wll create bower components dir and will kepp all required downloaded components there
Next step installing Grunt 
Now creating package.json Grunt depends on package.json file
cd <proj-dir>
sudo npm init 
npm install grunt --save-dev
sudo npm install -g -grunt-cli
npm install grunt-contrib-concat --save -dev
npm install grunt-contrib-uglify --save -dev
for  more look at http://grunjs.com/ 
## License

