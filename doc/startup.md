# Quick startup
## Introduction and prerequisites
This guide will walk you through the steps required to install and host a Nebuleuse server. This will not cover the integration of a Nebuleuse client to your game or application.  
If you want to build Nebuleuse yourself, you will need to install the [Go language](http://golang.org/) toolchain, version 1.4 or higher.  
Nebuleuse uses **MySQL** as its database so you will need one running with sufficient access rights to create tables.
## Building
Building Nebuleuse is simple: Once you have installed the Go toolchain, just run `go get github.com/Nebuleuse/Nebuleuse` to clone the latest version from Github. Then run `go build` to build the executable. If all goes well, you should now have your Nebuleuse executable ready for use.  
### Building the dashboard
If you made modifications to the administation dashboard, you will need to rebuild it. If you did not, you can download an already built package of it on the [download page](https://github.com/Nebuleuse/Nebuleuse/releases). The dashboard build process requires [Bower](http://bower.io/) for dependency resolving and [Gulp](http://gulpjs.com/) for the actual building, both requiring [Nodejs](https://nodejs.org/) to work.  
Once gulp and bower are installed, position yourself in the **admin** folder and use `bower install` to download dependecies then `gulp build` to create the distributable version of the dashboard. You can then copy the resulting **dist** folder in the desired folder along the Nebuleuse executable and rename it to **admin** (or whatever the DashboardLocation option points at) so it can be located by the server.  
If you'd like to make changes to the dashboard but not have to execute gulp every other second, you can run `gulp` without any command-line argument. This will make gulp stay active and watch for changes made to the files and update the **dist** folder in real time.
## Installing
Before running Nebuleuse for the first time you will need to set up your database. For this, simply import the `nebuleuse.sql` to your database. This will create the necessary tables needed by Nebuleuse.  
Once the database is setup, it's time to run Nebuleuse's installation script. To do that, run `Nebuleuse install` and follow instructions. This will set up the configuration needed to connect to the database and other settings as well. If unsure of the value to input, use the default one by not entering a value.  
The script will then ask you if you want to register a new user. If you want to be able to connect to the dashboard, please do so.
## Running
Congratulations, you have finished installing and configuring Nebuleuse and can now run your own server by executing Nebuleuse. Players can now connect to the address configured and the administation dashboard is available at the address' `/admin/` folder.