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

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);
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
  }, [categoryId]);

  console.log(profiles);

  if (loading) return <Spinner message="Procurando membros" />;

  if (!profiles?.length)
    return (
      <EmptyList image="empty" message="Nenhum membro cadastrado nessa área" />
    );

  return <div>{profiles && <MasonryLayout pins={profiles} />}</div>;
};

export default Feed;