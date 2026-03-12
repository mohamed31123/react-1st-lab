// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.webp' };
 
  const voiture = { marque: 'Toyota', modele: 'Corolla', couleur: 'Rouge' };
  const voiture2 = { marque: 'Honda', modele: 'Civic', couleur: 'Bleu' };
  const listCourses = ['Lait', 'Pain', 'Oeufs', 'Fruits'];
  const listCourses2 = ['Fromage', 'Jus', 'Céréales', 'Légumes'];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />
      <h2>Informations sur les voitures :</h2>
      <Voiture marque={voiture.marque} modele={voiture.modele} couleur={voiture.couleur} />
      <Voiture marque={voiture2.marque} modele={voiture2.modele} couleur={voiture2.couleur} />
      <h2>Liste de courses 1 :</h2>
      <ul>
        {listCourses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Liste de courses 2 :</h2>
      <ul>
        {listCourses2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;