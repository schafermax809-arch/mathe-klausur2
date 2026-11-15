# Design- und Inhaltsprüfung

Stand: 15.11.2026. Prüfung gegen den ausdrücklichen Nutzerauftrag mit 20 UI-Regeln und 22 Hintergrundideen. Quellenumfang: Klausurankündigung im Screenshot und Mathe 2.pdf. Der Hintergrund wurde mit CSS erzeugt; Bildgenerierung ist für dieses Arbeitsblatt nicht nötig.

## Die 20 UI-Regeln einzeln

| Nr. | Regel | Umsetzung und Prüfung |
|---|---|---|
| 1 | Füll-Badges entfernen | Kennzeichnungen nur für den Arbeitsmodus „Hilfsmittelfrei“, „CAS“ und den Nutzen „Auch Begriffe hilfsmittelfrei“. Keine Trend-, Neu- oder Motivations-Badges. |
| 2 | Doppelte Labels streichen | Lektionen haben einen Modus und eine konkrete Überschrift; kein wiederholtes Themenlabel darüber. Navigations- und Quelleneinträge dienen der Orientierung. |
| 3 | Keine zufällige Kursivschrift | Oberfläche ohne Kursivstil. Mathe steht in einer eigenen Serifenschrift; keine dekorativ kursiven Wörter. |
| 4 | Monospace gezielt | Nur CAS-Funktionen und Eingaben verwenden Consolas/Cascadia Code. Titel, Zahlenwerte und allgemeiner Text bleiben in der Oberflächenschrift. |
| 5 | Einheitliches Designsystem | Einheitliche Variablen für Bordeaux, Creme, Rosé, Text und Linien. Bricolage Grotesque für Überschriften/Zahlen, Instrument Sans für die Oberfläche, Cambria für Formeln und Consolas für CAS. Beide Oberflächenschriften werden lokal geladen. |
| 6 | Produkt auf Startseite | Nutzbare Glockenkurve und echte prüfbare Aufgabe direkt auf der Startseite. Kein vorgeschalteter Werbebildschirm. |
| 7 | Hauptfunktion erhält Platz | Eine große interaktive Diagrammfläche steht direkt neben dem abgesetzten Rechenbereich. Das Diagramm bleibt der größte Teil der Arbeitsfläche. Die kompakte Kopfzeile bringt den eigentlichen Lernschritt früher ins Bild. |
| 8 | Inhaltlich gruppierte Abstände | Die einzelne grafische Arbeitsfläche verbindet Diagramm, Grenzen, Flächenwert und Aufgabe. Übungsfragen gruppieren Eingabe, Prüfung, Tipp und Lösung durch konsistente Abstände. Kein Raster aus gleichgewichtigen Karten. |
| 9 | Konkrete Überschriften | Die Startfrage lautet „Welche Fläche liegt links von 12?“. Konkrete fachliche Überschriften bleiben in allen sieben Lektionen erhalten. |
| 10 | Wichtigste Aktion hervorheben | Start: der klare Einstieg „Hilfsmittelfrei üben“, direkt in der Arbeitsfläche „Antwort prüfen“. Übung und Klausur nutzen denselben ausgefüllten Bordeaux-Button für die jeweilige Hauptaktion. |
| 11 | Eine Akzentfarbe | Bordeaux #58172f für Aktionen, aktive Zustände und Kurve; Creme #f4eddf als Hintergrund; #fffaf0 als helle Arbeitsfläche. Die Diagrammfüllung ist ein transparenter Roséton. Grün/Rotbraun dienen nur dem Antwortfeedback. |
| 12 | Einheitliche Icons | Wortmarke und Favicon verwenden dasselbe reduzierte Kurvenzeichen. Aktionspfeile folgen dem 24er SVG-System mit gleichmäßiger Strichstärke; keine zusätzlichen Deko-Icons. |
| 13 | Verzierungen entfernen | Keine Papierkörnung, keine Glanzeffekte und keine dekorativen Rahmenlinien. Sehr zurückhaltende Schatten dienen nur der Ebenentrennung von Segmentschaltern und der großen grafischen Arbeitsfläche. |
| 14 | Verschachtelte Ecken abstimmen | Arbeitsfläche: 20 px Außenradius, 27 px Innenabstand. Keine eng anliegenden Innenkarten. Segmentschalter: 9 px außen, 5 px innen bei 4 px Abstand; Navigation: 11/7/4 px. Eingaben 8 px, Buttons 9 px. Auf Handy wird die große Arbeitsfläche auf 15 px abgestimmt. |
| 15 | Textkontrast verbessern | Haupttext #30272b und Hinweise #75666c auf Creme #f4eddf. Cremetext auf Bordeaux im Rechenbereich. Deaktivierte Grenzen sind über den deaktivierten Regler zusätzlich erkennbar; aktive Werte bleiben kontrastreich. |
| 16 | Überschriftenumbrüche prüfen | Desktop 1440 px und Handy 390/320 px geprüft. Lange deutsche Überschriften dürfen sprachgerecht getrennt werden; Formelteile und CAS-Eingaben erhalten eigene Umbruchregeln. Kein horizontaler Seitenüberlauf in allen sieben Lektionen. |
| 17 | Optisch ausrichten | Kompakte Kopfzeile mit gemeinsamer Mittelachse für Wortmarke, Navigation und Kapitelzugriff. Aufgabentext, Prozentfeld und Hauptaktion sind einheitlich ausgerichtet; Diagrammwerte haben eine gemeinsame Grundlinie. |
| 18 | Gleich breite Ziffern | `font-variant-numeric: tabular-nums` auf der gesamten Anwendung; damit auch Tabellen, Fortschrittszahlen, Timer und wechselnde Wahrscheinlichkeiten. |
| 19 | Tatsächliche Ladezustände | Die bedarfsweise erzeugte Φ-Tabelle meldet „Tabelle wird berechnet …“, einen Spinner und aria-busy. Statische sofort verfügbare Inhalte erhalten keinen künstlichen Ladezustand. |
| 20 | Hilfreiches Feedback animieren | Flächen folgen unmittelbar den Reglern; σ-Presets interpolieren die Grenzen kurz. Die Grenze lässt sich auch direkt am Diagramm ziehen. Die Themenliste zeigt bei Hover oder Tastaturfokus eine passende Skizze; ein kreisförmiger Farbwechsel und leicht magnetische Hauptbuttons machen Aktionen erkennbar. Antwortfeedback erscheint sichtbar und wird als Status ausgegeben. `prefers-reduced-motion` wird berücksichtigt. |

