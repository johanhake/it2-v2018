[Tilbake](readme.md)
# Om oppgave 3
## Pseudokode
~~~~
VARIABLER 
    skalSpilles: liste med indekser til instrument som skal spilles
    valgtInstrument: variabel som holder på indeksen til det tilfeldigt valgte instrumentet
    
FUNKSJON finnNyttInstrument
    IF lengde til skalSpilles === 0:
        Avslutt quizen
    
    indeks = tilfeldig tall mellom 0 og lengden til skalSpilles
    valgtInstrument = skalSpilles[indeks]
    ta bort skalSpilles[indeks]
    
    spill instrumentet til valgtInstrument
~~~~

## Testplan
Etter hver iterasjon lar jeg brukere teste applikasjonen og ber så om tilbakemelding. 
1. Lager et første utkast av applikasjonen som tester konstruksjon av bilder, avspilling av lyd og registrering av gjetninger. 
2. Legger til de siste kravspesifikasjonene.
3. Bytter ut lydene og bildene med nye instrumenter. Lager så et sett med instrumenter som tilfeldig kan velges 
[Tilbake](readme.md)
