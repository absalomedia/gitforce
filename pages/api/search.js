// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = await fetch('https://api.github.com/users/SalesforceCommerceCloud/repos');
const repos = await data.json()

export default function search(req, res) {

  const results = req.query.q ?
  repos.filter(repo => repo.name.toLowerCase().includes(req.query.q)) : []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
} 
