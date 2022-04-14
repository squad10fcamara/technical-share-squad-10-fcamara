import { useEffect, useState } from 'react';

import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';
import EmptyList from './EmptyList';

const Search = ({ searchTerm }) => {
  const [profiles, setProfiles] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        setProfiles(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setProfiles(data);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  return (
    <div>
      {loading && <Spinner message="Procurando mentor..." />}
      {profiles?.length !== 0 && <MasonryLayout profiles={profiles} />}
      {profiles?.length === 0 && searchTerm !== '' && !loading && (
        <EmptyList image="notFound" message="Nenhum mentor encontrado" />
      )}
    </div>
  );
};

export default Search;
