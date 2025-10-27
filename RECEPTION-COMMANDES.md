# 📧 Guide de Réception des Commandes Clients

## ✅ Solution Implémentée : Netlify Forms (GRATUIT)

Votre formulaire est maintenant configuré pour **Netlify Forms**. Voici comment ça fonctionne :

### 📥 Comment recevoir les commandes ?

1. **Déployez sur Netlify** (voir `DEPLOIEMENT.md`)
2. **Activez les notifications email** dans Netlify :
   - Allez dans votre site sur Netlify
   - `Settings` → `Forms` → `Form notifications`
   - Cliquez `Add notification` → `Email notification`
   - Entrez votre email : `votre-email@exemple.com`

3. **Recevez les commandes** :
   - Par **email** → Chaque soumission vous est envoyée automatiquement
   - Par **tableau de bord Netlify** → `Forms` dans votre site

### 🔧 Configuration actuelle

Le formulaire est configuré avec :
- ✅ Protection anti-spam (honeypot)
- ✅ Validation des champs
- ✅ Message de confirmation
- ✅ Indicateur de chargement
- ✅ Réinitialisation automatique

### 📊 Données collectées

Chaque commande inclut :
- Nom complet du client
- Email
- Téléphone
- Type de produit (Érable, Bouleau, Frêne, etc.)
- Quantité (en cordes)
- Adresse de livraison
- Message/commentaires

---

## 🔀 Autres Options Disponibles

### Option 2 : Formspree (GRATUIT jusqu'à 50/mois)

**Avantages :** Simple, pas de déploiement spécifique nécessaire

```tsx
// Modifiez handleSubmit dans ContactPageClient.tsx :
const response = await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

**Configuration :**
1. Créez un compte sur https://formspree.io
2. Créez un formulaire
3. Copiez l'ID du formulaire
4. Remplacez `VOTRE_ID` dans le code

---

### Option 3 : Email Direct via API (Recommandé pour cPanel)

Si vous hébergez sur **cPanel**, créez un fichier PHP :

**Fichier : `api/send-email.php`**
```php
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = "votre-email@boisnord.ca";
    $subject = "Nouvelle commande - " . $data['product'];
    
    $message = "
    Nouvelle commande reçue :
    
    Nom : " . $data['name'] . "
    Email : " . $data['email'] . "
    Téléphone : " . $data['phone'] . "
    Produit : " . $data['product'] . "
    Quantité : " . $data['quantity'] . " cordes
    Adresse : " . $data['address'] . "
    Message : " . $data['message'] . "
    ";
    
    $headers = "From: noreply@boisnord.ca\r\n";
    $headers .= "Reply-To: " . $data['email'] . "\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

**Modifiez ContactPageClient.tsx :**
```tsx
const response = await fetch('https://votre-domaine.ca/api/send-email.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

---

### Option 4 : WhatsApp Business (Bonus)

Ajoutez un bouton WhatsApp pour recevoir commandes directement :

```tsx
<a 
  href={`https://wa.me/14185551234?text=Bonjour, je voudrais commander ${formData.quantity} cordes de ${formData.product}`}
  className="btn-secondary w-full text-center"
>
  Commander via WhatsApp
</a>
```

---

## 🎯 Recommandation

**Pour Netlify** → Utilisez **Netlify Forms** (déjà configuré ✅)
**Pour cPanel** → Utilisez **Option 3** (Email PHP)
**Pour simplicité** → Utilisez **Formspree** (Option 2)

---

## 📞 Configuration Email Final

**N'oubliez pas de remplacer** dans `ContactPageClient.tsx` et `components/Footer.tsx` :

- `info@boisnord.ca` → Votre vrai email
- `(418) 555-1234` → Votre vrai téléphone
- Adresse → Votre vraie adresse

---

## ✅ Test du Formulaire

1. Ouvrez http://localhost:3000/contact
2. Remplissez tous les champs
3. Cliquez "Envoyer la Demande"
4. Vérifiez le message de confirmation

**Après déploiement sur Netlify :**
1. Testez le formulaire en ligne
2. Vérifiez votre email
3. Consultez Netlify Dashboard → Forms

---

Besoin d'aide ? Consultez : https://docs.netlify.com/forms/setup/
