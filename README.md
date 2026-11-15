# Croco – Lieferantengeführtes Lager (VMI)

Web-App für die dynamische Disposition eines KVH-Lagers: Aus den Verkäufen wird der Bedarf berechnet und daraus der Einschnitt im Sägewerk geplant (Vorlauf und Einschnitt, Trocknungszeit nach Holzart und Stärke, Produktionszeit im KVH-Werk, Transport).

- Webseite: https://croco.voetter.work
- Die ganze App liegt in `public/index.html` (kein Build nötig).
- Auslieferung über einen Cloudflare Worker mit statischen Dateien (`wrangler.jsonc`).
- Erste Version: Daten liegen nur im Browser (Beispieldaten), noch keine Anmeldung und keine Datenbank.
