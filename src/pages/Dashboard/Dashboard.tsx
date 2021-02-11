import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './Dashboard.style';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositories on Github</Title>

      <Form action="">
        <input type="text" placeholder="Type the name of the repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars.githubusercontent.com/u/39952522?s=60&v=4"
            alt="perfil usuário"
          />
          <div>
            <strong>priscilaandreani/template_react</strong>
            <p>descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
