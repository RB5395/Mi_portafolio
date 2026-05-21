import PropTypes from 'prop-types';

function SkillBadge({ nombre }) {
  return (
    <span className="badge bg-primary p-2">
      {nombre}
    </span>
  );
}

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;