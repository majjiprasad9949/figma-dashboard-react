import { Bell, Search, Menu } from "lucide-react";

function Header({setSidebarOpen}){

return(

<div className="
bg-white
h-20
shadow-sm
px-6
flex
items-center
justify-between
">

<div className="flex items-center gap-4">

<button
onClick={()=>setSidebarOpen(true)}
className="lg:hidden"
>

<Menu size={24}/>

</button>

<div className="
hidden
sm:flex
items-center
gap-3
border
rounded-xl
px-4
py-2
">

<Search size={18}/>

<input
type="text"
placeholder="Search..."
className="outline-none"
/>

</div>

</div>

<div className="flex items-center gap-4">

<Bell
className="
cursor-pointer
hover:scale-110
transition
"
/>

<img
src="https://i.pravatar.cc/40"
alt=""
className="
rounded-full
cursor-pointer
"
/>

</div>

</div>

)

}

export default Header;