## Alle 22 Hintergrundideen geprüft

| Nr. | Idee | Entscheidung und Begründung |
|---|---|---|
| 1 | Filztextur | Verworfen: zu stofflich und unruhig für Aufgaben und Zahlen. |
| 2 | Geriffeltes Glas | Verworfen: Transparenz und Brechung erschweren klares Lesen. |
| 3 | Wärmebild-Farbverläufe | Verworfen: konkurrieren mit der Wahrscheinlichkeitsfläche und ihrer eindeutigen Akzentfarbe. |
| 4 | Wasserwellen | Verworfen: Bewegung und organische Linien passen weniger zum Arbeitsblatt. |
| 5 | Gesprenkelte Graphittextur | Verworfen: Sprenkel können bei kleinen Zahlen wie Satzzeichen wirken. |
| 6 | Einfarbige Landschaften | Verworfen: bildhafte Landschaft bietet hier keinen Lernnutzen. |
| 7 | Blueprint-Raster | Geprüft als geometrisch passende Alternative; kein flächiges Linienraster hinter Formeln. Die Ordnungsfunktion übernehmen die Randlinie und die tatsächlichen Diagramm-/Rechenlinien. |
| 8 | Halbtonraster | Verworfen: zu präsent und bei Skalierung potenziell unruhig. |
| 9 | Körnige Farbverläufe | Verworfen: unnötiger Wechsel der Helligkeit hinter Lerntext. |
| 10 | Grastextur | Verworfen: thematisch unpassend und kontrastreich. |
| 11 | Geditherte Bilder | Verworfen: keine Bildinformation erforderlich, Muster würde konkurrieren. |
| 12 | Papiertextur | **Gewählt als zurückhaltender Materialcharakter:** warmes Creme und helle, ruhige Arbeitsflächen. Sichtbare Körnung wird zugunsten des sauberen Formelsatzes weggelassen. |
| 13 | Höhenlinien | Verworfen: können mit Funktionsgraphen verwechselt werden. |
| 14 | Wolkenhimmel | Verworfen: illustrative Fläche ohne fachlichen Beitrag. |
| 15 | Pixelmosaike | Verworfen: zu viele Einzelflächen und harte Kontraste. |
| 16 | Linsenverzerrung | Verworfen: gerade Achsen und Formeln sollen unverzerrt wirken. |
| 17 | Farbverlauf aus feinen Punkten | Verworfen: ein Verlauf erzeugt unnötige Gewichtung. Auf Verläufe in den Arbeitsflächen wird verzichtet. |
| 18 | Raster aus quadratischen Punkten | Geprüft und verworfen: würde mit den echten Diagramm-/Rechenlinien konkurrieren. |
| 19 | Unscharfe Fotos | Verworfen: keine fachliche Information und wechselnder Hintergrundkontrast. |
| 20 | Schillernde Formen | Verworfen: konkurrieren mit Bordeaux und der Diagrammfläche. |
| 21 | Impressionistische Gemälde | Verworfen: Bildsprache lenkt vom Rechnen ab. |
| 22 | ASCII-/Pixelmuster | Verworfen: Monospace soll ausschließlich als CAS-Signal dienen. |

