---
name: BitsButler Tafel
description: Aus fünf Metern — die Anzeigetafel neben dem Tisch, mit Zählgerät und Schiedsrichtermenü.
colors:
  house-accent: "#00afee"
  on-accent: "#00222f"
  ground: "#05080d"
  key: "#0b1220"
  line: "#1b2432"
  ink: "#ffffff"
  ink-dim: "#93a1b3"
  shotclock: "#ffc53d"
  success: "#33cb81"
  on-success: "#04240f"
  danger: "#ff5252"
  on-danger: "#2b0000"
  warning: "#fc8c3a"
  sponsor-plate: "#ffffff"
typography:
  score:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  table-sign:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "min(14cqh, 34cqw)"
    fontWeight: 900
    letterSpacing: "0.02em"
  surname:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontWeight: 800
    lineHeight: 1.02
  given-name:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontWeight: 500
    lineHeight: 1.1
  head:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "min(3.4dvh, 3vw)"
    fontWeight: 600
    letterSpacing: "0.04em"
  key-word:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "min(3.4dvh, 100cqw)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  key-hint:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "min(1.9dvh, 100cqw)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.04em"
  foot:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "min(2.4dvh, 1.9vw)"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  plate: "0.4cqh"
  key: "1dvh"
  sponsor: "1.2dvh"
  capsule: "999px"
spacing:
  board-x: "4dvh"
  board-top: "2.5dvh"
  key-min: "64px"
components:
  key-plus:
    backgroundColor: "{colors.house-accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.key}"
    typography: "{typography.key-word}"
    height: "max(9dvh, 64px)"
  key-minus:
    backgroundColor: "{colors.key}"
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.key}"
    width: "max(9dvh, 64px)"
    height: "max(9dvh, 64px)"
  key-neutral:
    backgroundColor: "{colors.key}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    height: "max(9dvh, 64px)"
  key-finish:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    rounded: "{rounded.key}"
  break-bar:
    backgroundColor: "{colors.house-accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.plate}"
  discipline-capsule:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.capsule}"
    padding: "0.3em 0.85em"
  timeout-over:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-danger}"
    rounded: "{rounded.plate}"
---

# Design System: BitsButler Tafel

## Overview

**Creative North Star: „Aus fünf Metern“**

Die Tafel ist der Bildschirm neben dem Tisch. Spieler, Schiedsrichter und
Publikum lesen sie aus fünf Metern, unter Tischlampen und Streulicht, und auf
einem freigegebenen Gerät zählt der Schiedsrichter auf ihr. Jede
Entscheidung an dieser Oberfläche ist an diesem Abstand bemessen. Der Stand
ist das größte Element des Bildes, der Grund ist fast schwarz, die Schrift
weiß, und es gibt genau einen Akzent. Dazwischen bleibt Luft, und die ist
nicht verschenkt: Sie trennt die Blöcke so weit, dass das Auge zuerst die
Zahl findet.

Die Tafel hat keine Schriftgrößen in Pixeln. Alle Höhen sind `dvh` und
innerhalb der Spalten Containermaße (`cqh`, `cqw`), damit ein 32-Zoll- und
ein 75-Zoll-Bildschirm dasselbe Bild zeigen. Gerechnet ist mit 16:9 quer.
Hochkant ist es dieselbe Tafel, nur niedriger.

Die Tafel ist eine Anzeige und kein Dokument. Nichts lässt sich markieren,
nichts zoomt beim doppelten Tippen, nichts blitzt grau auf, und die Seite
scrollt nicht. Ein langer Druck öffnet das Schiedsrichtermenü. Jede
Fehlbedienung lässt sich zurücknehmen, mit „Undo“ für den letzten Eintrag
oder im Menü, etwa für eine versehentlich genommene Auszeit.

**Key Characteristics:**
- Fast schwarzer Grund, weiße Schrift, ein Hausakzent
- Der Stand ist das größte Element: Montserrat Black, tabellarische Ziffern
- Versalien mit Sperrung für alles außer dem Vornamen
- Alle Maße in dvh/cqh statt Pixeln, damit jede Bildschirmgröße dasselbe Bild zeigt
- Tasten mindestens 64 px hoch, damit man sie mit Kreide am Finger trifft
- Keine Markierung, kein Zoom, kein Scrollen, kein Tipp-Aufblitzen

