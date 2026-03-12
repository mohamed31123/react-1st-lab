import PropTypes from 'prop-types';

function Profil({ utilisateur, taille }) {
  return (
    <div>
      <img 
        src={utilisateur.photo} 
        alt={utilisateur.nom}
        width={taille}
        height={taille}
      />
      <h2>{utilisateur.nom}</h2>
      <p>{utilisateur.nom} est un utilisateur de notre application.</p>
    </div>
  );
}

Profil.propTypes = {
  utilisateur: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  taille: PropTypes.number,
};

Profil.defaultProps = {
  taille: 100,
};

export default Profil;