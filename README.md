# Prosjekt 3 - Dokumentasjon

## Krav til funksjonalitet

Applikasjonen vår møter alle krav som har blitt satt for prosjektet, med unntak av noen komponenter som ikke lagres skikkelig med AsyncStorage i enkelte tilfeller (se seksjonen under ‘Krav til teknologi’. Utformingen av applikasjonen baserer seg på tre ulike skjermer, med en skjerm for Home, Settings og Workouts. Disse kan byttes mellom via en tab-bar, som er et naturlig valg for mobilapplikasjoner, ved hjelp av det eksterne rammeverket React Navigation. Layouten av sidene har en hensiktsmessig utforming, slik at applikasjonen blir så brukervennlig som mulig. Data som er lagret lokalt i brukerens enhet, er lagret ved hjelp av AsyncStorage. 

Home, som er hovedskjermen i applikasjonen, inneholder flere ulike elementer, hvorav enkelte er interaktive. Her kan man finne en siste workout, et pedometer og en kalender. To av disse er elementer som på ulike måter demonstrerer hvordan man kan implementere funksjonalitet fra eksterne rammeverk. Siden for innstillinger, Settings, inneholder grunnleggende funksjonalitet for å stille inn hvorvidt brukeren vil benytte seg av et globalt pedometer eller ikke. Denne er konseptuell, og vil kunne utvides i en større applikasjon. Til slutt har vi også implementert en screen for Workouts, hvor en bruker kan registrere treningsøkter som lagres til videre bruk. 

## Krav til teknologi

### React, React Native & Expo CLI
For å utvikle vår applikasjon, har vi benyttet React Native med rammeverket Expo. Dette er en kombinasjon av verktøy som gjør det svært enkelt å utvikle og teste mobilapplikasjoner. Ved hjelp av rammeverk som React Navigation og Expo API, kunne vi lett benytte ulike funksjoner og komponenter for å bygge opp applikasjonen vår i vanlig React-stil. En komponent i React er et innkapslet element som bevarer sin egen tilstand og kan bli bygget opp fra bunnen av ved hjelp av andre, “mindre” komponenter. Som i forrige prosjekt, har vi benyttet god komponentstruktur, hvor navngivningen og mappeinndelingen tilsier hva slags komponent som er benyttet.

For å sette opp React Native med Expo CLI, gjør du kommandoen ‘npm install -g expo-cli’ og deretter ‘expo init ProjectName’ for å skape prosjektet. Det eneste som trengs for å starte vårt prosjekt, er npm (evt. yarn) og å kjøre kommandoen ‘npm start’ i samme mappe som package.json ligger i. Det kan også være en god idé å benytte React Developer Tools under utvikling og testing av prosjektet. Dette kan gjøres ved å kjøre kommandoen ‘npm install -g react-devtools’ og deretter kjøre ‘npm run rect-devtools’. Pass på at scriptet ‘"react-devtools": "react-devtools"’ ligger i package.json.

### Asynchronous Storage
AsyncStorage er React Natives svar på lokal lagring og er standard i bruk av dette rammeverket. Det kan benyttes som et JavaScript API globalt for applikasjonen og har som hensikt å lagre data internt. API’et er asynkront, som betyr at lagringen foregår i egne tråder slik at applikasjonen kan brukes under lagring. AsyncStorage har metoder som returnerer et såkalt Promise-objekt med datainnhold. I tillegg blir feilmeldinger håndtert som Error-objekter, som tydelig viser hva som går galt under lagring, sletting eller liknende. API’ets metoder er enkle i bruk, da man kan lagre, slette og opprette nye dataobjekter. I tillegg er det mulig å hente ut flere dataobjekter samtidig.

I dette prosjektet har vi benyttet AsyncStorage for å lagre Workouts i brukerens applikasjon. På denne måten har brukeren mulighet til å aksessere sine workouts selv etter vedkommende har byttet ut eller lukket applikasjonen. Dette er hendig, fordi brukeren gjerne bytter applikasjoner under treningsøkten og har behov for tilgang til workouts. Noe data, som skrittelleren, er lagret via Google Fit og benytter derfor ikke AsyncStorage. Derimot blir det lagret en “startDate” i App.js, som sier noe om første gang brukeren benytter applikasjonen. Dermed kan brukeren få informasjon om treningsaktiviteten siden denne dagen.

Vi møtte dog på en del problemer vedrørende AsyncStorage. Blant annet kunne AsyncTask, som ligger under AsyncStorage hos Android, benyttes av flere apper samtidig og dermed bli tregt. Vi hadde også problemer med såkalt “multiGet”, som har blitt diskutert mye i et pull-request hos Facebook. Vi opplevde også at AsyncStorage hang seg opp, til tross for at Facebook mener dette burde blitt fikset allerede. Ønsket funksjonalitet testes dermed best på iOS, men om den skulle blitt videreutviklet etter demoen ville vi sett på alternative lagringsmåter eller andre løsninger. Siden Workout-siden kun fungerer på enkelte enheter, har vi illustrert funksjonaliteten med bildene under.

<img src="https://i.imgur.com/iPIZ4dg.png" width="40%">
Her er HomeScreen som illustrerer seneste Workout øverst på siden.

<img src="https://i.imgur.com/un78vOZ.png" width="40%">
Dette viser et eksempel på en detaljert Workout.

<img src="https://i.imgur.com/Qtf6snP.png" width="40%">
WorkoutScreen med ingen Workouts.

<img src="https://i.imgur.com/4jKfIIs.png" width="40%">
WorkoutScreen med én Workout.

<img src="https://i.imgur.com/6RQt9sI.png" width="40%">
WorkoutScreen med flere Workouts.

<img src="https://i.imgur.com/63RA0V7.png" width="40%">
Her illustreres hvordan en Workout har fått lagt til en Exercise.

### Utforming
En viktig prioritet når man utvikler applikasjoner, er å passe på at de fungerer universelt for alle enheter som applikasjonen er tilgjengelig på. I vårt tilfelle skal applikasjonen fungere på både iOS og Android, men som nevnt i forrige seksjon testes den best på iOS. Til tross for at React Native for det meste passer på at den kompilerte koden fungerer på begge operativsystemene, er det viktig å teste dette henholdsvis da det kan forekomme enkelte forskjeller ved rammeverket. Vi måtte derfor låne mobiler med iOS for å se at alt fungerte godt, men det gikk generelt bra. Testingen beskrives mer under seksjonen om testing.

Når det gjelder applikasjonens utforming, fungerer React Native i hovedsak på samme måte som vanlig React. CSS-syntaks brukes for å style elementer på skjermen slik at de får et godt utseende og responsivitet. En forskjell mellom utvikling av nettsider og native mobilapplikasjoner er at størrelsen på skjermen generelt endrer seg ikke, med mindre brukeren bytter til f.eks. en tablet. Forskjell på størrelsesforholdene er som regel ikke så stor, så utvikleren kan derfor bestemme seg for hvorvidt applikasjonen er horisontal eller vertikal. Vi gjorde et bevisst valg på å ikke inkludere skjermrotasjon, da det var mer naturlig å beholde en vertikal retning mens en bruker av applikasjonen er ute i felten og trener. Dette er vanlig i mange ekte mobilapplikasjoner.

### Utvikling
Under utviklingen av prosjektet har vi benyttet et repository med samarbeidsverktøyet Github for å kunne koordinere kode og prosjektstruktur. Her opprettet vi et “project”, som hadde en kobling opp mot prosjektets issues. Disse kunne automatisk oppdateres på et taskboard med en status for hver enkelt task. Dette ga oss god oversikt over hva hver enkelt utvikler jobbet med og hvilke commits som var tilhørende et spesifikt issue. Om en commit markerte et issue som gjennomført, ble dette reflektert automatisk på taskboardet.

Vi passet også på å ha god kodestruktur, hensiktsmessig inndeling av komponenter og kommentarer på viktige funksjoner i koden. Slik kunne vi alltid komme tilbake til koden senere om nødvendig. Siden React i stor grad baserer seg på gjenbruk av kode og komponenter, så er det viktig å kunne forstå kode som kan være til hjelp under utvikling av andre funksjoner. Derfor har vi benyttet eksempler fra React sine egne eksempelprosjekter og kodesnutter for å få en idé om hva som er best practice angående mappestruktur og utforming av kode.

## Testing

### Jest
Gjennomgående testing av applikasjonen er viktig for å kunne sikre konsekvent funksjonalitet og responsivitet på forskjellige bruksenheter. Selv om applikasjonen tilsynelatende ser ut til å fungere bra under utvikling, bør man teste mer planmessig slik at edge-cases ikke fører til uforutsette problemer. Under dette prosjektet har vi testet gjennomgående med Jest, som er et testrammeverk for JavaScript. Det blir benyttet til å teste alt av kode og funksjoner, noe som også kan konfigureres til å kjøre automatisk under build av applikasjonen. Jest fungerer godt med React og React Native, da rammeverket er inkludert i alle React-prosjekter fra begynnelsen av. Dermed er det lett å sette opp og bruke under utvikling. Testene legges i en egen mappe med ‘.spec.js’ eller ‘.test.js’, slik at Jest finner og kjører dem. Dette kan gjøres med kommandoene ‘npm test’ eller ‘yarn test’ etter eget ønske.

Testene vi har skrevet er laget for å passe på at kodekvaliteten på prosjektet vårt er så god som mulig. Disse er svært nyttige for videreutvikling av applikasjonen, da man alltid kan sjekke at man fremdeles har ønsket funksjonalitet og ikke ødelegger essensielle deler når man skriver ny kode. I vårt tilfelle er ikke applikasjonen vår fullstendig, så vi har kun benyttet testing for å sjekke at AsyncStorage fungerer optimalt (se seksjonen over om dette) og enkle render-tester for å illustrere hvordan komponenter kan testes individuelt gjennom Jest. Videre kan dette benyttes sammen med Enzyme, slik at Jest automatisk kan sjekke innhold, states og funksjonalitet i hver komponent som testes. Med tydelige og detaljerte tilbakemeldinger, kan man med denne kombinasjonen forbedre komponentene sine i stor grad.

### CI
Noe vi gjerne skulle implementert som en del av prosjektutviklingen vårt, var gjennomgående testing med en continuous integration. Grunnen til at dette er en smart testløsning, er at man oppdager feil og mangler ved koden umiddelbart ved build. Dette kan rettes opp i før en eventuell pull request gjennom git. Vårt mest naturlige alternativ, Travis, var dessverre utilgjengelig som ekstern server, men vi fikk testet og satt opp prøveversjonen. Dermed finnes det filer som tilhører dette i vårt repository. Vi vurderte også å benytte Jenkins for CI, men grunnet tidsbegrensninger rakk vi ikke sette opp dette på en lokal server.
