import { useRouter } from "next/router"
import MainConatiner from "../../components/MainConatiner";
import classes from '../styles/User.module.scss'
export default function User({user}) {
    const {query} = useRouter()
    console.log(query);
    return(
        <MainConatiner keywords={user?.name}>
             <div className={classes.user}>
            <h1>
            user only {query?.id}
            </h1>
            <div>name user: {user?.name}</div>
        </div>
        </MainConatiner>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
    const user = await response.json()
    return{
      props: {user}
    }
}