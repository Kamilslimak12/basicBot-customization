(function () {
    // Dzieki za pomoc Wumekk. Jak cos bede chcial to Ci oddam dostep.
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

        bot.commands.opornyCommand = {
            command: 'oporny',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Poradnik do pluga w wersji dla opornych http://i.imgur.com/IG95LvA.jpg");
                }
            }
        };
        
        bot.commands.kolejnaKomenda = { //ogólnie musi być bot.commands.jakasunikalnanazwa = {
            command: 'wumekk',  //twoja nazwa komendy, bez !
            rank: 'user', //poziom użytkownika do jej odpalenia
            type: 'exact', //czy komenda może być wywolywana z argumentami (start with) czy bez (exact), raczej zostaw jak jest
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0); //nie odpala komendy jesli jest argument, a wybrano ze nie
                if (!bot.commands.executable(this.rank, chat)) return void (0); //nie odpala komendy jesli uzytkownik nie ma odpowiedniej rangi
                else {
                	//kod jaki bot wykonuje, dowolny JS, korzystaj z front-end API plugdj
                    API.sendChat("/me @Wumekk jest miloscia, @Wumekk jest zyciem <3"); //wysyla wiadomosc
                    API.sendChat("");
                    API.moderateMuteUser(API.getUserByName(chat.un).id, 1, API.MUTE.SHORT);
                }
            }
        };

	//i tyle :v
	
	
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "DTVbot",
        language: "string",
        chatLink: "https://rawgit.com/klawisz1313/basicBot-customization/master/lang/en.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: false,
        smartSkip: false,
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
        commandCooldown: 5,
        usercommandsEnabled: false,
        skipPosition: 3,
        skipReasons: [
            ["theme", "Utwór nie pasuje do temtyki pokoju. "],
            ["op", "Utwór znajduje się na liście OverPlayed. "],
            ["history", "Utwór znajduje się w historii. "],
            ["mix", "Utwór sprzeczny z zasadami społeczności. "],
            ["sound", "Utwór słabej jakości, lub nie jest to piosenka. "],
            ["nsfw", "NSFW. Nie wiesz co NSFW? To sobie poszukaj w google. "],
            ["unavailable", "Utwór niedostępny dla części użytkowników. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 18,
        motd: "Poradnik do pluga w wersji dla opornych http://i.imgur.com/IG95LvA.jpg",
        filterChat: false,
        etaRestriction: true,
        welcome: false,
        opLink: null,
        rulesLink: "http://justpaste.it/m4co" ,
        themeLink: null,
        fbLink: "https://www.facebook.com/DisStream" ,
        youtubeLink: "https://www.youtube.com/user/DisStream" ,
        website: "http://www.disstream.tv/",
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
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);
