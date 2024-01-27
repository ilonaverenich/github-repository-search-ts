import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

export const Main: React.FC = () => {
  interface Repository {
    id: number;
    name: string;
  }

  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState<Repository[]>([]);

  const fetchData = async () => {
    const octokit = new Octokit({
      auth: 'YOURS TOKEN',
    });

    try {
      const response = await octokit.repos.listForUser({
        username,   
      });

   ;
   setRepos(response.data)
   console.log(response)
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
      />

      {repos.length > 0 ? (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        <p>Репозиторий не найден</p>
      )}
    </div>
  );
};