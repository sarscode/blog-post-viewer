import { Heading } from 'components';
import { Link } from 'react-router-dom';
import { Text } from 'components';
import readingTime from 'reading-time';
import routes from 'routes';

export interface PostItemProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostItem = ({ title, body, userId, id }: PostItemProps) => {
  return (
    <Link to={`${routes.posts}/${id}`}>
      <article className="py-3 first:hover:text-cyan-600">
        <header className="mb-2">
          <Heading level="h3">{title}</Heading>
        </header>
        <Text className="text-gray-600">{`${body.slice(0, 80)}...`}</Text>
        <div className="flex mt-3 text-gray-500">
          <Text element="span" size="xs">
            User {userId} •{' '}
          </Text>
          <Text element="span" size="xs">
            {' '}
            {readingTime(body).text}
          </Text>
        </div>
      </article>
    </Link>
  );
};

export default PostItem;
