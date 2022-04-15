import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import EmptyList from './EmptyList';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState(null);

  const { expertiseId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (expertiseId) {
      const query = searchQuery(expertiseId);
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
  }, [expertiseId]);

  if (loading) return <Spinner message="Procurando membros" />;

  if (!profiles?.length)
    return (
      <EmptyList image="empty" message="Nenhum membro cadastrado nessa área" />
    );

  return <div>{profiles && <MasonryLayout profiles={profiles} />}</div>;
};

export default Feed;