Gewählter Stil: präzise Lernoberfläche in Bordeaux und hellem Creme. Lokal geladene Oberflächenschriften, eine kompakte Navigation und eine einzige große Diagramm-/Rechenfläche bestimmen den Aufbau. Formeln, Tabellen und Diagramme erhalten keine zusätzlichen Raster- oder Texturmuster.

## Fachlicher Umfang gegen die Klausurankündigung

| Stoff | Fundstelle und Umsetzung |
|---|---|
| Mindestanzahl Wiederholungen | PDF 38–41; Gegenereignis, Logarithmus, Aufrunden, Minimalitätsprüfung; zwei Aufgaben. |
| Prognoseintervalle | PDF 42–45; μ, σ, Normalquantile, diskrete Grenzen und Hinweis auf tatsächliche Sicherheitswahrscheinlichkeit; eigene 90/95/99%-Aufgaben. |
| Flächen unter Glockenkurven | PDF 46–49, 53; Symmetrie, σ-Flächen, stetige Punktwahrscheinlichkeit, interaktiver Graph und Übungen. |
| Normalverteilung/CAS | PDF 46, 48, 50–53; normCdf und invNorm mit verifizierten TI-Argumenten und Beispiel. |
| Standardnormalverteilung | PDF 49; auswendig zu lernende z-Formel, kumulierte Tabelle, negative z-Werte und Intervallflächen. |
| Binomialapproximation | PDF 52–53; σ > 3, Stetigkeitskorrektur, strenge/inklusive Grenzen; Normal- und Binomialergebnis nachgerechnet. |
| Konfidenzintervalle | PDF 54–63; Parabel- und Ellipsenansatz, gleiche Grenzgleichung, Näherung, Genauigkeit und Stichprobenumfang, gemischte Zuordnungsaufgaben. |
| Zusätzliche Verweise | Buch 294/295 Nr. 5–7; AB Bodylotion a/c; AB Prognose/Konfidenz; Buch 318 offene LS 6. Als nicht vollständig vorliegende Verweise ausgewiesen. |

## Funktionsprüfung

