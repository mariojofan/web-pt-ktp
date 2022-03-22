import { NavigationBar, Footer } from "..";

export default function Layout({ children, className }) {
    const addClassName = className ? ` ${className} ` : ''; // looping IF

    return (
       <div>
           <NavigationBar className={`${addClassName}`} />
           <main>{children}</main>
           <Footer />
       </div>
    )
}
