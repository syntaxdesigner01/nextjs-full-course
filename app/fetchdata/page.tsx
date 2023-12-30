import getData from "@/lib/getData";
import type { Metadata } from "next";

const metadata:Metadata = {
    title:'Users'
}


export default async function Users() {
  const userdata: Promise<User[]> = getData()
  const users = await userdata

  console.log('hello world');
  
  return (
    <div>{
        users.map(res =>{
          return (
            <div key={res.id}>
            <p>{res.name}</p>
            </div>
          )
        })
      }</div>
  )
}
