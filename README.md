# Link to Git Pages 
https://tviglesgoom.github.io/JokeFinder/

# Joke Finder

In this app you can get jokes provided by [Chuck Norris Api](https://api.chucknorris.io/), and store your favourite

## Getting Started

### Using running app

To use this app you can click [here](https://tviglesgoom.github.io/JokeFinder/). First choose a type of searching method,
if you chose method **From categories**, you must choose the category from the list, if your choice is **Search** you 
will be able to ask jokes by a query. Then just click a **Get a joke** button.
Next type of joke will be return depending on a get methods:
* **Random** - random joke
* **From categories** - random joke, but with a set category
* **Search** - first **50** jokes, that contain your query  

Now if you liked a joke you can **like** it by clicking on a heart button. To **unlike** a joke, you may just click filled heart either in a search section or in a favourite section.



Your favourite jokes will be stored in right part of your screen. If you are using display 1440px+ it will be visible all the time, but only if you have at least one joke in it.
If you are using screens with lower width, first you must click on a **burger** button to see it. Again, this button will not be able for you, if you have no jokes yet.

### Using app on your local machine

Clone this repository. Install the dependencies. Then just type in your cmd **npm start**.

### Prerequisites

* git
* node.js


### Installing

```
git clone https://github.com/TViglesGoom/JokeFinder.git
npm i
npm start
```

## Built With

* [@material-ui/core](https://www.npmjs.com/package/@material-ui/core/) - React components
* [@types/react-transition-group](https://www.npmjs.com/package/@types/react-transition-group/) - This package contains type definitions for react-transition-group
* [axios](https://www.npmjs.com/package/axios/) - Promise based HTTP client for the browser and node.js
* [react](https://www.npmjs.com/package/react/) - A JavaScript library for creating user interfaces
* [react-dom](https://www.npmjs.com/package/react-dom/) - This package serves as the entry point to the DOM and server renderers for React
* [react-icons](https://www.npmjs.com/package/react-icons/) - Icons in React
* [react-notifications](https://www.npmjs.com/package/react-notifications/) - Notifications for React
* [redux](https://www.npmjs.com/package/redux/) - A predictable state container for JavaScript apps
* [react-redux](https://www.npmjs.com/package/react-redux/) - Official React bindings for Redux


## Author

* **Vlad Huz** - *Test Task* - [TViglesGoom](https://github.com/TViglesGoom/)