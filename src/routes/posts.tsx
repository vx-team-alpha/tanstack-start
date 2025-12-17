import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { fetchPosts } from '../utils/posts'

export const Route = createFileRoute('/posts')({
  loader: async () => fetchPosts(),
  component: PostsComponent,
})

function PostsComponent() {
  const posts = Route.useLoaderData()

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
      <div className="p-2 flex gap-2">
        <ol className="list-disc pl-4">
          {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }].map(
            (post) => {
              return (
                <li key={post.id} className="whitespace-nowrap">
                  <Link
                    to="/posts/$postId"
                    params={{
                      postId: String(post.id),
                    }}
                    className="block py-1 capitalize  hover:text-blue-600"
                    activeProps={{ className: 'text-black font-bold' }}
                  >
                    <div>{post.title.substring(0, 20)}</div>
                  </Link>
                </li>
              )
            },
          )}
        </ol>
        <hr />
        <Outlet />
      </div>
    </div>
  )
}
