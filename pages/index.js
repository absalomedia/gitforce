import Head from 'next/head';
import Repo from '../components/repo';
import Search from '../components/search'

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/SalesforceCommerceCloud/repos')
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      repos: data,
    },
  }
};


export default function Layout ({ repos })  {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 trail">
      <Head>
        <title>SalesForce Repository</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  

<nav class="flex items-center justify-between flex-wrap bg-teal p-6">
  <div class="flex items-center flex-no-shrink text-black mr-6">
    <h1 class="font-bold text-xl tracking-tight">Salesforce Repository</h1>
  </div>

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <div class="border rounded overflow-hidden flex">
      <input type="text" class="px-4 py-2" placeholder="Search..."/>
      <button class="flex items-center justify-center px-4 border-l">
        <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
      </button>
      </div>
  </div>
  </div>
</nav>


      <main className="space-y-6 text-center">

      {repos.map((repos) => (
        <Repo key={repos.id} {...repos} />
      ))}


      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
