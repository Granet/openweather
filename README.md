
# WeatherNow

WeatherNow è un'applicazione web, il meteo in un fulmine. Inserendo il nome della città ti mostra la situazione meteorologica corrente.
WeatherNow vanta di una User Interface molto attraente attraverso effetti grafici ed è minimale nelle sue funzioni, questo la rende di facile utilizzo.

## Caratteristiche tecniche
WeatherNow fa uso di ultime e avanzate tecnologie disponibili al momento. 
È sviluppata utilizzando jQuery per le sue funzionalità: grafica, gestione dei contenuti dinamici all'interno di una pagina web e per le chiamate asincrone mediante la funziona Ajax (si definisce asincrona una chiamata ad una risorsa esterna). WeatherNow effettua una chiamata asincrona ogni volta che viene ricercata una città per ricevere i dati delle condizioni meteorologiche da una risorsa esterna. Vengono usate le API che mette a disposizione OpenWeatherMap. Nel parametro “data” della funzione Ajax vengono passati i valori della città, l'unità metrica, la lingua e l'API Key. Per la chiamata asincrona viene usato il metodo GET, cioè vengono concatenati nell'URL gli attributi e i valori che sono stati dati nel parametro “data” della funzione Ajax. OpenWeatherMap ritorna i dati in formato JSON(JavaScript Object Notation) e vengono manipolati e visualizzati attraverso delle funzioni.

Per rendere l'applicazione più fruibile all'utente si è fatto uso della funzione “localStorage”, la funzione permette di salvare una Key con delle informazioni. Viene usata “localStorage” per salvare  i dati dell'ultima ricerca delle condizioni meteo e visualizzarli quando viene ricaricata la pagina o riaperta dopo tanto tempo. I dati in formato JSON vengono convertiti in una stringa dalla funzione JSON.stringify(dati_json).

Per gli effetti grafici si è utilizzata la libreria WebGL è una libreria per grafica 2D e 3D ed ancora le specifiche sono in fase di costruzione. A secondo le condizioni meteo è possibile visualizzare un background con piogga, pioggia leggera, temporale e Sole.

## Misc

WeatherNow è in fase di sviluppo e di progettazione. Si sta valutando di creare due branch: meteo corrente, previsione meteo. Anche si sta valutando l'idea di rendere l'applicazione cross-platform utilizzando IntelXDK, quindi utilizzabile da più piattaforme anche mobile.


*Ideata e sviluppata da Francesco Russo aka(Granet)*

[Demo](http://granet.github.io/weathernow)

[Source](http://github.com/Granet/weathernow)

__Contribuisci all'Open Source&Mind__