## Colors

Eine dunkle Saalpalette, in der Farbe nur zwei Dinge sagt: wem die Tafel
gehört (Hausakzent) und was gerade dran ist (Zustand).

### Primary
- **Hausakzent** (`house-accent`, Variable `--accent`): die Farbe des
  Veranstalters. Sie trägt Tischschild, Anstoßbalken, Plus-Taste,
  Auszeitrahmen, die Kapsel der Disziplin, den Satzstand und die Überschrift
  im Schiedsrichtermenü. Sie erscheint nie als großflächiger Grund. Gesetzt
  wird sie über `--color-primary`; #00afee ist die Rückfallfarbe.
- **Schrift auf Akzent** (`on-accent`): ein tiefes Petrol für Text auf der
  Akzentfläche.

### Secondary
Die **Zustandsfarben**, je mit eigener Schriftfarbe für Text auf der Fläche:
- **Shot-Clock** (`shotclock`): ein eigenes Gelb und nicht `--color-warning`
  des Hauses. Es gilt auch für das abgelaufene Zeitlimit. Gelb ist im Billard
  ohnehin die Farbe der Verwarnung, und die Shot-Clock ist deren leichteste
  Stufe.
- **Abschluss** (`success`): die Taste „Finish“ und der Verbindungspunkt in
  der Fußzeile.
- **Gefahr** (`danger`): überzogene Auszeit, fehlende Trikotkontrolle,
  fehlender Anstoß, Abweisung. Rot ist damit schon dreifach belegt.
- **Hinweis** (`warning`): Zählhinweise über der Zählleiste.

### Neutral
- **Saalgrund** (`ground`): der Grund jeder Tafelseite, auch auf `html` und
  `body`.
- **Tastenfläche** (`key`): neutrale Tasten und Flächen im Menü.
- **Linie** (`line`): Tastenränder, Trennlinien, Trenner in der Fußzeile.
- **Schrift** (`ink`) und **gedämpft** (`ink-dim`): Stand, Nachnamen und
  Tasten in Weiß; Vornamen, Kopfzeile, Fußzeile und Minus-Taste gedämpft.
- **Sponsorentafel** (`sponsor-plate`): eine weiße Platte, auf der Logos im
  Leerlauf überblenden.

### Named Rules
**Die Hausfarben-Regel.** Der Akzent gehört dem Veranstalter und wechselt je
Haus. Alles, was gelesen werden muss (Shot-Clock, Gefahr, Abschluss), hängt
dagegen nie davon ab, welches Haus gerade seine Farben gesetzt hat, und hat
deshalb feste Werte.

**Die Kein-Grund-Regel.** Die Hausfarbe erscheint als Akzent auf Schwarz,
nie als Fläche hinter dem Bild. Eine Marke für weißen Grund wird nicht auf
die Tafel übertragen.

**Offene Lücke.** In bb-score setzt heute keine Datei `--color-primary`.
Die Hausfarbendatei (`tenant.css`) lag in epbf-website und kam bei der
Trennung nicht mit. Deshalb zeigt jede Tafel die Rückfallfarbe #00afee,
gleich welchem Haus sie gehört. Für `--color-success`, `--color-danger` und
`--color-warning` gilt dasselbe.

Die Kontraste sind gerechnet und liegen alle über WCAG 2.2 AA: Schrift auf
Saalgrund 20,1:1, gedämpft 7,6:1, Akzent auf Saalgrund 8,0:1, Schrift auf
Akzent 6,6:1, Shot-Clock 12,7:1.

## Typography

**Display Font:** Montserrat (600, 700, 900; lokal ausgeliefert über
`@nuxt/fonts`)
**Body Font:** Montserrat, Ersatz system-ui
**Label/Mono Font:** keine

**Character:** Eine geometrische Grotesk in schweren Schnitten, die aus der
Ferne als Form gelesen wird, bevor man sie liest. Die Schriftgrößen sind
gegen die wirklich geladene Montserrat vermessen (`Side.vue`). Eine
Ersatzschrift würde das Bild verschieben.

### Hierarchy
- **Score** (900, 0.82, -0.03em): der Stand. Seine Größe wird je Spalte
  ausgerechnet und ist immer das Größte im Bild.
