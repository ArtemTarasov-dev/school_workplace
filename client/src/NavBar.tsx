import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px double teal;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 80%;
  color: cian;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 0 16px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: underline;
  color: #000;
  font-size: 18px;
  color: Fuchsia;

  &:hover {
    color: #007BFF;
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Title>ARTEMIO Platformio</Title>
      <Menu>
        <MenuItem>
          <StyledLink to="/courses">
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} />
            Home
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/add-course">
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
            Add Course
          </StyledLink>
        </MenuItem>
      </Menu>
    </NavBarContainer>
  );
};

export default NavBar;
