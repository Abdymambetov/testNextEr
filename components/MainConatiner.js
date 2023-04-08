import Head from "next/head"
import A from "./A"
function MainConatiner({children, keywords}) {
  return (
    <>
        <Head>
            <meta keywords={'meder, next.js' + keywords}></meta>
            <title>mainPage</title>
        </Head>
         <div>
          <A href={'/'} text='main'/>
          <A href={'/users'} text='user'/>
        </div>
        <div>
            {children}
        </div>
    </>
  )
}

export default MainConatiner