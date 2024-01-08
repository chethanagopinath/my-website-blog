import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  const email = 'chethanaagopinath@gmail.com'

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Chethana 👋🏼 </p>
        <p>I'm a software engineer residing in sunny California. I enjoy learning, solving problems, and spending my free time experimenting with new cuisines and flavors in the kitchen and exploring beautiful scenic places. </p>
        <div className='flex flex-row py-5'>
          <a className='px-1 text-teal-600 fill-current' href={`mailto:${email}`}>
            <MdEmail />
          </a>
          <a className='px-1 text-sky-600 fill-current' href={`https://www.linkedin.com/in/chethana-gopinath/`}>
            <FaLinkedin />
          </a>
          <a className='px-1 text-zinc-950 fill-current' href={`https://github.com/chethanagopinath`}>
            <FaGithub />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/18dGMncVIzm-BGyM9PZ2TJtlrkQHejnVX/view?usp=sharing"
          className="btn text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
            Resume
        </a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{title}</Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}