import { Heading, Text } from 'components';

import readingTime from 'reading-time';

interface IPostProps {
  title?: string;
  body?: string;
  userId?: number;
  id?: number;
}

const Post = ({ title = '', body = '', userId, id }: IPostProps) => {
  return (
    <section>
      <article className="py-3">
        <header className="mb-2">
          <Heading level="h3">{title}</Heading>
        </header>
        <Text className="text-gray-600">{body}</Text>
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
    </section>
  );
};

export default Post;
