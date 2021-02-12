import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Title, Form, Repositories } from './Dashboard.style';
import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = React.useState('');
  const [repositories, setRepositories] = React.useState<Repository[]>([]);

  async function handleAddRepository(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositories on Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type the name of the repository"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="#teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name} </strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
