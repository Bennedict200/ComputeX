import { getPostData, getPostSlugs } from '../../../lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  console.log('Static slugs:', slugs); // 👈 Debug output
  return slugs.map(slug => ({ slug }));
}

export default async function BlogPost({ params }) {
   const { slug } = await params;
    console.log('Page params:', params); // 👈 Debug output

  try {
    const post =  getPostData(slug);
    console.log("the code is executing");
    console.log(slug);
    

    return (
      <article style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{post.meta.title}</h1>
        <p style={{ color: '#888', fontSize: '0.9rem' }}>{post.meta.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    );
  } catch (err) {
    notFound();
  }
}
