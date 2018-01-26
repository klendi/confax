const Confax = require('../bot.js')

Confax.registerCommand('emptyquestion', 'default', (message, bot) => {
  return("1. If you need programming related help, use #programming_help\n" +
         "2. You should ask help for very specific isolated problems. Your \"problem\" is too broad.\n" +
         "Example:```Hey, I have this character controller, and I implemented a \"move\" method" +
         "using the transform from the object, but it doesn't move! I know the code is being run because I'm logging." + 
         "Here is the code: <your super isolated code>```" +
         "3. You should ask, and then wait.")
}, ['question', 'uselessquestion', 'moreinfo'], 'Instructions on how to properly ask questions (in order to receive as much info as possible)', '<!moreinfo>')
