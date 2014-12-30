# React Tutorial

Walkthrough building a React app. Similar to Angular's tutorial with checking out of steps.

## To use

Following the steps to see how the app is built. Use git to checkout a step:

```sh
git checkout step1
```


Then start a server withthe following:

### Node

```sh
npm install
node server.js
```

### Steps

#### Step 1

Simple Hello World view using in browser JSX transformer.

#### Step 2

Add gulp build process to pre-compile JSX and serve files out of dist folder.

Install gulp with the command:
```
npm install gulp -g
```
Then run the build process with the command:
```
gulp
```
Note: You may have to restart the server since we now want the files to be served out of dist.

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

And visit <http://localhost:3000/>. Try opening multiple tabs!
