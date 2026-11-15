# Design- und Inhaltsprüfung

Stand: 15.11.2026. Prüfung gegen den ausdrücklichen Nutzerauftrag mit 20 UI-Regeln und 22 Hintergrundideen. Quellenumfang: Klausurankündigung im Screenshot und Mathe 2.pdf. Der Hintergrund wurde mit CSS erzeugt; Bildgenerierung ist für dieses Arbeitsblatt nicht nötig.

## Die 20 UI-Regeln einzeln

| Nr. | Regel | Umsetzung und Prüfung |
|---|---|---|
| 1 | Füll-Badges entfernen | Kennzeichnungen nur für den Arbeitsmodus „Hilfsmittelfrei“, „CAS“ und den Nutzen „Auch Begriffe hilfsmittelfrei“. Keine Trend-, Neu- oder Motivations-Badges. |
| 2 | Doppelte Labels streichen | Lektionen haben einen Modus und eine konkrete Überschrift; kein wiederholtes Themenlabel darüber. Navigations- und Quelleneinträge dienen der Orientierung. |
| 3 | Keine zufällige Kursivschrift | Oberfläche ohne Kursivstil. Mathe steht in einer eigenen Serifenschrift; keine dekorativ kursiven Wörter. |
| 4 | Monospace gezielt | Nur CAS-Funktionen und Eingaben verwenden Consolas/Cascadia Code. Titel, Zahlenwerte und allgemeiner Text bleiben in der Oberflächenschrift. |
| 5 | Einheitliches Designsystem | CSS-Variablen für Bordeaux, Creme, Rosé, Text und Trennlinien. Einheitliche flache Buttons, unterstrichene Eingaben und ruhiger Formelsatz. Das Heft verwendet bewusst keine schwebenden Kacheln. |
| 6 | Produkt auf Startseite | Nutzbare Glockenkurve und echte prüfbare Aufgabe direkt auf der Startseite. Kein vorgeschalteter Werbebildschirm. |
| 7 | Hauptfunktion erhält Platz | Glockenkurve als große Arbeitsfläche auf dem zusammenhängenden Papierbogen. Auf der Startseite steht unmittelbar daneben die Zerlegung in linke Hälfte und zusätzliche σ-Fläche. In der Lektion erscheint die Kurve vor dem Erklärungstext. |
| 8 | Inhaltlich gruppierte Abstände | Aufgaben werden durch Nummern, Freiraum und sparsame Regeln gegliedert. Ergebnisfeld und Feedback stehen unmittelbar bei der Frage. Der Rechenweg der Probeklausur nutzt einen tatsächlich beschreibbaren linierten Bereich. |
| 9 | Konkrete Überschriften | Die Startseite stellt die konkrete Frage „Links von 12. Wie viel ist das?“. Jede Lektion behält ihre fachliche Frage; keine allgemeine Werbeüberschrift vor dem Produkt. |
| 10 | Wichtigste Aktion hervorheben | Start: der klare Einstieg „Hilfsmittelfrei üben“, direkt in der Arbeitsfläche „Antwort prüfen“. Übung und Klausur nutzen denselben ausgefüllten Bordeaux-Button für die jeweilige Hauptaktion. |
| 11 | Eine Akzentfarbe | Auf Nutzerwunsch Bordeaux #651d32 als Akzent und tragende Heftfarbe, Creme #f7f0df als Papier, Rosé nur als tonale Diagrammfüllung. Grün und Rotbraun ausschließlich für Antwortfeedback. |
| 12 | Einheitliche Icons | Nur ein konsistentes SVG-Pfeilsystem für richtungsbezogene Aktionen. Die Heftnavigation verwendet klare Textlinks; die Wortmarke wird aus derselben Serifenschrift gesetzt. |
| 13 | Verzierungen entfernen | Keine Glanzverläufe, Deko-Icons oder schwebenden Schatten. Linien trennen Kapitel, Rechenbereiche und Tabellen. Die einzelne Randlinie gliedert die Nummernspalte des Arbeitshefts. |
| 14 | Verschachtelte Ecken abstimmen | Die Heftflächen sind rechteckig; Buttons haben lediglich 2 px Radius, Eingaben und Tabellen rechtwinklige Kanten. Es gibt keine verschachtelten Rundungen, deren Abstände sich widersprechen könnten. |
| 15 | Textkontrast verbessern | Haupttext #3c2029 und Hinweise/Achsen #735c60 auf Creme #f7f0df. Creme auf Bordeaux für Kopf und Aktionen. Aktive Beschriftungen bleiben dunkel genug; deaktivierte Grenzen sind zusätzlich durch den deaktivierten Regler erkennbar. |
| 16 | Überschriftenumbrüche prüfen | Desktop 1440 px und Handy 390/320 px geprüft. Lange deutsche Überschriften dürfen sprachgerecht getrennt werden; Formelteile und CAS-Eingaben erhalten eigene Umbruchregeln. Kein horizontaler Seitenüberlauf in allen sieben Lektionen. |
| 17 | Optisch ausrichten | Wortmarke, Ausgabe und Klausurdatum bilden eine gemeinsame Heftkopfzeile. Pfeile sitzen mittig neben den Aktionen. Formeleingaben und Prüfbuttons sind ausgerichtet; linke und rechte Diagrammwerte liegen auf einer Grundlinie. |
| 18 | Gleich breite Ziffern | `font-variant-numeric: tabular-nums` auf der gesamten Anwendung; damit auch Tabellen, Fortschrittszahlen, Timer und wechselnde Wahrscheinlichkeiten. |
| 19 | Tatsächliche Ladezustände | Die bedarfsweise erzeugte Φ-Tabelle meldet „Tabelle wird berechnet …“, einen Spinner und aria-busy. Statische sofort verfügbare Inhalte erhalten keinen künstlichen Ladezustand. |
| 20 | Hilfreiches Feedback animieren | Flächen folgen unmittelbar den Reglern; σ-Presets interpolieren die Grenzen kurz. Antwortfeedback erscheint sichtbar und wird als Status ausgegeben. `prefers-reduced-motion` wird berücksichtigt. |

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
| 12 | Papiertextur | **Gewählt:** warmes Creme mit sehr feiner, lokal erzeugter Papierkörnung (SVG-Turbulenz bei 2,5 % Deckkraft). Sie bleibt unterhalb der Kontraste der mathematischen Beschriftung; keine externen Texturdateien. |
| 13 | Höhenlinien | Verworfen: können mit Funktionsgraphen verwechselt werden. |
| 14 | Wolkenhimmel | Verworfen: illustrative Fläche ohne fachlichen Beitrag. |
| 15 | Pixelmosaike | Verworfen: zu viele Einzelflächen und harte Kontraste. |
| 16 | Linsenverzerrung | Verworfen: gerade Achsen und Formeln sollen unverzerrt wirken. |
| 17 | Farbverlauf aus feinen Punkten | Verworfen: ein Verlauf erzeugt unnötige Gewichtung. Auf Verläufe in den Arbeitsflächen wird verzichtet. |
| 18 | Raster aus quadratischen Punkten | Geprüft und verworfen: würde mit der feinen Papierstruktur und den echten Diagramm-/Rechenlinien konkurrieren. |
| 19 | Unscharfe Fotos | Verworfen: keine fachliche Information und wechselnder Hintergrundkontrast. |
| 20 | Schillernde Formen | Verworfen: konkurrieren mit Bordeaux und der Diagrammfläche. |
| 21 | Impressionistische Gemälde | Verworfen: Bildsprache lenkt vom Rechnen ab. |
| 22 | ASCII-/Pixelmuster | Verworfen: Monospace soll ausschließlich als CAS-Signal dienen. |

Gewählter Stil: ein zusammenhängendes Mathe-Heft in Bordeaux und Creme mit zurückhaltender Papierkörnung. Serifentitel, Randnummern und eine horizontale Heftnavigation bestimmen den Aufbau. Formeln, Tabellen und Diagramme erhalten keine zusätzlichen Rastermuster. Es werden keine externen Texturdateien geladen.

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

- Durchgehender Cremebogen mit Bordeaux-Heftkopf, waagerechter Navigation und aufklappbarem Kapitelverzeichnis statt dauerhafter Seitenleiste.
- Startaufgabe mit sichtbarer Flächenzerlegung, rechteckigen Eingabeflächen und großem Serifentitel. Auch Lektionen, Übungen, Tabellen und Klausur verwenden dieses System.
- Desktop, Tablet und Handy: Kapitelverzeichnis, Menüzustände, lange Überschriften und Rechenflächen geprüft. Fachinhalte und 18 verifizierte Aufgabenlösungen bleiben erhalten.

## Rechnerische Kontrastprüfung

- Haupttext auf Creme: 12.92:1.
- Hinweise und Achsen auf Creme: 5.39:1.
- Creme auf Bordeaux: 10.41:1.
- Sekundärtext im Heftkopf: 7.09:1.
