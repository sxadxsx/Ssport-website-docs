import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import styles from './components/Button.module.css';

// The Blog Page Content
export default function Blog({posts}){
    return <main>
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 className={`mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white ${styles.abc}`}>
        雙龍體育部落格
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
   任何關於雙龍體育的任何關於雙龍體育的消息和公告
      </p>
    <NextSeo
        title="雙龍體育blog"
        description="任何關於雙龍體育的任何關於雙龍體育的消息和公告,就上雙龍體育blog"
      />
    </div>
  </div>
</section>

        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            const {title, author, category, date, bannerImage, tags} = frontmatter

            //JSX for individual blog listing
            return <article key={title}>
                 
           <div className="grid gap-8 lg:grid-cols-2">
  <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-center mb-5 text-gray-500">
      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
        <svg
          className="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
        {tags}
      </span>
      <span className="text-sm">{date}</span>
    </div>
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <Link href={`/blog/${slug}`}>{title}</Link>
    </h2>
    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
    {title}
    </p>
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          className="w-7 h-7 rounded-full"
          src="https://discuss.ssangyongsports.org/data/avatars/l/0/1.jpg?1679114793"
          alt="Peter yang"
        />
        <span className="font-medium dark:text-white">Peter yang</span>
      </div>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
      >
        閱讀文章
        <svg
          className="ml-2 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  </article>
</div>

</article>

        })}
</main>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Sort posts in descending order based on the date property
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      posts,
    },
  };
}
