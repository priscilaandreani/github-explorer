import React, { useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import {
  DeleteButton,
  Error,
  Form,
  Repositories,
  Title
} from './Dashboard.style';

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
  const [inputError, setInputError] = React.useState('');

  const [repositories, setRepositories] = React.useState<Repository[]>(() => {
    const repositoriesOnLocalStorage = localStorage.getItem(
      '@GithubExplore: repositories',
    );

    if (repositoriesOnLocalStorage) {
      return JSON.parse(repositoriesOnLocalStorage);
    }
    return [];
  });

  function deleteAllRepos(): void {
    window.location.reload();
    return localStorage.clear();
  }

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplore: repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError("You must pass the author/repository's name ");
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
    } catch (err) {
      setInputError('Sorry, we are unable to locate this repository 😥');
    }
    setNewRepo('');
    setInputError('');
  }

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositories on Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type the name of the repository"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <DeleteButton type="button" onClick={deleteAllRepos}>
        Clear all repositories
      </DeleteButton>
      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name} </strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};
export default Dashboard;