- **Tischschild** (900, min(14cqh, 34cqw)): die Tischnummer in der Mitte, im
  Hausakzent.
- **Nachname** (800, 1.02, Versalien): darüber die Flagge.
- **Vorname** (500, 1.1, gedämpft): die einzige Stelle ohne Versalien.
- **Kopf und Fuß** (600, min(3.4dvh, 3vw) bzw. min(2.4dvh, 1.9vw), 0.04em,
  Versalien): Wappen bzw. Veranstalter oben; Wettbewerb, Runde, Match,
  Uhrzeit, Distanz und Zustand unten, mit gedämpften Punkten getrennt.
- **Tastenwort** (700, min(3.4dvh, …), Versalien; Plus und Finish 800 und
  größer) mit **Tastenhinweis** (600, min(1.9dvh, …), 75 % Deckkraft).

### Named Rules
**Die dvh-Regel.** Jedes Höhenmaß ist `dvh` und nie `vh`, auch in `min()`
und in ausgerechneten Schriftgrößen. Auf iOS Safari ist `vh` größer als das
Sichtbare. Am 16.09.2026 lagen deshalb auf dem iPad des Auftraggebers die
Namen über der Kugelreihe.

**Die Ziffern-Regel.** `tabular-nums` auf der ganzen Tafel, damit der Stand
beim Wechsel von 9 auf 10 nicht springt.

**Bekannte Abweichung.** Geladen sind die Schnitte 600, 700 und 900.
Nachname, Tasten und Kapseln verlangen 800, der Vorname 500. Der Browser
weicht auf 900 bzw. 600 aus. Die Maße sind gegen das gerenderte Ergebnis
vermessen, das Bild stimmt also. Die Angaben im Code sagen aber etwas
anderes, als zu sehen ist.

## Layout

- **Raster:** vier Zeilen, nämlich Kopf, Tafel, Zählleiste, Fuß
  (`grid-template-rows: auto 1fr auto auto`). Die Zählleiste ist auf einem
  Bildschirm an der Wand leer und kostet dann nichts. Kommt sie dazu, behält
  die Tafel ihre Höhe.
- **Tafel:** außen die beiden Spieler, in der Mitte, was ihnen gemeinsam ist,
  also Wappen, Tischschild, Disziplinkapsel, Begegnung und gegebenenfalls
  Zeitlimit oder Satzstand. Je Seite steht oben der Stand mit dem
  Anstoßbalken darunter, unten die Flagge, der Nachname und der Vorname.
- **Zählleiste:** je Spieler eine breite Plus-Taste und eine schmale
  Minus-Taste, darunter die Auszeit. In der Mitte stehen „Undo“ und „Finish“.
  Jede Taste trägt ihre Tastaturziffer in der Ecke.
- **Ränder:** 4dvh seitlich, 2.5dvh oben. Die Spalten messen an sich selbst
  (`container-type`), damit ein langer Name nicht aus dem Bild läuft.
- **Kein Scrollen:** `height: 100dvh`, `overflow: hidden`, kein Gummiband
  (`overscroll-behavior: none`).
- **Leerlauf:** Ist kein Spiel auf dem Tisch, zeigt die Tafel Tischnummer,
  Veranstaltung und Hinweis groß. Bei Sponsoren laufen deren Logos als
  Karussell auf weißen Platten und blenden über, statt umzuschalten.

## Elevation & Depth

Flach. Die Tafel hat keine Schatten. Ebenen entstehen durch Flächen (Saal,
Taste, Akzent) und durch Abdunkeln. Das Schiedsrichtermenü legt sich als
fast deckende Saalfläche (`rgb(5 8 13 / 97%)`) über die Tafel. Sie bleibt
dahinter schemenhaft sichtbar, und der Stand steht im Kopf des Menüs.

### Named Rules
**Die Abdunkeln-statt-Anheben-Regel.** Was darüber liegt, deckt ab. Es
schwebt nicht.

## Shapes

Kantig mit kleinem Radius für alles, was eine Platte ist: Anstoßbalken,
Auszeit und Shoot-out-Zeichen (0.4 bis 0.5cqh), Tasten (1dvh),
Sponsorentafeln (1.2dvh). Voll gerundet ist nur, was eine Kapsel ist,
nämlich die Disziplin (Rahmen im Akzent), das Zeitlimit und der Satzstand.
Tasten haben einen 2 px Rand. Flaggen tragen eine minimale Rundung.

