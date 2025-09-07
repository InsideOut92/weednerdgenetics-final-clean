
# WeedNerdGenetics — Clean, Interactive Template (Final)

This is a cleaned, ready-to-customize Next.js project (no node_modules included).
It contains your uploaded images, two example products, styling, AgeGate, and an optional Stripe checkout route.

---
## Quickstart (macOS / Windows / VS Code)

1. Unzip the archive and open the folder in **VS Code**.
2. Open Terminal in VS Code: View → Terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

---
## Projektstruktur (wichtigste Dateien)
- `app/` — Next.js App Router pages and global css (`app/layout.tsx`, `app/globals.css`)
- `components/` — Navbar, Footer, AgeGate, ProductCard, PortalBackground
- `data/products.ts` — Product data (name, price, image, description)
- `public/images/` — Logo + product images + hero art
- `.gitignore` — excludes node_modules and .next
- `app/api/checkout/route.ts` — Example Stripe checkout route (requires .env.local to enable)

---
## Wie du produktbilder, beschreibungen & texte änderst (Einfach & Schritt-für-Schritt)

### Produktbilder ersetzen
1. Öffne den Ordner `public/images/`
2. Kopiere deine Produktbilder hinein, z. B. `product3.jpg`
3. Öffne `data/products.ts` und ändere die `image`-Eigenschaft des Produkts auf `/images/product3.jpg`
4. Speichere — die Seite hot-reloaded und zeigt das neue Bild.

### Produktdaten (Name, Preis, Beschreibung) ändern
1. Öffne `data/products.ts`
2. Dort findest du ein Array `products` mit Objekten. Ändere `name`, `price`, `description` nach Bedarf.
3. Speichern → Browser aktualisiert automatisch.

### Logo ersetzen
1. Ersetze `public/images/logo-weednerd.png` durch dein Logo (gleicher Dateiname)
2. Optional: Passe Größe im CSS `app/globals.css` `.logo-img` an.

### Farben & Theme anpassen
1. Öffne `app/globals.css`
2. Ganz oben sind CSS-Variablen:
   ```css
   :root {
     --brand-green: #2EA043;
     --brand-dark: #071B0C;
     --accent-cream: #F6E7C0;
   }
   ```
   Ändere die Hex-Codes nach Wunsch.
3. Für Tailwind-spezifische Farben: passe `tailwind.config.js` an.

### Texte (About/Contact/Footer) anpassen
- `app/about/page.tsx`, `app/contact/page.tsx`, `components/Footer.tsx` → Text direkt editieren.

---
## Stripe Test-Checkout (optional, sicher aktivieren)

1. Erstelle bei Stripe ein Konto und kopiere die **Test Secret Key** (`sk_test_...`) und **Publishable Key** (`pk_test_...`).
2. Lege im Projekt eine Datei `.env.local` an (nicht ins Git einchecken):
   ```env
   STRIPE_SECRET_KEY=sk_test_xxx
   NEXT_PUBLIC_BASE_URL=https://your-deploy-domain.example
   ```
3. In `app/api/checkout/route.ts` sind Beispielcodes kommentiert — du kannst sie aktivieren, wenn du Stripe installiert und Schlüssel gesetzt hast.
4. Testweise kannst du Stripe's test card verwenden: `4242 4242 4242 4242` (MM/YY any future, CVC 123).

---
## GitHub & sauberes Pushen (das Problem mit großen Dateien vermeiden)
1. Stelle sicher, `.gitignore` enthält `node_modules/` und `.next/` (diese Datei ist im Projekt enthalten).
2. Wenn du bereits einen fehlerhaften Push hattest, entferne lokalen Git-Ordner und starte neu:
   ```bash
   rm -rf .git
   git init
   git branch -M main
   git remote add origin https://github.com/InsideOut92/weednerdgenetics.git
   git add .
   git commit -m "Initial clean commit"
   git push -u --force origin main
   ```
   (Der `--force` überschreibt das alte Repo — nur ausführen, wenn du sicher bist.)

---
## Deployment (Vercel empfohlen)
1. Push repo zu GitHub (siehe oben).
2. In Vercel: New Project → Import from GitHub → wähle das Repo.
3. Vercel erkennt Next.js. Klicke Deploy.
4. Füge in Vercel → Settings → Environment Variables die `STRIPE_SECRET_KEY` (nur wenn du Stripe aktivieren willst).
5. Domain: In Vercel kannst du eine benutzerdefinierte Domain hinzufügen und die DNS-Einträge beim Registrar setzen.

---
## Hinweise & Haftung
- Diese Vorlage ist für den legalen Verkauf von **Cannabis-Samen** als Souvenir gedacht. Prüfe und halte alle lokalen Gesetze ein. Kein Verkauf an Minderjährige.
- Verwende nur Bilder, deren Rechte du besitzt. Wenn das Rick-&-Morty-artige Bild nicht dir gehört, nutze es nicht kommerziell.

---
Wenn du willst, kann ich jetzt:
- 1) ein GitHub-Repository automatisch für dich vorbereiten (ich gebe dir die fertigen Befehle und Dateien), oder
- 2) die Stripe-Integration komplett fertig einbauen und testen (du gibst mir Test-Keys), oder
- 3) Feinschliff am Styling (Button-Design, Typo, mobile layout) durchführen und eine weitere ZIP liefern.

Sag mir, welchen Schritt du als nächstes möchtest — ich mache ihn sorgfältig.
