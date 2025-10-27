# 🚀 Guide de Déploiement Rapide - BoisNord Inc.

## Option 1: Netlify (Le Plus Rapide - 5 minutes)

### Étape 1: Préparer le Code
```bash
# S'assurer que tout est prêt
npm install
npm run build
```

### Étape 2: Déployer sur Netlify

**Méthode A: Glisser-Déposer (La plus simple!)**
1. Aller sur [app.netlify.com](https://app.netlify.com)
2. Créer un compte gratuit
3. Glisser le dossier `out` dans la zone de dépôt
4. **C'est tout!** Votre site est en ligne!

**Méthode B: Via GitHub (Recommandée pour la production)**
1. Pusher votre code sur GitHub
2. Aller sur [app.netlify.com](https://app.netlify.com)
3. "Add new site" > "Import an existing project"
4. Sélectionner votre repository
5. Netlify détecte automatiquement Next.js!
6. Cliquer sur "Deploy"

### Configuration Netlify
```toml
# netlify.toml (déjà inclus)
[build]
  command = "npm run build"
  publish = "out"
```

---

## Option 2: Vercel (Alternative Excellente)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
cd /tmp/boisnord-website
vercel

# Suivre les prompts:
# - Set up and deploy? Yes
# - Which scope? Votre compte
# - Link to existing project? No
# - What's your project's name? boisnord-website
# - In which directory is your code located? ./
# - Want to override settings? No

# Production deployment
vercel --prod
```

Votre site sera disponible sur: `https://boisnord-website.vercel.app`

---

## Option 3: cPanel / Hébergement Traditionnel

### Étape 1: Build
```bash
npm run build
# Ceci crée le dossier 'out' avec votre site statique
```

### Étape 2: Upload via FTP
1. Connectez-vous à votre FTP (FileZilla, Cyberduck, etc.)
2. Naviguez vers `public_html` ou `www`
3. Uploadez **tout le contenu** du dossier `out`
4. Attendez que tout soit uploadé (peut prendre 5-10 min)

### Étape 3: Configuration
1. Dans cPanel > "File Manager"
2. Vérifier que `index.html` est à la racine de `public_html`
3. Si nécessaire, créer un fichier `.htaccess`:

```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]
```

---

## Configuration du Domaine

### Chez Netlify
1. Settings > Domain management
2. "Add custom domain"
3. Entrer: `boisnord.ca` (ou votre domaine)
4. Suivre les instructions DNS

### Configuration DNS (chez votre registraire)
Ajouter ces enregistrements:

```
Type: A
Name: @
Value: [IP fournie par Netlify]

Type: CNAME
Name: www
Value: [sous-domaine].netlify.app
```

**Le SSL/HTTPS est automatiquement activé (gratuit!)**

---

## Vérification Post-Déploiement

### Checklist
- [ ] Le site s'affiche correctement
- [ ] Toutes les pages sont accessibles
- [ ] Le design est responsive (tester sur mobile)
- [ ] Les liens fonctionnent
- [ ] Le formulaire s'affiche
- [ ] HTTPS est activé (cadenas vert)

### Tests Recommandés
1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
3. **SSL Check**: https://www.ssllabs.com/ssltest/

---

## Maintenance & Mises à Jour

### Pour mettre à jour le site:

**Netlify (via GitHub):**
```bash
# Faire vos modifications localement
npm run dev  # Tester

# Puis:
git add .
git commit -m "Mise à jour du contenu"
git push

# Netlify rebuild automatiquement! ✨
```

**cPanel:**
```bash
npm run build
# Re-uploader le contenu de 'out' via FTP
```

---

## Problèmes Courants

### Le site ne build pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run build
```

### Erreur 404 sur les pages
- Vérifier que `output: 'export'` est dans `next.config.js`
- S'assurer que toutes les pages ont un `page.tsx`

### Images ne s'affichent pas
- Vérifier que les images sont dans `public/`
- Utiliser `/image.jpg` (pas `./image.jpg`)

---

## Support Netlify

- **Documentation**: https://docs.netlify.com
- **Status**: https://netlifystatus.com
- **Support**: support@netlify.com (compte payant)
- **Forum**: https://answers.netlify.com

---

## URLs Importantes

- **Netlify Dashboard**: https://app.netlify.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com

---

## 🎯 Prochaines Étapes Après Déploiement

1. **Configurer Google Analytics** (gratuit)
2. **Soumettre le sitemap à Google**: `https://votresite.com/sitemap.xml`
3. **Créer Google My Business** (visibilité locale)
4. **Configurer les emails**: info@boisnord.ca
5. **Tester le formulaire de contact**
6. **Ajouter vraies images** (photos de bois, camion, etc.)
7. **Promouvoir sur Facebook/Instagram**

---

**Besoin d'aide? Voici les ressources:**
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Netlify: https://docs.netlify.com

---

**Félicitations! Votre site est maintenant en ligne! 🎉**
