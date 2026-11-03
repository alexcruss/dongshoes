/* =========================================================
   DONGSHOES — tout le contenu modifiable du site est ici.
   Pour changer un prix, un nom ou le numéro : modifiez ce
   fichier puis enregistrez. Ne touchez pas aux autres fichiers.
   « à confirmer » = information pas encore donnée par le client.
   Source des infos : page Facebook « Dong » (novembre 2026).
   ========================================================= */

const SITE = {
  nom: 'Dongshoes',
  marque: 'ĐONG',
  devise: 'Ambition, excellence, audace',
  slogan: 'L\'excellence du cuir à la portée de vos ambitions',
  presentation: 'Dong propose aux jeunes cadres et entrepreneurs des chaussures en cuir de haute qualité, conçues avec la rigueur d\'un savoir-faire certifié. Portez le signe de l\'élévation juste.',
  // Numéro WhatsApp au format international SANS + ni espaces
  whatsapp: '22872424217',
  telephoneAffiche: '+228 72 42 42 17',
  email: 'Dongshoestg@gmail.com',
  ville: 'Lomé',
  quartier: 'Avédji',
  adresse: 'Avédji, non loin de la Casa del Papel, Lomé',
  horaires: 'Du lundi au samedi, de 9 h à 21 h',
  livraison: 'Partout dans le monde',
  paiement: 'à confirmer',
  facebook: 'https://www.facebook.com/profile.php?id=61586924373002',
  tiktok: 'https://www.tiktok.com/@dongshoes.tg',
  tiktokNom: '@dongshoes.tg',
  instagram: 'https://www.instagram.com/dong.shoes.tg',
  instagramNom: '@dong.shoes.tg',
  url: 'https://alexcruss.github.io/dongshoes/',
  portfolio: 'https://pierredegboevi.com/',
  realisation: 'Pierre Kossi DEGBOEVI'
};

/* Grandes images d'accueil (diaporama) */
const SLIDES = [
  { surtitre: 'Ambition, excellence, audace', titre: 'Dongshoes', texte: 'Chaussures en cuir pour homme à Lomé', photo: 'img/produits/mocassin-penny-bicolore.jpg' },
  { surtitre: 'Bleu marine, blanc et orange', titre: 'Penny tricolore', texte: 'Le nouveau mocassin en cuir grainé', photo: 'img/produits/mocassin-penny-tricolore-2.jpg' },
  { surtitre: 'Pour le bureau et les cérémonies', titre: 'Mocassins', texte: 'Cuir bicolore, semelle soignée', photo: 'img/produits/mocassin-bicolore-blanc.jpg' },
  { surtitre: 'Le daim, version élégante', titre: 'Derbies', texte: 'Livraison partout dans le monde', photo: 'img/produits/derby-daim.jpg' }
];

/* Catégories (onglets de la section « Nos modèles ») */
const CATEGORIES = [
  { id: 'tous', nom: 'Tous' },
  { id: 'mocassins', nom: 'Mocassins' },
  { id: 'derbies', nom: 'Derbies' }
];

/* Noms de la collection cités sur Facebook (à associer aux bons modèles) */
const COLLECTION = ['Pesse', 'Xose', 'Kondo', 'Hustler'];

/* Produits.
   - nom : nom affiché. Remplacer par Pesse / Xose / Kondo / Hustler quand le client confirme.
   - prix : texte en FCFA, ex '35 000 F'
   - photo / photo2 : chemins vers img/produits/ */
const PRODUITS = [
  { id: 'p5', nom: 'Mocassin penny tricolore', detail: 'Cuir grainé bleu marine, blanc et orange', categorie: 'mocassins', prix: 'à confirmer', badge: 'Nouveau', photo: 'img/produits/mocassin-penny-tricolore.jpg', photo2: 'img/produits/mocassin-penny-tricolore-3.jpg' },
  { id: 'p1', nom: 'Mocassin penny bicolore', detail: 'Cuir marron, blanc et camel', categorie: 'mocassins', prix: 'à confirmer', badge: 'Nouveau', photo: 'img/produits/mocassin-penny-bicolore.jpg', photo2: 'img/produits/mocassin-penny-bicolore-2.jpg' },
  { id: 'p2', nom: 'Mocassin bicolore', detail: 'Cuir marron et blanc, trépointe camel', categorie: 'mocassins', prix: 'à confirmer', badge: '', photo: 'img/produits/mocassin-bicolore-blanc.jpg' },
  { id: 'p3', nom: 'Derby bicolore', detail: 'Cuir cognac, blanc et chocolat', categorie: 'derbies', prix: 'à confirmer', badge: '', photo: 'img/produits/derby-bicolore.jpg' },
  { id: 'p4', nom: 'Derby en daim', detail: 'Daim chocolat, lacets cirés', categorie: 'derbies', prix: 'à confirmer', badge: 'Populaire', photo: 'img/produits/derby-daim.jpg', photo2: 'img/produits/derby-daim-2.jpg' }
];

/* Vidéos (reels Facebook) : miniature locale, lecteur chargé au clic */
const VIDEOS = [
  { id: '2144525999702350', titre: 'Présentation de la boutique', vues: '14 K vues', miniature: 'img/reseaux/reel-2144525999702350.jpg' },
  { id: '1656658855602495', titre: 'Le modèle en main', vues: '444 vues', miniature: 'img/reseaux/reel-1656658855602495.jpg' },
  { id: '1682342549848492', titre: 'Porté au quotidien', vues: '429 vues', miniature: 'img/reseaux/reel-1682342549848492.jpg' },
  { id: '1476692237252552', titre: 'Le détail qui change tout', vues: '68 vues', miniature: 'img/reseaux/reel-1476692237252552.jpg' }
];

/* Questions fréquentes (reprises dans les données Google de index.html) */
const FAQ = [
  { q: 'Comment commander chez Dongshoes ?', r: 'Appuyez sur « Commander » sous le modèle choisi. WhatsApp s\'ouvre avec un message déjà rempli : ajoutez votre pointure et envoyez. Vous pouvez aussi appeler le +228 72 42 42 17.' },
  { q: 'Où se trouve la boutique ?', r: 'À Avédji, Lomé, non loin de la Casa del Papel.' },
  { q: 'Livrez-vous hors de Lomé ?', r: 'Oui, Dong livre partout dans le monde. Demandez les frais et délais pour votre ville sur WhatsApp.' },
  { q: 'Quels moyens de paiement acceptez-vous ?', r: 'Moyens de paiement : à confirmer. Demandez sur WhatsApp.' },
  { q: 'Comment connaître ma pointure ?', r: 'Indiquez la pointure que vous portez d\'habitude (par exemple 42). En cas de doute, envoyez la longueur de votre pied en centimètres et nous vous conseillons.' }
];
