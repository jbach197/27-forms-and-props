![cf](http://i.imgur.com/7v5ASc8.png) 27: Reddit Search Engine
===
## Author
Jennifer Bach

## Requirements
* Contains a text input for the user to supply a reddit board to look up
* Contain a number input for the user to limit the number of results to return, the number should be between 0 and 100
* `onSubmit` the form should make a request to reddit 
  * on success it should pass the results to the application state
  * on failure it should add a class to the form called error and turn the form's inputs borders red
* Should inherit all search results through props
* Each list item in the unordered list should contain the following
  * an anchor tag with a href to the topic.url 
    * inside the anchor a heading tag with the title 
    * inside the anchor a p tag with the number of likes

## Languiages and Frameworks Used
Javascript (es6), react, html, scss

## Instructions for Use
* Step 1. Fork and Clone the Repository.
* Step 2. Run npm i to install dependencies
* Step 3. Run npm watch to view the app
* Step 4. You should now be able to visit: `http://localhost:8080/` to view the application
* Step 5. Type in a Subreddit topic, `ie: dogs` and Limit `ie: 5` and click the search button to view results

## Credits
* Worked with Justin Morris
* TAs, Code Fellows staff and google

