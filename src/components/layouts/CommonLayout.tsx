import { Link, Outlet } from "react-router-dom";



interface TNav{
  label: string
  path: string
}
const nav: TNav[]= [
  {label: "Home", path: "/"},
  {label: "About", path: "/about"},
  {label: "Contact", path: "/contact"},
  {label: "Dashboard", path: "/dashboard"},
]









export default function CommonLayout() {
  return (
    <main>
        <ul className="flex gap-4 justify-center">
        {nav.map((n, _)=>(
            <li>
                <Link to={n.path}>{n.label}</Link>
            </li>
        ))}
      </ul>
        <Outlet/>
    </main>
  )
}
