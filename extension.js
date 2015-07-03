(function () {
    
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "klawisz1313";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "DTVbot",
        language: "polish",
        chatLink: "https://github.com/klawisz1313/basicBot-customization/blob/master/lang/en.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 20,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 6,
        autodisable: false,
        commandCooldown: 10,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "Utwór nie pasuje do tematyki pokoju. "],
            ["op", "Utwór jest na liście OP. "],
            ["history", "Utwór jest w historii. "],
            ["mix", "Utwór nizgodny z regulaminem. "],
            ["sound", "Utwór złej jakości/nie gra. "],
            ["unavailable", "Utwór niedostępny. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 60,
        motd: "Zajrzyj na mój stream twitch.tv/disstream ",
        filterChat: true,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: justpaste.it/m4co ,
        themeLink: null,
        fbLink: www.facebook.com/DisStream ,
        youtubeLink: www.youtube.com/user/DisStream ,
        website: disstream.tv,
        intervalMessages: [],
        messageInterval: 45,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/klawisz1313/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/klawisz1313/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/klawisz1313/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/klawisz1313/basicBot/master/basicBot.js", extend);

}).call(this);
