/*
    Systematically search through Discord comments to find unformatted Code.

    * Look for lines ending in ;
    * Look for lines ending in )
    * Look for lines ending in { or }
    * If found, Locate the first Code Block Line
    * If found, Locate the last Code Block Line
    * RePost the message surrounded by ```csharp ```


    EXAMPLE

    ```csharp
    using UnityEngine;

    /// <summary>
    /// Class for holding Navigation variables. Used for the main game
    /// logic by PlayerNavigate to
    /// </summary>
    public class ChangeDirection
    {
        /// <summary>   The angle by which we should rotate. </summary>
        public float newAngle;
        /// <summary>   The time at which we should change direction.</summary>
        public float changeTime;

        public ChangeDirection(float _newAngle, float _changeTime)
        {
            this.newAngle = _newAngle;
            this.changeTime = _changeTime;
        }
    }
    ```
*/

// Import the discord.js module
const Discord = require('discord.js');

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// Guess this was for name and whatnot
const Confax = require('../bot.js')

// This is the bot
const bot = Confax.bot

// Prob dont need config
const config = Confax.config

var isFormatted = false;
var totalLinesOfCode = 0;    
var lines = [];
var codeLines = [];

// Create an event listener for messages to parse
client.on('message', message => {
  // If the message is "ping"
   
    
    this.lines = message.content.split('\n')
    
    this.checkMessageForCode(lines);
    
    if(this.isBadCode && !this.isFormatted){
        var firstLine = Math.min(...this.codeLines);
        var lastLine = Math.max(...this.codeLines);
        
        this.lines.splice(firstLine, 0, '```\n');
        this.lines.splice(lastLine, 0, '\n```\n');
        message = this.lines;
        message.channel.send(message); # idk abou this really.
    }
        
    if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

function checkMessageForCode(inputLines){
    for(var i = 0; i < inputLines.length; i++){
        var line = inputLines[i].replace('\s','');
        if(line.search('```') >= 0){
            this.isFormatted = true;
            return;
        }
        else{
            checkLastCharacter(i, line, ';')
            checkLastCharacter(i, line, '{')
            checkLastCharacter(i, line, '}')
            checkLastCharacter(i, line, ')')
        }
    }
}

function checkLastCharacter(index, inLine, inChar){
    if(inLine.charAt(inLine.length-1).valueOf() == inChar.valueOf()){
        this.codeLines.push(index);
        this.totalLinesOfCode += 1;
    }    
}







