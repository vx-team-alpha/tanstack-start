import { Link, createFileRoute } from '@tanstack/react-router'
import { fetchPost } from '../utils/posts'
import { PostErrorComponent } from '../components/PostError'

export const Route = createFileRoute('/posts_/$postId/deep')({
  ssr: true,
  loader: async ({ params: { postId } }) =>
    fetchPost({
      data: postId,
    }),
  headers: () => ({
    'Cache-Control':
      'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
  }),
  errorComponent: PostErrorComponent,
  component: PostDeepComponent,
})

function PostDeepComponent() {
  const post = Route.useLoaderData()
  const generatedAt = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return (
    <div className="p-2 space-y-2">
      <Link
        to="/posts"
        className="block py-1 text-blue-800 hover:text-blue-600"
      >
        ← All Posts
      </Link>

      <h1 className="text-2xl font-bold mb-4 capitalize">{post.title}</h1>
      <p className="bg-gray-100 p-2 rounded-md inline-block">
        GeneratedAt: {generatedAt}
      </p>
      <div className="text-lg text-pretty capitalize">{post.body}</div>
    </div>
  )
}
