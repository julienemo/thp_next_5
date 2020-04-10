### Project: My first mission

2020/04/10 Julie Kwok

* * *
To test the project, go [here]()

To manipulate code locally, please download the `project` folder

`test.js` contains tests of methods about which I read during the day course.

* * *
Page behaviour

1. On landing, see an input, a button, and multiple video titles
   
2. type anything in the input box and press `submit` or `enter. A prechecked box will appear with below the input, with the exact wording of input. Any article that has a tag that matches this word will appear. If no video article matches, nothing will be shown.

3. Without refreshing the page, any submitted input will generate a similar pre-checked box. Videos having at least tag that matches at least one keyword will be shown. Keys words that shown case sensitive and with special chars, but they are registered in lower case without any special char. 'JAVa' and 'jàavA' are considered identical. When identical keywords are filled, the browser console will warn. The second keyword won't be added.

4. when typing no less than 3 letters, input will suggest keywords. Any keyword containing the input, any keyword in the same category of the word containing the input, less than any keyword already with checkbox, will appear in the suggestion