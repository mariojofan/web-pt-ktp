import { NavigationBar2, Footer } from "..";

export default function Layout2({ children, className }) {
    const addClassName = className ? ` ${className} ` : ''; // looping IF

    return (
       <div>
           <NavigationBar2 className={`${addClassName}`} />
           <main>{children}</main>
           <Footer />
       </div>
    )
}
