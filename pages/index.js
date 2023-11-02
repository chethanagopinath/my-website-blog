import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Divider, Icon } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack } from '@chakra-ui/react'

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
        <HStack spacing={4} pb={5} pt={5}>
          <a href={`mailto:${email}`}>
            <Icon as={MdEmail} color='green.500' w={8} h={8} />
          </a>
          <a href={`https://www.linkedin.com/in/chethana-gopinath/`}>
            <Icon as={FaLinkedin} color='blue.500' w={8} h={8} />
          </a>
          <a href={`https://github.com/chethanagopinath`}>
            <Icon as={FaGithub} color='black.500' w={8} h={8} />
          </a>
        </HStack>
        <Button colorScheme='purple' size='md' href="https://drive.google.com/file/d/18dGMncVIzm-BGyM9PZ2TJtlrkQHejnVX/view?usp=sharing">
          Resume
        </Button>
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