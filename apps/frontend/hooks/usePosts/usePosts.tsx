import { useQuery } from 'react-query'

interface Post {
    "id": number,
    "title": string,
    "content": string,
    "published": boolean,
    "authorId": number
}


export const usePosts = () => {
    console.log(process.env.NEXT_PUBLIC_API_URL)
    return useQuery('posts', () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then(res => res.json()).then((res: Post[]) => res))
}
