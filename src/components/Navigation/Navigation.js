import { Nav, StyledNavLink } from './Navigation.styled';

export function Navigation() {
  return (
    <Nav>
      <StyledNavLink to="/">Главная</StyledNavLink>
      <StyledNavLink to="/movies">Фильмы</StyledNavLink>
    </Nav>
  );
}
