# it2-v2018
I dette løsningsforslaget har jeg forsøkt å være konsekvent. Det bruker en god del dynamisk HTML gjennom JavaScript men jeg har gjort noen valg som gjør det enklere å kode løsninger (synes jeg :D )

* Jeg har så langt jeg kan brukt lytterfunksjoner som registreres i HTML-attributtet onfoo istedenfor å registrere de i JS. Dette gjør at jeg kan gjenbruke samme lytterfunksjon men kalle den med ulike argumenter. 
* Jeg bruker ikke document.createElement. All dynamisk kode blir generert ved å skrive til innerHTML. Jeg mener det blir mest oversiktelig. 
* Jeg bruker string-templates (ES6) for alle tekststrenger som genererer HTML-kode. 
* Total tid for kodingen har vært godt i underkant av 4h. 

## De ferdige løsningene ser slik ut:
* [Oppgave 1](https://johanhake.github.io/it2-v2018/index.html)
* [Oppgave 2](https://johanhake.github.io/it2-v2018/program.html)
* [Oppgave 3](https://johanhake.github.io/it2-v2018/quiz.html)

## Tilleggsoppgaver
* [Om oppgave 3](om_oppgave3.md)