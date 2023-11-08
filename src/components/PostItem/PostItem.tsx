import { Heading } from 'components';
import { Text } from 'components';
import readingTime from 'reading-time';

export interface PostItemProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostItem = ({ title, body, userId }: PostItemProps) => {
  return (
    <article className="py-3">
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
  );
};

export default PostItem;
