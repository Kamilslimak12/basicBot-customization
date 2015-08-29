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
       
        //Inicjuje sobie zmienne, tak w ramach bezpieczenstwa + przyzwyczajenia z C++, dzieki temu potem nie uzywam var
        //przydatne to szczegolnie jak ktorys raz sie wywoluje podpisanie pod zmienna danych, wtedy nie mozna po raz kolejny
        // pisac var zmienna = (...)
        var _spam = [];
        var deletedWords = [];
        var hnd = [];
        
        //Additional spam words
        
        //tworze dodatkowa zmienna spam, zeby przy usuwaniu slownika moc go zawsze przywrocic latwo
        _spam = ['zwis', 'ty kurwo', 'fuck you', 'http://pornhub.com', 'http://redtube.com', 'skip',
                'pomińcie', 'pomincie', 'przewińcie', 'przewincie', 'przewiń', 'przewin to', 'data:image', 'pomiń',
                'to gówno', 'to gowno', 'to guwno', 'agor', 'HAHAHAHAHAHAHAHAHAHAHA'];
                            
        deletedWords = [];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < deletedWords.length; i++) {
                if (bot.userUtilities.getPermission(chat.uid) >= residentdj) return void(0);
                if (data.message.toLowerCase().indexOf(deletedWords[i]) > -1) {
                    $.ajax({
                        type: 'DELETE',
                        url: '/_/chat/' + data.cid
                    });
                    break;
                }

            }
        });
        var _obrazki = [];
        var autoDeleteImages = [];
        
           _obrazki = ['.jpg', '.gif', '.png', 'Błędne tagi, spróbuj innych.', '[image too big]', '[error]'];
           
           autoDeleteImages = [];
        API.on(API.CHAT, function (data) {
            for (var i = 0; i < autoDeleteImages.length; i++) {
                if (data.message.toLowerCase().indexOf(autoDeleteImages[i]) > -1) {
                    setTimeout(function () { $.ajax({ type: 'DELETE', url: '/_/chat/' + data.cid }) }, 15000);
                };
            }
        });
        
    
        
        //wlaczanie filtru: deletedWords = _spam;
        //wylaczanie filtru: deletedWords = [];
        
        //baw sie dobrze :)
        

        function tsendChat(msg) {
            API.sendChat(msg);
        }

                bot.commands.deletedWordsoff = {
            command: 'nmoff',
            rank: 'mod',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    deletedWords = [];
                    API.sendChat("/me Wyłączono SuperExtraLimitowanąExtendedEdycjęNAZI czatu v69!!!");
                }
            }
        };
        
                        bot.commands.deletedWordson = {
            command: 'nmon',
            rank: 'mod',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    deletedWords = _spam;
                    API.sendChat("/me Włączono SuperExtraLimitowanąExtendedEdycjęNAZI czatu v69!!!");
                }
            }
        };
                        bot.commands.deletedImagesoff = {
            command: 'inmoff',
            rank: 'mod',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    autoDeleteImages = [];
                    API.sendChat("/me Wyłączono SuperExtraLimitowanąExtendedEdycjęNAZI znikania obrazków po 15 sekundach v69!!!");
                }
            }
        };
        
                        bot.commands.deletedImageson = {
            command: 'inmon',
            rank: 'mod',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    autoDeleteImages = _obrazki;
                    API.sendChat("/me Włączono SuperExtraLimitowanąExtendedEdycjęNAZI znikania obrazków po 15 sekundach v69!!!");
                }
            }
        };
        
        
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
                    var tempstr = "TimeGuard ustawiono na: " + bot.settings.timeGuard + ', Blacklist: ' + bot.settings.blacklistEnabled + ', HistorySkip: ' + bot.settings.historySkip + '. Dziękuję, dobranoc.'; //I tak ma zostac bo to kuhwa nightmode. //(albo dzień dobry, mój bóg - Wumekk nie ma czasu żeby zrobić drugą komendę, albo nie jest ona potrzebna).';
                    API.sendChat(tempstr);
                }
            }
        };
  
         bot.commands.komendadoprobraniarcs = { 
            command: 'rcs', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me Polecamy RCS. Rozszerzenie daje Ci możliwość używanie emotikon tastycata, twitcha i innych serwisów, Autojoin który dołącza za Ciebie do kolejki, Autowoot i wiele wiele więcej. Zainstaluj, a przekonasz się sam: https://rcs.radiant.dj");
                }
            }
        };

        bot.commands.opornyCommand = {
            command: 'oporny', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    API.sendChat("/me Poradnik do pluga w wersji dla opornych http://bit.ly/1PDu39i");
                }
            }
        };

        bot.commands.emotikonyCommand = {
            command: 'emoty', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    API.sendChat("/me Emotikony jakie uzyskujemy z RCS: https://rcs.radiant.dj/emotes");
                }
            }
        };
        
        bot.commands.kolejnaKomenda = { 
            command: 'wumekk', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me @Wumekk jest miloscia, @Wumekk jest zyciem <3"); 
                }
            }
        };
        bot.commands.komendywadafukKomenda = { 
            command: 'komendy', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me Lista komend (ta lepsza lista): http://bit.ly/1Kafvh6"); 
                }
            }
        };


        bot.commands.RCSKomenda = { 
            command: 'instalacja', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me Poradnik przedstawiający jak zainstalować RCS na przykładzie Mozilli. W przypadku innych przeglądarek (prócz Google Chrome, na które istnieje oficjalne rozszerzenie) postępuje się analogicznie. http://bit.ly/1Eaipl0"); 
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
        
        bot.commands._cycleCommand = { //pierwsze uruchomienie czasem nie dziala
                command: 'cykl',
                rank: 'mod',
                type: 'exact',
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!bot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        if ($(".dj-cycle")[0] === undefined) $("#room-name").click();
                        hnd = $(".dj-cycle")[0].className.toLowerCase();
                        if (hnd === "dj-cycle option") {
                            console.log("[Cycle] Wykryto \"Wl\", proba wylaczenia.");
                            API.moderateDJCycle(false);
                        }
                        else{
                            if (hnd === "dj-cycle option enabled") {
                                console.log("[Cycle] Wykryto \"Wyl\", proba wlaczenia.");
                                API.moderateDJCycle(true);
                            }
                            else API.sendChat("/me Nieznany status cyklu. Może to wystąpić przy pierwszym uruchamianiu komendy. Spróbuj jej użyć jeszcze raz. Jeśli błąd się powtarza, oznacza to, iż nie komenda działa i tak na razie zostanie.")
                        }
                        API.sendChat("/me @Mycka1337 @Mycka1337, pokaż bicka");
                        hnd = [];
                    }
            }};


        bot.commands.pongCommand = {
            command: 'pong', 
            rank: 'user', 
            type: 'exact', 
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    API.sendChat("/me Ping!");
                }
            }
        };
        
      setInterval(function () {
          API.sendChat('/exportchat');
      }, 1800000);        
        
        
        /*
        * Czysci wszelkie instrukcje z funkcji obslugujacych dane komendy
        * Oprocz tego przy funkcji refreshCommand pozwala odpalic ta funkcje wpisujac jedna z dwoch komend
        * Nie musisz dziekowac, wystarczy ze zaplacisz.
        */
        bot.commands.reloadCommand = bot.commands.killCommand = bot.commands.logoutCommand = [];
        bot.commands.refreshCommand.command = ['refresh', 'reload'];


        // nie umiem zrobić żeby banowalo za "Sukuyomi jest spoko", ale kiedys sie naucze i skonczy sie dzien dziecka Kappa
  

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch


    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "DTVbot",
        language: "Polski",
        chatLink: "https://rawgit.com/WorstUdyrDE/basicBot-customization/master/lang/pl.json",
        scriptLink: "https://rawgit.com/WorstUdyrDE/basicBot-customization/master/extension.js",
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
        motdEnabled: true,
        motdInterval: 30,
        motd: ":warning: Aby w pełni korzystać z możliwości naszego rooma wgraj do swojej przeglądarki internetowej RCS. https://rcs.radiant.dj/",
        filterChat: false,
        etaRestriction: true,
        welcome: false,
        opLink: " :information_source: Zbanowne nuty od teraz znajdują się w zasadach.",
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
    $.getScript("https://rawgit.com/WorstUdyrDE/basicBot-customization/master/DTVbot.js", extend);

}).call(this);
