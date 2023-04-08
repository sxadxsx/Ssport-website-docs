import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';

// The page for each post
export default function Post({frontmatter, content}) {

    const {title, author, category, date, bannerImage, tags} = frontmatter

    return <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
          <img src={bannerImage}/>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        {title}
        </h1>
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Jese Leos"
            />
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {author}
              </a>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                Graphic Designer, educator &amp; CEO Flowbite
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                <time
                  pubdate=""
                  dateTime="2022-02-08"
                  title="February 8th, 2022"
                >
                  Feb. 8, 2022
                </time>
              </p>
            </div>
          </div>
        </address>
      </header>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </article>
  </div>
</main>

}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
