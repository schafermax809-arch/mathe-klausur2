# Design- und Inhaltsprüfung

Stand: 15.11.2026. Prüfung gegen den ausdrücklichen Nutzerauftrag mit 20 UI-Regeln und 22 Hintergrundideen. Quellenumfang: Klausurankündigung im Screenshot und Mathe 2.pdf. Der Hintergrund wurde mit CSS erzeugt; Bildgenerierung ist für dieses Arbeitsblatt nicht nötig.

## Die 20 UI-Regeln einzeln

| Nr. | Regel | Umsetzung und Prüfung |
|---|---|---|
| 1 | Füll-Badges entfernen | Kennzeichnungen nur für den Arbeitsmodus „Hilfsmittelfrei“, „CAS“ und den Nutzen „Auch Begriffe hilfsmittelfrei“. Keine Trend-, Neu- oder Motivations-Badges. |
| 2 | Doppelte Labels streichen | Lektionen haben einen Modus und eine konkrete Überschrift; kein wiederholtes Themenlabel darüber. Navigations- und Quelleneinträge dienen der Orientierung. |
| 3 | Keine zufällige Kursivschrift | Oberfläche ohne Kursivstil. Mathe steht in einer eigenen Serifenschrift; keine dekorativ kursiven Wörter. |
| 4 | Monospace gezielt | Nur CAS-Funktionen und Eingaben verwenden Consolas/Cascadia Code. Titel, Zahlenwerte und allgemeiner Text bleiben in der Oberflächenschrift. |
| 5 | Einheitliches Designsystem | CSS-Variablen für Papier, Oberfläche, Text, Blau, Grenzen und Radien. Gemeinsame Buttons, Felder, Tags, Aufgaben und Tabellen; konsistente Abstände. |
| 6 | Produkt auf Startseite | Nutzbare Glockenkurve und echte prüfbare Aufgabe direkt auf der Startseite. Kein vorgeschalteter Werbebildschirm. |
| 7 | Hauptfunktion erhält Platz | Glockenkurve bildet das größte eigenständige Element der Startseite und erscheint in ihrer Lektion vor dem Erklärungstext. Mobile Innenabstände wurden nach Sichtprüfung reduziert und die Darstellung vergrößert. |
| 8 | Inhaltlich gruppierte Abstände | Aufgabe, Ergebnisfeld und Feedback gehören zu einer Aufgabenkachel. Tipps und Musterlösung stehen gestuft darunter; Lektionen haben klare Abschnittsabstände. |
| 9 | Konkrete Überschriften | Zum Beispiel „Welche Fläche gehört zu P(X ≤ 12)?“, „Wie oft musst du einen Versuch wiederholen?“ und „Mit z und der Tabelle zur gesuchten Fläche“. |
| 10 | Wichtigste Aktion hervorheben | Start: „Hilfsmittelfrei üben“. Übung: „Antwort prüfen“. Klausur: „Probeklausur starten“ bzw. „Klausur abgeben & auswerten“. Zweitrangige Aktionen sind zurückhaltend gestaltet. |
| 11 | Eine Akzentfarbe | Kobaltblau #244ce5 für Hauptaktionen, aktive Navigation und Diagramm. Grün bzw. Rotbraun ausschließlich als semantisches Antwortfeedback. |
| 12 | Einheitliche Icons | Ein kleines zusammenhängendes SVG-System: 24er ViewBox, 20 px Größe, 1,7er Strich, runde Enden, kein gefüllter Mischstil. Das mathematische Summenzeichen ist die Wortmarke. |
| 13 | Verzierungen entfernen | Keine Glanzeffekte, Deko-Illustrationen oder Deko-Icons. Linien strukturieren Tabellen, Diagrammachsen und Inhalte; nur sehr zurückhaltende Oberflächenschatten. |
| 14 | Verschachtelte Ecken abstimmen | Äußere Kacheln 16 px; innere Bedienelemente 7–9 px bei größeren Zwischenabständen. Zusammenhängende Diagramm-/Aufgabenfläche liegt innerhalb einer gemeinsamen beschnittenen Außenrundung. Keine dicht ineinander liegenden widersprüchlichen Rundungen. |
| 15 | Textkontrast verbessern | Haupttext #202a38, Hinweise #596270 auf Papierweiß. Diagrammachsen nutzen #536071, Blau auf heller Fläche. Deaktivierte Regler sind als solche gekennzeichnet; Textinformationen bleiben an anderer Stelle sichtbar. Farben sind unten rechnerisch geprüft. |
| 16 | Überschriftenumbrüche prüfen | Desktop 1440 px und Handy 390/320 px geprüft. Kurze Teile von Formeln werden mit nowrap zusammengehalten; lange CAS-Eingaben dürfen umbrechen. Kein horizontaler Seitenüberlauf in allen sieben Lektionen. |
| 17 | Optisch ausrichten | SVG-Icons und Text per Flexbox mittig, gleiche Iconfläche. Eingaben und Buttons an derselben Grundlinie, Prozent-Einheiten im Feld. Visuelle Kontrolle beider Ansichten. |
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
| 7 | Blueprint-Raster | Geprüft als geometrisch passende Alternative; kein flächiges Linienraster hinter Formeln. Das sparsame Punktraster übernimmt seine sachliche Ordnung. |
| 8 | Halbtonraster | Verworfen: zu präsent und bei Skalierung potenziell unruhig. |
| 9 | Körnige Farbverläufe | Verworfen: unnötiger Wechsel der Helligkeit hinter Lerntext. |
| 10 | Grastextur | Verworfen: thematisch unpassend und kontrastreich. |
| 11 | Geditherte Bilder | Verworfen: keine Bildinformation erforderlich, Muster würde konkurrieren. |
| 12 | Papiertextur | **Gewählt als Papiercharakter:** warmes Papierweiß und ruhige leicht warme Inhaltsflächen. Auf zusätzliches sichtbares Rauschen wird zugunsten der Lesbarkeit verzichtet. |
| 13 | Höhenlinien | Verworfen: können mit Funktionsgraphen verwechselt werden. |
| 14 | Wolkenhimmel | Verworfen: illustrative Fläche ohne fachlichen Beitrag. |
| 15 | Pixelmosaike | Verworfen: zu viele Einzelflächen und harte Kontraste. |
| 16 | Linsenverzerrung | Verworfen: gerade Achsen und Formeln sollen unverzerrt wirken. |
| 17 | Farbverlauf aus feinen Punkten | Verworfen: ein Verlauf erzeugt unnötige Gewichtung. Das gewählte Raster bleibt gleichmäßig. |
| 18 | Raster aus quadratischen Punkten | **Gewählt in zurückhaltender Abwandlung:** sehr feine Punkte in regelmäßig quadratischer Anordnung, nur im freien Startbereich. Die Punkte sind rund und sehr kontrastarm. |
| 19 | Unscharfe Fotos | Verworfen: keine fachliche Information und wechselnder Hintergrundkontrast. |
| 20 | Schillernde Formen | Verworfen: konkurrieren mit Blau und Diagramm. |
| 21 | Impressionistische Gemälde | Verworfen: Bildsprache lenkt vom Rechnen ab. |
| 22 | ASCII-/Pixelmuster | Verworfen: Monospace soll ausschließlich als CAS-Signal dienen. |

Gewählter Stil: warmes Papierweiß, ruhige Flächen und ein minimales Punktraster als Anklang an technisches Papier. Formeln, Aufgaben, Tabellen und Diagramm liegen auf musterfreien Flächen. Es werden keine Texturdateien geladen.

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

## Rechnerische Kontrastprüfung

- Haupttext auf Papier: 13.50:1.
- Hinweise auf Papier: 5.75:1.
- Weiß auf Kobaltblau: 6.48:1.
- Diagrammachsen auf Inhaltsfläche: 6.35:1.
- Blauer Text auf hellblau: 5.75:1.
