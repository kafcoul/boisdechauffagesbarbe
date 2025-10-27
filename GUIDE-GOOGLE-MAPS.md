# 🗺️ Guide d'Intégration Google Maps

## ✅ Carte Google Maps Intégrée !

Votre page de contact affiche maintenant une carte Google Maps interactive avec :
- 📍 Carte centrée sur Québec
- 🧭 Bouton "Obtenir l'itinéraire"
- 📱 Responsive (s'adapte aux mobiles)
- ⚡ Chargement optimisé (lazy loading)

---

## 🔧 Comment Personnaliser avec Votre Vraie Adresse

### Étape 1 : Obtenir le Code d'Intégration

1. **Allez sur Google Maps** : https://www.google.com/maps
2. **Cherchez votre adresse** : Tapez votre adresse exacte dans la barre de recherche
3. **Cliquez sur "Partager"** (bouton en haut à gauche ou dans le panneau de détails)
4. **Sélectionnez "Intégrer une carte"**
5. **Copiez le code HTML** qui commence par `<iframe src="https://www.google.com/maps/embed...`

### Étape 2 : Remplacer dans le Code

Ouvrez `/tmp/boisnord-website/app/contact/ContactPageClient.tsx`

**Ligne ~365** - Remplacez l'URL dans l'iframe :

```tsx
<iframe
  src="COLLEZ_ICI_VOTRE_URL_GOOGLE_MAPS"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Carte de l'emplacement de BoisNord Inc."
  className="w-full"
/>
```

### Étape 3 : Mettre à Jour l'Adresse Affichée

**Ligne ~383** - Remplacez l'adresse :

```tsx
<h3 className="font-bold text-primary-800">VOTRE VRAIE ADRESSE</h3>
<p className="text-sm text-gray-600">Québec, QC CODE_POSTAL</p>
```

### Étape 4 : Mettre à Jour le Lien "Obtenir l'itinéraire"

**Ligne ~391** - Remplacez l'URL :

```tsx
<a
  href="https://www.google.com/maps/dir//VOTRE_ADRESSE_ENCODÉE"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary inline-flex items-center gap-2"
>
```

**Astuce :** Pour obtenir l'URL d'itinéraire :
1. Sur Google Maps, après avoir cherché votre adresse
2. Cliquez sur "Itinéraire"
3. Copiez l'URL de la page

---

## 🎨 Options de Personnalisation Avancées

### Changer la Hauteur de la Carte

```tsx
height="450"  // Remplacez par 300, 500, 600, etc.
```

### Désactiver Certains Contrôles

Dans l'URL Google Maps, ajoutez des paramètres :
- `&z=14` → Niveau de zoom (1-20)
- `&maptype=satellite` → Vue satellite
- `&layer=traffic` → Afficher le trafic

### Exemple d'URL Complète Personnalisée

```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[...]&z=15&maptype=roadmap
```

---

## 📍 Exemple Complet pour une Vraie Adresse

Si votre adresse est : **1500 Avenue de la Forêt, Québec, QC G1R 2B5**

1. **Cherchez** sur Google Maps : `1500 Avenue de la Forêt, Québec`
2. **Partagez** → **Intégrer une carte**
3. **Copiez** le code qui ressemble à :

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.838!2d-71.214942!3d46.813878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb895d7f1f3f9e5%3A0x5a7e3f7c8d2f3e8!2s1500%20Avenue%20de%20la%20For%C3%AAt%2C%20Qu%C3%A9bec!5e0!3m2!1sfr!2sca!4v1698165432100!5m2!1sfr!2sca" ...></iframe>
```

4. **Gardez uniquement l'URL** (la partie `src="..."`)
5. **Remplacez** dans votre fichier `ContactPageClient.tsx`

---

## 🔐 API Google Maps (Alternative Avancée)

Si vous voulez plus de contrôle (marqueurs personnalisés, styles, etc.) :

### 1. Obtenir une Clé API

1. Allez sur https://console.cloud.google.com/
2. Créez un projet
3. Activez "Maps JavaScript API"
4. Créez une clé API (restreignez-la à votre domaine)

### 2. Installer le Package

```bash
npm install @react-google-maps/api
```

### 3. Créer un Composant Carte Personnalisé

```tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const MapComponent = () => {
  const center = { lat: 46.8139, lng: -71.2080 } // Vos coordonnées

  return (
    <LoadScript googleMapsApiKey="VOTRE_CLE_API">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '450px' }}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}
```

---

## ✅ Checklist de Vérification

Avant de déployer :

- [ ] Adresse correcte dans la carte Google Maps
- [ ] Adresse textuelle mise à jour (sous la carte)
- [ ] Lien "Obtenir l'itinéraire" fonctionnel
- [ ] Carte s'affiche correctement sur mobile
- [ ] Carte centrée sur le bon emplacement
- [ ] Zoom approprié (ni trop proche, ni trop loin)

---

## 🚀 Test en Local

Visitez : http://localhost:3000/contact

Vérifiez :
- La carte s'affiche correctement
- Vous pouvez zoomer/dézoomer
- Le bouton "Obtenir l'itinéraire" ouvre Google Maps
- La carte est responsive sur mobile (DevTools)

---

## 🆘 Problèmes Courants

### La carte ne s'affiche pas
- Vérifiez que l'URL de l'iframe est complète
- Vérifiez qu'il n'y a pas de guillemets cassés
- Testez l'URL directement dans un navigateur

### "This page can't load Google Maps correctly"
- Vous avez probablement besoin d'une clé API
- Utilisez la méthode d'intégration iframe (plus simple)

### La carte est décalée
- Cherchez à nouveau votre adresse sur Google Maps
- Assurez-vous d'avoir la bonne adresse complète

---

Besoin d'aide ? Consultez : https://developers.google.com/maps/documentation/embed
