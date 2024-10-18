import { PrismaClient } from '@prisma/client';
import Modal from './components/Modal';

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </li>
          ))}
        </ul>

        <Modal />
      </div>
  );
}
