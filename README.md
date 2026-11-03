# Dongshoes — site vitrine

Site vitrine de **Dongshoes** (page Facebook « Dong »), chaussures en cuir pour homme à Avédji, Lomé (Togo). Les clients voient les modèles et commandent sur WhatsApp avec un message déjà rempli (modèle, pointure, couleur).

- Réseaux : [Facebook Dong](https://www.facebook.com/profile.php?id=61586924373002) · [TikTok @dongshoes.tg](https://www.tiktok.com/@dongshoes.tg) · [Instagram @dong.shoes.tg](https://www.instagram.com/dong.shoes.tg)
- Adresse prévue : https://alexcruss.github.io/dongshoes/
- Mise en page inspirée du modèle fourni : bandeau bordeaux avec logo au centre, grand visuel, mosaïque de bannières, grille « Nos modèles » avec onglets.

## Pour… / Modifier

| Pour… | Modifier |
|---|---|
| Numéro WhatsApp, horaires, adresse, livraison, paiement | `js/data.js` → `SITE` (`whatsapp` au format `228XXXXXXXX`) |
| Ajouter / changer un produit, un prix | `js/data.js` → `PRODUITS` (prix en texte : `'15 000 F'`) |
| Mettre une vraie photo | déposer `img/produits/nom.jpg` puis `photo: 'img/produits/nom.jpg'` |
| Retirer la mention « Modèle d'exemple » | `exemple: false` sur le produit |
| Catégories (onglets) | `js/data.js` → `CATEGORIES` |
| Textes du diaporama | `js/data.js` → `SLIDES` |
| Vidéos (reels Facebook) | `js/data.js` → `VIDEOS` (id du reel + miniature dans `img/reseaux/`) |
| Questions fréquentes | `js/data.js` → `FAQ` (et le bloc FAQPage dans `index.html`) |
| Couleurs, polices | `css/style.css` (variables en haut) |

Tant qu'un produit n'a pas de photo, un dessin de chaussure s'affiche.

## Informations reprises de Facebook (page « Dong »)

Présentation, téléphone +228 72 42 42 17, e-mail Dongshoestg@gmail.com, adresse (Avédji, non loin de la Casa del Papel), livraison partout dans le monde, devise « Ambition, excellence, audace », noms de collection (Pesse, Xose, Kondo, Hustler), 6 photos produits, bannière, 4 miniatures de reels.

## À demander au client

- [x] Confirmer que le +228 72 42 42 17 est bien sur WhatsApp (confirmé le 03/11/2026)
- [ ] Associer chaque photo à son nom : Pesse, Xose, Kondo, Hustler
- [ ] Prix de chaque modèle et pointures disponibles
- [x] Horaires d'ouverture (lundi au samedi, 9 h à 21 h, confirmé le 03/11/2026)
- [ ] Moyens de paiement (espèces, Flooz, T-Money…)
- [ ] Frais et délais de livraison (Lomé, Togo, étranger)
- [x] Logo (reçu le 03/11/2026, noir sur blanc, 640 px) : une version en haute définition ou en SVG serait un plus
- [ ] Autorisation d'afficher les personnes qui apparaissent dans les vidéos
- [ ] Autres modèles à ajouter (photos)

## Technique

- HTML, CSS et JavaScript sans dépendance ni compilation. Polices Google : Marcellus, Allura, Nunito Sans.
- Thème clair et sombre automatique.
- Pas de `alert()` / `confirm()`.
- Référencement : title, description, canonical, Open Graph, données structurées `ShoeStore` + `WebSite` + `FAQPage`, `sitemap.xml`, `robots.txt`.
- Test local : `py -m http.server 8090 --directory DONGSHOES` puis http://localhost:8090

## Publication (GitHub Pages, compte alexcruss)

1. Créer le dépôt `dongshoes` sur GitHub, y pousser ce dossier sur `main`.
2. Settings → Pages → Source : **GitHub Actions**. Le workflow `.github/workflows/static.yml` publie à chaque push.
3. Messages de commit en français.

## Google

1. Search Console → ajouter `https://alexcruss.github.io/dongshoes/` → méthode **balise HTML** → coller la balise dans `index.html` (emplacement commenté).
2. Envoyer `sitemap.xml`.
3. Inspection d'URL → **Demander l'indexation**.
4. Google Business Profile : à créer par le client (catégorie « Magasin de chaussures », Lomé), avec le lien du site.

Après une modification de `css/style.css` ou des fichiers `js/`, augmenter le numéro `?v=` dans `index.html` (sinon les téléphones gardent l'ancienne version en cache).
