import { useQuery } from 'react-query'

// TODO: move to shared
interface Post {
  "id": number,
  "title": string,
  "content": string,
  "published": boolean,
  "authorId": number
}

export const usePosts = () => {
  return useQuery('posts', () => fetch('/api/posts').then(res => res.json()).then((res: Post[]) => res))
}
