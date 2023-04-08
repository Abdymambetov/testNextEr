import Link from "next/link"
import { useEffect, useState } from "react"
import MainConatiner from "../components/MainConatiner"

function users({users}) {
  
  return (
    <MainConatiner keywords={'users'}>
        <h1>users page</h1>
        <ul>
            {users.map(item => 
            <li key={item?.id}>
                <Link href={`/user/${item?.id}`}>
                    <p>{item?.name}</p>
                </Link>
             </li>
            )}
        </ul>
    </MainConatiner>
  )
}

export default users

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
  return{
    props: {users}
  }
}