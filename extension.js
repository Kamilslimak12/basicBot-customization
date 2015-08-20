(function() {
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "WorstUdyrDE";

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
        
        //Additional spam words
        var spamWords = ['zwis', 'jebać zwisa', 'jebać Dissa', 'jebać Disa', 'skip', 'skip pls', 'skip to gówno', 'Suku jest spoko'];
        for (var i = 0; i < spamWords.length; i++) {
            bot.chatUtilities.spam.push(spamWords[i]);
        }
        // ^to jest coś zjebane jednak 
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
        function tsendChat(msg) {
            API.sendChat(msg);
        }

        bot.commands._nightmode = {
            command: 'nightmode',
            rank: 'mod',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    bot.settings.timeGuard = !bot.settings.timeGuard;
                    bot.settings.blacklistEnabled = !bot.settings.blacklistEnabled;
                    bot.settings.historySkip = !bot.settings.historySkip;
                    var tempstr = "TimeGuard ustawiono na: " + bot.settings.timeGuard + ', Blacklist: ' + bot.settings.blacklistEnabled + ', HistorySkip: ' + bot.settings.historySkip + '. Dziękuję, dobranoc (albo dzień dobry, nie chciało nam się robić drugiej komendy).';
                    API.sendChat(tempstr);
                }
            }
        };
  
        bot.commands.rammusmode = {
            command: 'rammusmode',  
            rank: 'bouncer', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me This chat is now in Rammus mode, type :nb3ok: to continue.");
                }
            }
        };



        bot.commands.opornyCommand = {
            command: 'oporny', //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    API.sendChat("/me Poradnik do pluga w wersji dla opornych http://i.imgur.com/IG95LvA.jpg");
                }
            }
        };

        bot.commands.emotikonyCommand = {
            command: 'emoty', //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    API.sendChat("/me Emotikony jakie uzyskujemy z RCS: https://rcs.radiant.dj/emotes");
                }
            }
        };

        bot.commands.kolejnaKomenda = { //ogólnie musi być bot.commands.jakasunikalnanazwa = {
            command: 'wumekk', //twoja nazwa komendy, bez !
            rank: 'user', //poziom użytkownika do jej odpalenia
            type: 'exact', //czy komenda może być wywolywana z argumentami (start with) czy bez (exact), raczej zostaw jak jest
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); //nie odpala komendy jesli jest argument, a wybrano ze nie
                if (!bot.commands.executable(this.rank, chat)) return void(0); //nie odpala komendy jesli uzytkownik nie ma odpowiedniej rangi
                else {
                    //kod jaki bot wykonuje, dowolny JS, korzystaj z front-end API plugdj
                    API.sendChat("/me @Wumekk jest miloscia, @Wumekk jest zyciem <3"); //wysyla wiadomosc
                }
            }
        };
        bot.commands.komendywadafukKomenda = { //ogólnie musi być bot.commands.jakasunikalnanazwa = {
            command: 'komendy', //twoja nazwa komendy, bez !
            rank: 'user', //poziom użytkownika do jej odpalenia
            type: 'exact', //czy komenda może być wywolywana z argumentami (start with) czy bez (exact), raczej zostaw jak jest
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); //nie odpala komendy jesli jest argument, a wybrano ze nie
                if (!bot.commands.executable(this.rank, chat)) return void(0); //nie odpala komendy jesli uzytkownik nie ma odpowiedniej rangi
                else {
                    //kod jaki bot wykonuje, dowolny JS, korzystaj z front-end API plugdj
                    API.sendChat("/me Lista komend (ta lepsza lista): http://git.io/vO1Gx"); //wysyla wiadomosc
                }
            }
        };


        bot.commands.RCSKomenda = { //ogólnie musi być bot.commands.jakasunikalnanazwa = {
            command: 'instalacja', //twoja nazwa komendy, bez !
            rank: 'user', //poziom użytkownika do jej odpalenia
            type: 'exact', //czy komenda może być wywolywana z argumentami (start with) czy bez (exact), raczej zostaw jak jest
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); //nie odpala komendy jesli jest argument, a wybrano ze nie
                if (!bot.commands.executable(this.rank, chat)) return void(0); //nie odpala komendy jesli uzytkownik nie ma odpowiedniej rangi
                else {
                    //kod jaki bot wykonuje, dowolny JS, korzystaj z front-end API plugdj
                    API.sendChat("/me Poradnik przedstawiający jak zainstalować RCS na przykładzie Mozilli. W przypadku innych przeglądarek (prócz Google Chrome, na które istnieje oficjalne rozszerzenie) postępuje się analogicznie. http://i.imgur.com/2x79L18.gif"); //wysyla wiadomosc
                }
            }
        };

        bot.commands._ban = {
            command: 'permaban',
            rank: 'mod',
            type: 'startsWith',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    var msg = chat.message;
                    if (msg.length === cmd.length) return API.sendChat(subChat(bot.chat.nouserspecified, {
                        name: chat.un
                    }));
                    var name = msg.substr(cmd.length + 2);
                    var user = bot.userUtilities.lookupUserName(name);
                    if (typeof user === 'boolean') return API.sendChat(subChat(basicBot.chat.invaliduserspecified, {
                        name: chat.un
                    }));
                    API.moderateBanUser(user.id, 1, API.BAN.PERMA);
                }
            }
        };

        bot.commands.duelCommand = {
            command: 'hlep', //The command to be called. With the standard command literal this would be: !bacon
            rank: 'bouncer', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    API.sendChat("/me @Duelmasters ma raka.");
                }
            }
        };


        //i tyle :v
  var deletedWords = ['zwis', 'Sukuyomi jest spoko', 'ty kurwo', 'jebać', 'jebac', 'skip', 'zwisa', 'fuck you', 'http://pornhub.com', 'http://redtube.com', 'skip', 'pomińcie', 'brbrbrbrbr', 'kkkkkk', 'pomincie', 'przewińcie', 'przewincie', 'przewiń', 'przewin', 'agor.io', 'http://agor.io', 'www.agor.io', 'https://agor.io', 'pomiń', 'pomin', 'to gówno', 'to gowno', 'to guwno', 'śmieć', 'smiec', 'śmiec', 'smieć'];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < deletedWords.length; i++) {
                if (data.message.toLowerCase().indexOf(deletedWords[i]) > -1) {
                    $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid });
                    break;
                };
            }
        });

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch


    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "DTVbot",
        language: "string",
        chatLink: "https://rawgit.com/klawisz1313/basicBot-customization/master/lang/en.json",
        scriptLink: "https://rawgit.com/klawisz1313/basicBot-customization/master/extension.js",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: false,
        smartSkip: false,
        cmdDeletion: true,
        maximumAfk: 60,
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
            ["meh", "Utwór otrzymał zbyt dużą ilość mehów. "],
            ["history", "Utwór znajduje się w historii. "],
            ["rules", "Utwór sprzeczny z zasadami społeczności. "],
            ["sound", "Utwór słabej jakości, lub nie jest to piosenka. "],
            ["nsfw", "NSFW. Wygooglujesz sobie co to. "],
            ["unavailable", "Utwór niedostępny dla części użytkowników. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 10,
        motd: "Trzy szybkie poradniki jak rozwiązać problem z niedziałającym plugiem: Po pierwsze zmiana DNS na te od googla http://bit.ly/1K17w1m Jak nie pomoze: http://bit.ly/1M2wWjL http://bit.ly/1KNJkoQ",
        filterChat: false,
        etaRestriction: true,
        welcome: false,
        opLink: "http://justpaste.it/mq3j",
        rulesLink: "http://justpaste.it/m4co",
        themeLink: null,
        fbLink: "https://www.facebook.com/DisStream",
        youtubeLink: "https://www.youtube.com/user/DisStream",
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
