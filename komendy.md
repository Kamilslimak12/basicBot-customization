Komendy:
=========

X oznacza liczbę/argument  
Argumenty między ( ) są opcjonalne


Lista została przeze mnie zmieniona. Usunąłem z niej te mniej potrzebne komendy oraz dodałem te które znajdują się w naszej customizacji bota.


Manager
-------

|Komenda | Argument |  Opis |
|:------:|:---------:|:--------------------------------------:|
|!afklimit | X | ustawia maksymalny limi bycia afk |
|!botname | (botname) | zmienia imię bota |
|!bouncer+ | | włącza/wyłącza bouncer+ |
|!skippos | X | przy włączonej opcji lockskip, ustawia pozycję na którą zostanie przeniesiony pomijany DJ |
|!clearchat | | wyczyść czat |
|!cycle | | włącz/wyłącz cykl DJski |
|!cycletimer | X | przy włączonej opcji cycleguard ustawia jak długo może być włączony cykl DJski |
|!locktimer | X | przy włączonej opcji lockguard ustawia jak długo może być zablokowana lista oczekiwania |
|!maxlength | X | przy włączonej opcji timeguard ustawia maksymalną dopuszczalną długość utworów |
|!logout | | wylogowuje bota (a spróbuj mi ktoś tego użyć...) |
|!refresh | | odświeża przeglądarkę na której uruchomiony jest bot |
|!usercmdcd | X | ustaw 'czas odnowienia' komend dla zwykłych użytkowników |
|!usercommands | | włącza/wyłącza komendy dla zwykłych użytkowników |

Bouncer+
--------

|Komenda | Argument |  Opis |
|:------:|:---------:|:--------------------------------------:|
|!add | @user | dodaje użytkownika do listy oczekiwania |
|!afkremoval | | włącz/wyłącz usuwanie afków z listy oczekiwania |
|!autoskip | | automatyczne pomijanie utworu po jego zakończeniu (używać kiedy plug się bugguje i nie robi tego sam) |
|!lock | | blokuje listę oczekiwania |
|!unlock | | odblokuj listę oczekiwania |
|!lockdown | | włącz/wyłącz czat tylko dla administracji |
|!move | @user (X) | przenieś użytkownika w liście oczekiwania na pozycję X, kiedy X nie jest podane przenosi na 1 pozycję |
|!remove | @user | usuń użytkownika z listy oczekiwania |
|!permaban | @user | banuje permanentnie użytkownika
|!nightmode | | Ustawia: TimeGuard: false, Blacklist: false, HistorySkip: false / TimeGuard: true, Blacklist: true, HistorySkip: true.|

Bouncer
-------

|Komenda | Argument |  Opis |
|:------:|:---------:|:--------------------------------------:|
|!active | (X) | pokazuje ile użytkowników czatowało w ciągu ostatnich X minut. Jeżeli X nie jest podane,  pokazuje ile użytkowników czatowało w ciągu ostatnich 60 minut. |
|!afkreset | @user | resetuje czas bycia afk dla użytkownika |
|!afktime | @user | pokaż jak długo użytkownik jest afk |
|!autodisable | | włącz/wyłącz opcję autodisable |
|!ban | @user | banuje użytkownika na 1 dzień |
|!unban | @user | odbanowuje użytkownika |
|!cycleguard | | włącz/wyłącz opcję cycleguard |
|!dclookup / !dc | (@user) | przenieś użytkownika na pozycję, na której się znajdował, zanim się rozłączył |
|!eta | (@user) | pokazuje przwidywalny czas oczekiwania |
|!filter | | włącz/wyłącz filtrowanie czatu |
|!historyskip | | włącz/wyłącz pomijanie utworów znajdujących się w historii |
|!jointime | @user | pokazuje ile czasu dany użytkownik znajduje się w społeczności |
|!kick | (X) | kickuje użytkownika na X minut, domyślnie jest to 15 sekund |
|!kill | | wyłącza bota (a spróbuj mi ktoś tego użyć...) |
|!lockguard | | włącz/wyłącz opcję lockguard |
|!motd | (X)/(message) |kiedy nie ma podanego argumentu, zostaje wysłana wiadomość dnia. X oznacza co ile utworów ma być wysyłana wiadomość. W polu message ustawia się nową wiadomość. |
|!mute | @user (X) | wycisza użytkownika na X minut |
|!unmute | @user | zdejmuje mute z użytkownika |
|!reload | | przeładowuje bota/u nas coś jest zbugowane więc nie polecam |
|!restricteta | | włącz/wyłącz ograniczenie komendy eta (gdy włączone, użytkownik może użyć komendy eta raz na godzinę) |
|!timeguard | | włącza/wyłącza opcję timeguard |
|!togglebl | | włącza/wyłącza blacklisty |
|!togglemotd | | włącza/wyłącza wiadomość dnia |
|!skip | (powód) | pomija DJa i wysyła do niego powód pominięcia. Lista powodów: theme, meh, history, rules, sound, unavailable, nsfw. Wierzę, że jesteś w stanie sobie wygooglować co oznacza skrót NSFW. |


Resident DJ
-----------

|Command | Arguments |  Description |
|:------:|:---------:|:--------------------------------------:|
|!link | | wysyła link do aktualnego utworu



User
----

|Command | Arguments |  Description |
|:------:|:---------:|:--------------------------------------:|
|!8ball | (message) | zadaj botowi pytanie. |
|!autowoot | | wysyła link do RCS |
|!instalacja | | poradnik jak zainstalować RCS |
|!emoji | | link do listy emotikon |
|!emoty | | emotikony jakie zyskuje się z dodatkiem RCS |
|!ba | | przedstawia rangę "Ambasador Marki" |
|!komendy | | wysyła link do tych komend |
|!commands | | wysyła link do oryginalnych komend |
|!cookie | (@user) | daje ciastko użytkownikowi |
|!dclookup / !dc | | wpisz aby się przenieść na pozycję, na której się znajdowałaś/eś przed rozłączeniem |
|!eta | | pokazuje za ile czasu zostaniesz DJem |
|!fb | | wysyła link do facebooka DisStream |
|!gif | (tag) | Bot wysyła gifa z podanymi tagami. W przypadku ich braku wysyłany jest losowy gif. |
|!help | | link do obrazka z pomocą do pluga |
|!oporny | | wysyła poradnik do pluga w wersji dla opornych |
|!link | | kiedy jesteś DJem i użyjesz tej komendy bot wyśle link do aktualnie granego utworu |
|!op | | link do listy zbanowanych utworów |
|!ping | | PONG! |
|!rules | | link do zasad/regulaminu |
|!website | | link do strony DTV |
|!youtube | | link do kanału DTV |
|!wumekk | | cała prawda o Wumkku |
|!bronks | | bezsensowna komenda |
|!love | | kolorowe serca <3 |