## Components

### Buttons
Groß, flach, mit Kreide am Finger zu treffen.
- **Shape:** 1dvh Radius, 2 px Rand, mindestens max(9dvh, 64px) hoch.
- **Plus** (`key-plus`): Hausakzent als Fläche, Schrift auf Akzent, 800, mit
  dem Nachnamen als Hinweis.
- **Minus** (`key-minus`): schmal und quadratisch, gedämpfter Rand und
  gedämpfte Schrift.
- **Neutral** (`key-neutral`): Tastenfläche mit Linienrand, z. B. „Time out
  · 2 left“ oder „Undo · last entry“.
- **Finish** (`key-finish`): Abschlussgrün, ausgegraut, solange niemand die
  Distanz erreicht hat („Nobody has reached 9“).
- **Gesperrt:** blass (0.4) und mit passendem Zeiger, aber nicht
  ausgeblendet.

### Chips
- **Anstoßbalken** (`break-bar`): volle Breite unter dem Stand, Hausakzent,
  „BREAK“ in 800 mit 0.3em Sperrung.
- **Auszeit:** Rahmen im Akzent. Ist sie überzogen, wird sie zur roten Fläche
  mit dunkelroter Schrift.
- **Disziplinkapsel** (`discipline-capsule`): Rahmen im Akzent, voll
  gerundet, 800.
- **Zeitlimit-Kapsel** (Heyball): gefüllt mit 10 % Weiß. Angehalten ist sie
  ohne Fläche und gedämpft, abgelaufen im Shot-Clock-Gelb.
- **Shoot-out-Zeichen:** kleine Akzentplatte über der Zahl.

### Cards / Containers
- **Schiedsrichtermenü:** eine fast deckende Saalfläche. Im Kopf stehen beide
  Namen und der Stand, darunter „REFEREE“ im Akzent und „Close“ mit
  der Tastaturziffer 0. Gruppen wie „Time-out taken by mistake“, „A player stops“ und
  „This screen“ sind gedämpfte Versalien. Jede Aktion ist eine breite Taste
  mit Folge-Hinweis („Kural wins 4–6“). Folgenschweres fragt zurück.
- **Sponsorentafel:** weiße Platte (1.2dvh Radius), Logo mit vorgegebener
  Höhe je Rang.

### Navigation
- **Kopf:** Wappen bzw. Name des Veranstalters zentriert, Tischnummer im
  Akzent.
- **Fuß:** eine Zeile mit Wettbewerb (in voller Schrift), Runde, Match,
  Uhrzeit, Distanz und Zustand. Rechts ein grüner Punkt für die Verbindung,
  der sich bei Verbindungsverlust oder unbestätigtem Stand ändert.
- **Tischwahl** (`/board`, `/board/[eventId]`): dieselbe Saalpalette und
  dieselben Variablen, Tischfelder groß und ohne Markieren.

## Do's and Don'ts

### Do:
- **Do** jedes Maß in `dvh` bzw. Containermaßen (`cqh`, `cqw`) angeben, auch
  Schriftgrößen. Nie `vh`, nie Pixel, außer als Untergrenze für Tasten
  (64 px).
- **Do** den Stand als größtes Element setzen und Luft zwischen Stand und
  Namen lassen.
- **Do** den Hausakzent nur als Akzent auf Schwarz einsetzen und Zustände,
  die gelesen werden müssen, mit festen Werten.
- **Do** jede Bedienung zurücknehmbar machen und Folgenschweres mit Rückfrage
  und Folge-Hinweis absichern.
- **Do** auf jeder Tafelseite Markieren, Doppeltipp-Zoom, Tipp-Aufblitzen und
  Gummiband abschalten (`.board-screen`).
- **Do** neue Maße gegen die geladene Montserrat vermessen, im Querformat
  16:9 und im Hochformat.

### Don't:
- **Don't** die Hausfarbe als Fläche hinter das Bild legen.
- **Don't** `--color-warning` des Hauses für die Shot-Clock verwenden. Sie
  hat ihr eigenes Gelb.
- **Don't** Rot für etwas Neues belegen. Es steht schon für überzogene
  Auszeit, fehlende Trikotkontrolle, fehlenden Anstoß und Abweisung.