- 18 Aufgabenlösungen unabhängig anhand von Referenzwerten kontrolliert; wiederholbare Node-Prüfung unter `tests/math.test.cjs`.
- Kurvenfläche, Normal-CDF und Quantile kontrolliert. Dichte numerisch auf Gesamtfläche 1 integriert. Binomial-CDF mit Referenzwert verglichen; Score-Grenzen in die Parabelgleichung zurückgesetzt.
- Startaufgabe mit Dezimalkomma geprüft; alle sieben Lektionen auf Desktop und Handy geöffnet.
- Graphmodi, Regler, σ-Presets, ungültiges σ, gültiger Parameterwechsel und gespeicherte Themenmarkierung geprüft.
- Themen-/Hilfsmittelfilter, Tipp und anschließend vollständige Lösung geöffnet.
- Klausur: zehn Aufgaben, keine Tipps oder Musterlösungen vor Abgabe, z-Formel nicht im sichtbaren Klausurtext, Φ-Tabelle gegeben, Rechenweg und Antwort nach Neuladen erhalten.
- Vollständig richtiger Klausurdurchlauf ergibt 100/100, davon 30/30 und 70/70. Zehn Musterlösungen erst nach der Abgabe im DOM vorhanden.
- Desktop 1440 px, Handy 390 px und schmale Ansicht 320 px geprüft. Keine JavaScript-Seitenfehler. Desktop-/Handy-Screenshots visuell geprüft; danach mobilen Diagrammplatz und Achsenticks verbessert und Prüfungen wiederholt.

## Grenzen

Originaltabelle und zusätzliche Buch-/Arbeitsblattseiten fehlen; dies wird transparent ausgewiesen. Automatische Klausurbewertung prüft nur Endergebnisse, keine Textrechenwege. Kein benotender oder manipulationssicherer Prüfungsserver. Fortschritt gehört zum jeweiligen Browser und kann durch Löschen des Browserspeichers verloren gehen.

## Gestaltung und Navigation erneut geprüft

- Kompakte Kopfzeile mit Wortmarke, Segmentschaltern und aufklappbarem Themenverzeichnis.
- Bricolage Grotesque und Instrument Sans lokal eingebunden, Lizenzen mitgeliefert. Die Formeln behalten eigenen mathematischen Satz.
- Eine helle Diagrammfläche und ein abgesetzter Bordeaux-Rechenbereich bilden die Hauptfunktion. Eingaben, Feedback und Aktionen sind darin visuell zusammengefasst.
- 11 Ansichten bei 1024/768/390/320 px sowie Desktop 1440 px geprüft. Kapitelverzeichnis, mobile Navigation und Tastaturzugriff funktionieren; keine horizontalen Seitenüberläufe oder Seitenfehler.
- Vollständiger Klausurdurchlauf und alle 18 Referenzlösungen erneut erfolgreich geprüft.

## Rechnerische Kontrastprüfung

- Haupttext auf Creme: 12.43:1.
- Hinweise auf Creme: 4.65:1.
- Cremetext auf Bordeaux, auch in aktiven Themenzeilen: 12.79:1.
- Vorschautext auf Rosé: 6.17:1.

## Interaktionen nach Lusion-/Cuberto-Präferenz

- Fließende kreisförmige Bordeaux-Füllung beim Hover; Text bleibt klar und unverzerrt.
- Bewegliche Themenvorschau mit mathematischer Skizze. Binomialbalken aus echten Wahrscheinlichkeiten; Normalnäherung mit n = 64, p = 0,5 und σ = 4.
- Leicht magnetische Hauptbuttons mit kreisförmiger Füllung und reagierendem Pfeil.
- Direktes Ziehen der Kurvengrenzen ändert dieselben Werte wie die weiterhin vorhandenen, tastaturbedienbaren Regler. Keine Verformung des mathematischen Graphen.
- Touch erhält große Themenzeilen und Regler ohne Hover-Abhängigkeit. Tastaturfokus aktualisiert ebenfalls die Vorschau. Reduzierte Bewegung unterbindet Magnetismus, Neigung und Einblendanimationen.
- Keine WebGL-Abhängigkeit und keine dauerhafte Animationsschleife. Pointer-Animationen laufen nur bei Bewegung. Ereignisse, Observer und ausstehende Animationsframes werden beim Ansichtswechsel aufgeräumt.
- Direkter Drag auf μ ergibt 50,00 %, Regler zurück auf 12 ergibt 84,13 %. Themenwechsel, Tastaturfokus, reduzierte Bewegung, wiederholte Navigation und 25 Kombinationen aus Ansichten/Bildschirmbreiten geprüft.
