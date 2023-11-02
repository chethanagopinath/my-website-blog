import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import {Icon, Spacer} from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons';

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
        <br />
        <p>I'm a software engineer residing in sunny California. I enjoy learning, solving problems, and spending my free time experimenting with new cuisines and flavors in the kitchen and exploring beautiful scenic places. </p>
        <br />
        <section>
          <a href={`mailto:${email}`}>
            <Icon className={`${utilStyles.socialsSection}`} as={MdEmail} color='green.500' w={8} h={8} />
          </a>
          <a href={`https://www.linkedin.com/in/chethana-gopinath/`}>
            <Icon className={`${utilStyles.socialsSection}`} as={FaLinkedin} color='blue.500' w={8} h={8} />
          </a>
        </section>
        
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