# React Tutorial

Walkthrough building a React app. Similar to Angular's tutorial with checking out of steps.

## To install

### Install dependencies

You must have [npm](https://www.npmjs.org/) installed on your computer.

After node is installed, run this command to install the dependencies:

```sh
npm install
```

### Install gulp

We're using [gulp](http://gulpjs.com/) as our build system. Gulp helps us build and package up our app to get it ready to deploy.

Install gulp with the command:

```sh
npm install gulp -g
```

You can now start the build process via the command:

```sh
gulp
```

This will build our app and start the watch process that will automaticaly rebuild the app when the code changes.

## To use

### Checkout a step

Follow the steps to see how the app is built. Use git to checkout each step:

```sh
git checkout step1
```

Once you're ready to move on, check out the next step.

### Start the server

Finally start a server with the following:

```sh
node server.js
```

Now visit the running app <http://localhost:3000/>. Try opening multiple tabs!

## Steps

#### Step 1

Simple Hello World view using in browser JSX transformer.

#### Step 2

Add gulp build process to pre-compile JSX and serve files out of dist folder.

Then run the build process with the command:

```sh
gulp
```
Note: You will have to restart the server since we now want the files to be served out of dist.

#### Step 3

Add CommentList and CommentForm components.

#### Step 4

Add Comment component and examples of its use.

#### Step 5

Hook up data model.

#### Step 6

Fetching data from the server.

#### Step 7

Abstract call to API object, add auto polling.

#### Step 8

Form for adding new comments.

#### Step 9

Add new comments to CommentList and post to server.

#### Step 10

Optimize - Add new comments to state immediately. Support markdown.

#### Step 11

CommonJS setup

#### Step 12

Testing with Jest
