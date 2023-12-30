// fetching data on the server side
export default async function getData() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!res.ok) throw new Error('Failed to fetch')


  return res.json() 
}
