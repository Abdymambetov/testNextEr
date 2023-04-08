import Link from "next/link";
import classes from '../pages/styles/A.module.css'
export default function A({text, href}) {
    return(
        <Link href={href}>
            <li className={classes.link}>{text}</li>
        </Link>
    )
}