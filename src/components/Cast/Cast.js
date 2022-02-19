import PropTypes from 'prop-types';
import { Wrapper, Card, ImgBox, Img, Name, Character } from './Cast.styled';

export function Cast({ data }) {
  if (data.length === 0) {
    return <p>Информация об актерском составе отсутствует.</p>;
  }

  return (
    <Wrapper>
      {data.map(({ key, character, name, photo }) => (
        <Card key={key}>
          <ImgBox>
            <Img src={photo} alt={name} />
          </ImgBox>
          <div>
            <Name>{name}</Name>
            {character && <Character>в роли {character}</Character>}
          </div>
        </Card>
      ))}
    </Wrapper>
  );
}

Cast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      character: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string,
    }),
  ).isRequired,
};
