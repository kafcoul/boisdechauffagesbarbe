# 📝 Liste des Modifications à Effectuer

## ⚠️ IMPORTANT - À Faire Avant le Déploiement

### 1. Coordonnées à Remplacer

Chercher et remplacer dans **tous les fichiers**:

- `(418) 555-1234` → Votre vrai numéro
- `info@boisnord.ca` → Votre vraie adresse email
- `1234 Route de la Forêt, Québec, QC G1A 1A1` → Votre vraie adresse

**Fichiers concernés:**
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/contact/ContactPageClient.tsx`
- `.env.example`

### 2. Images à Ajouter

Actuellement, le site utilise des emojis (🪵, 🍁, 🌳, etc.) comme placeholders.

**Créer le dossier:**
```bash
mkdir -p public/images
```

**Images recommandées à ajouter:**
- `logo.png` - Logo BoisNord (200x200px)
- `hero-bg.jpg` - Image de fond accueil (1920x1080px)
- `bois-erable.jpg` - Photo d'érable
- `bois-bouleau.jpg` - Photo de bouleau
- `bois-frene.jpg` - Photo de frêne
- `camion-livraison.jpg` - Photo camion
- `equipe.jpg` - Photo de l'équipe
- `favicon.ico` - Icône du site (32x32px)

### 3. Prix à Vérifier/Ajuster

Dans `app/produits/page.tsx`:
- Érable Dur: 320$ / 170$ (demi)
- Bouleau Jaune: 290$ / 155$ (demi)
- Frêne Blanc: 280$ / 150$ (demi)
- Mélange Premium: 295$ / 160$ (demi)
- Bois d'Allumage: 45$
- Copeaux: 25$

### 4. Zones de Livraison

Dans `app/livraison/page.tsx`, vérifier:
- Zone 1 (gratuit)
- Zone 2 (25$)
- Zone 3 (50$)
- Ajouter/retirer des villes selon votre couverture

### 5. Contenu à Personnaliser

**Histoire de l'entreprise** (`app/a-propos/page.tsx`):
- Année de fondation (actuellement 2010)
- Nom du fondateur (actuellement Michel Boisvert)
- Histoire de l'entreprise

**Équipe** (`app/a-propos/page.tsx`):
- Noms et rôles des membres
- Ajouter de vraies photos

### 6. Réseaux Sociaux

Dans `components/Footer.tsx`:
```tsx
<a href="https://facebook.com" ... >  // ← Remplacer
<a href="https://instagram.com" ... > // ← Remplacer
```

### 7. Formulaire de Contact

Le formulaire est actuellement en **mode démo**.

**Options pour le rendre fonctionnel:**

#### Option A: Netlify Forms (Gratuit - Recommandé)
Dans `app/contact/ContactPageClient.tsx`:
```tsx
<form 
  onSubmit={handleSubmit} 
  name="contact"           // ← Ajouter
  method="POST"            // ← Ajouter
  data-netlify="true"      // ← Ajouter
>
  <input type="hidden" name="form-name" value="contact" />
  {/* ... rest of form ... */}
</form>
```

#### Option B: Formspree
1. Compte sur formspree.io
2. Remplacer `onSubmit={handleSubmit}` par `action="https://formspree.io/f/YOUR_ID"`

#### Option C: SendGrid / Mailgun
- Créer une API route Next.js
- Intégrer l'API email

### 8. SEO - Sitemap et Robots

Dans `public/sitemap.xml`:
```xml
<loc>https://www.boisnord.ca/</loc>  <!-- Remplacer par votre domaine -->
```

Dans `public/robots.txt`:
```
Sitemap: https://www.boisnord.ca/sitemap.xml  <!-- Remplacer -->
```

### 9. Analytics (Optionnel mais Recommandé)

**Google Analytics:**
1. Créer compte sur analytics.google.com
2. Créer une propriété
3. Copier l'ID (GA-XXXXXXXXX)
4. Dans `app/layout.tsx`, ajouter:

```tsx
<Script src={`https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA-XXXXXXXXX');
  `}
</Script>
```

### 10. Heures d'Ouverture

Vérifier dans `app/contact/ContactPageClient.tsx`:
```tsx
Lundi - Vendredi: 8h - 18h
Samedi: 9h - 16h
Dimanche: Fermé
```

---

## ✅ Checklist de Vérification

Avant de déployer, vérifier:

- [ ] Toutes les coordonnées sont correctes
- [ ] Les prix correspondent à vos tarifs réels
- [ ] Les zones de livraison sont à jour
- [ ] Les images sont ajoutées (ou emojis acceptables)
- [ ] Le formulaire de contact fonctionne
- [ ] Les liens réseaux sociaux pointent vers vos pages
- [ ] Le contenu "À Propos" reflète votre entreprise
- [ ] Les heures d'ouverture sont correctes
- [ ] Le domaine dans sitemap.xml est correct
- [ ] Google Analytics est configuré (optionnel)

---

## 🎨 Personnalisation Avancée (Optionnel)

### Changer les Couleurs

Dans `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Tons bruns - personnaliser ici
    600: '#6f5940',  // Couleur principale boutons
    700: '#5a4735',  // Hover
    // ...
  },
  forest: {
    // Tons verts - personnaliser ici
    600: '#257a58',  // Couleur principale
    700: '#1e6248',  // Hover
    // ...
  },
}
```

### Ajouter une Nouvelle Page

```bash
# Créer le dossier
mkdir app/nouvelle-page

# Créer le fichier
touch app/nouvelle-page/page.tsx
```

Puis copier la structure d'une page existante.

### Modifier le Footer

Éditer `components/Footer.tsx` pour:
- Ajouter des liens
- Changer les sections
- Ajouter des informations légales

---

## 📧 Configuration Email Professionnelle

Pour `info@boisnord.ca`:

**Option 1: Google Workspace** (5$/mois)
- Email professionnel @votredomaine
- 30 Go de stockage
- Suite complète Google

**Option 2: Zoho Mail** (Gratuit jusqu'à 5 utilisateurs)
- Email professionnel
- 5 Go de stockage
- Interface web

**Option 3: Via votre hébergeur**
- Souvent inclus avec l'hébergement
- cPanel > Email Accounts

---

## 🚀 Performance

Le site est déjà optimisé, mais vous pouvez:

1. **Compresser les images** avant upload (TinyPNG, Squoosh)
2. **Utiliser WebP** au lieu de JPG/PNG
3. **Lazy load** pour images (déjà implémenté)
4. **CDN** via Netlify (automatique)

---

**Tout est prêt! Il ne reste qu'à personnaliser ces éléments et déployer! 🎉**
