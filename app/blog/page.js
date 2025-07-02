import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

const Blog = () => {
  const posts = getAllPosts();
  return (
    
        <div className="w-full flex flex-col justify-center p-5 bg-amber-100 mt-15">
                <div className="flex flex-row p-1">

                  {/* heading div */}
                    <div className="flex flex-col justify-center w-7/12 ">
                        <span className=" text-5xl font-bold ml-3 text-gray-700">Blog</span>
                        <span className="text-base text-gray-400 ml-3 mb-3 font-bold">Check this Out!</span>

                        <div>
                        {/* <h1 className="text-3xl font-bold mb-4">My Blog</h1> */}
                          <ul>
                            {posts.map(({ slug, meta }) => (
                              <li key={slug} className='mt-3 bg-gray-600 text-xl text-amber-50 rounded-2xl p-2 w-9/12'>
                                <Link href={`/posts/${slug}`} className='hover:text-orange-500'>
                                  <strong>{meta.title}</strong>
                                </Link>
                                <div className='text-sm text-gray-400'>{meta.date}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Blog