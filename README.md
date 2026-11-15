# Mathe Lernblatt · Klausur 23.11.2026

Deutschsprachige Stochastik-Lernwebsite als interaktives Arbeitsblatt. Bordeaux, helles Creme und dezente Rosétöne. Eine große grafische Arbeitsfläche, ein abgesetzter Rechenbereich und kompakte Navigation bestimmen das Layout. Reines HTML/CSS/JavaScript ohne Build-Schritt. Bricolage Grotesque und Instrument Sans werden lokal mitgeliefert; keine Font-Anfragen an Drittserver.

## Starten

`index.html` im Browser öffnen oder den Ordner lokal über einen statischen Webserver ausliefern, zum Beispiel `python -m http.server 4173`.

Für GitHub Pages: Im Repository **Settings → Pages → Deploy from a branch → main → / (root) → Save** wählen. Die Website ist für diesen Unterordner vorbereitet; alle Assetpfade sind relativ. Der Upload des Codes allein aktiviert GitHub Pages nicht.

## Enthalten

- Lernen: sieben Themen mit Erklärungen, Beispielen und PDF-Seitenangaben.
- Üben: 18 Aufgaben, Filter nach Thema und Hilfsmitteln, gestufte Tipps und Musterlösungen.
- Glockenkurve: Grenzen per Regler, links/rechts/zwischen, veränderbare μ/σ, Flächenbeispiele mit Animation.
- Kumulierte Φ-Tabelle von 0,00 bis 3,99; Originaltabelle fehlt, Konvention wurde bestätigt.
- Probeklausur: 10 Aufgaben, 30 Punkte hilfsmittelfrei und 70 Punkte mit Hilfsmitteln. Rechenwege und Antworten werden gespeichert; Lösungen erscheinen nach Abgabe. Automatische Auswertung nur der Endergebnisse, keine schulische Note.
- Lokaler Lernfortschritt und Klausureingaben in `localStorage`; kein Konto, Backend, Tracking oder Versand von Antworten.
- Responsives Layout, Tastaturnavigation, sichtbare Fokuszustände und reduzierte Animationen bei entsprechender Systemeinstellung.

## Quellen und fachliche Prüfung

Inhaltlicher Umfang: Klausurankündigung aus dem bereitgestellten Screenshot. Erklärungen und Quellenbeispiele: `Mathe 2.pdf`, 63 PDF-Seiten. Die Originalunterlagen werden nicht im Repository veröffentlicht. Herkunft und fehlende Buch-/Arbeitsblattseiten sind auf „Quellen & Materialien“ dokumentiert. Eigene Aufgaben und neu formulierte Aufgaben aus der PDF sind getrennt gekennzeichnet.

Die handschriftliche Stetigkeitskorrektur bei einer bereits stetigen Füllmenge auf PDF-Seite 53 wurde korrigiert. Parabel-/Ellipsenansatz werden als normalbasiertes Score-Intervall eingeordnet, statt sie als exakt binomiales Verfahren zu bezeichnen.

Die TI-Funktionsargumente sind zusätzlich mit der offiziellen Referenz zu [normCdf](https://education.ti.com/html/webhelp/eg_tinspire/en/Subsystems/EG_RefGuide_CAS/Content/M_RefGuide/RG_alpha_N.HTML) und [invNorm](https://education.ti.com/html/webhelp/EG_TINspireLUA/EN/Subsystems/TI-Nspire%E2%84%A2%20RefeGuide/content/eg_refguide/m_refguide/rg_alpha_i.htm) abgeglichen.

## Prüfung

Mit Node.js ohne Zusatzpakete: `node tests/math.test.cjs`.

Browserprüfung im isolierten Chromium: Startseite, alle sieben Lektionen, Flächenmodi, Regler, μ/σ-Validierung, Presets, Themenfortschritt, Filter, Tipps und Lösungen, Tabellenaufbau, Klausur ohne vorzeitige Lösungen bzw. z-Formel, Speicherung nach Neuladen sowie vollständiger 100/100-Punktedurchlauf. Desktop 1440 px, Handy 390 px und schmaler Bildschirm 320 px; kein horizontaler Seitenüberlauf und keine JavaScript-Seitenfehler. Desktop- und Handyansichten wurden visuell geprüft.

Die vollständige Einzelprüfung der 20 UI-Regeln und aller 22 Hintergrundideen steht in [DESIGN-PRUEFUNG.md](DESIGN-PRUEFUNG.md).

## Dateien

`index.html`, `styles.css`, `math.js`, `content.js`, `app.js`, `favicon.svg`. Die Website benötigt keine zusätzlichen Bilddateien. Die beiden lokalen Schriftdateien liegen in `fonts/`.

## Schriften

[Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) und [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans), bezogen aus Google Fonts. Beide stehen unter der SIL Open Font License. Die vollständigen Lizenz- und Copyrighttexte liegen in `fonts/bricolage-OFL.txt` und `fonts/instrument-OFL.txt`.
