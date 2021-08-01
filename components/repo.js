import { Card, CardBody, Button } from '@windmill/react-ui'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'

const Repo = ({ name, description,  fork, created_at, html_url, full_name, stargazers_count}) => (

    <Card className="flex max-w-sm md:max-w-lg text-left rounded-md shadow-2xl">
    <CardBody className="flex-grow ">
    <h1 className="mb-4 font-bold dark:text-black">{name}</h1>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
    <p className="text-gray-600 dark:text-gray-400">{fork == true && 
    <span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg> Forked</span>}
    {fork == false &&  
    <span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg> Original</span>} repo with {stargazers_count} stars</p>
    <p className="text-gray-600 dark:text-gray-400">Created <ReactTimeAgo date={created_at} locale="en-AU"/> </p>
    <a href={html_url}><Button layout="outline" title={full_name}>Go to Repo</Button></a>    
    </CardBody>
    </Card>
  );
  


  export default Repo;