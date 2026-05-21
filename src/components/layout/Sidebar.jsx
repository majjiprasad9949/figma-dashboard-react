import {
  LayoutDashboard,
  BarChart3,
  Users,
  FileText,
  Settings,
  X
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard"
  },

  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics"
  },

  {
    id: "users",
    icon: Users,
    title: "Users"
  },

  {
    id: "reports",
    icon: FileText,
    title: "Reports"
  },

  {
    id: "settings",
    icon: Settings,
    title: "Settings"
  }
];

function Sidebar({
  activePage,
  setActivePage,
  sidebarOpen,
  setSidebarOpen
}) {

return(

<>

{/* Mobile Overlay */}

<div
onClick={()=>setSidebarOpen(false)}
className={`
fixed inset-0
bg-black/30
backdrop-blur-sm
z-30
lg:hidden

${sidebarOpen ? "block":"hidden"}
`}
></div>


{/* Sidebar */}

<div
className={`

fixed lg:static
top-0 left-0
z-40

w-72
h-screen

bg-gradient-to-b
from-indigo-500
via-slate-700
to-slate-950

shadow-2xl

px-7
py-10

transform
transition-transform
duration-300

${sidebarOpen
? "translate-x-0"
: "-translate-x-full"}

lg:translate-x-0

`}
>

{/* Logo */}

<div
className="
flex
justify-between
items-center

mb-28
"
>

<div>

<h1
className="
text-4xl
font-extrabold
text-white
tracking-wide
"
>

Reelax

</h1>

<p
className="
text-slate-200
text-sm
mt-3
"
>

Analytics Dashboard

</p>

</div>

<button
onClick={()=>setSidebarOpen(false)}
className="
lg:hidden
text-white
"
>

<X/>

</button>

</div>


{/* Navigation */}

<div
className="
space-y-8
mt-10
"
>

{menuItems.map((item)=>{

const Icon=item.icon;

return(

<div

key={item.id}

onClick={()=>{

setActivePage(item.id)
setSidebarOpen(false)

}}

className={`

flex
items-center

gap-5

p-6

rounded-3xl

cursor-pointer

transition-all
duration-300

${
activePage===item.id

?

"bg-white text-slate-900 shadow-xl scale-[1.03]"

:

"text-slate-100 hover:bg-white/10 hover:translate-x-2 hover:text-white"

}

`}

>

<Icon size={24}/>

<span
className="
font-medium
text-base
"
>

{item.title}

</span>

</div>

)

})}

</div>


{/* Bottom card */}

<div

className="
absolute
bottom-8
left-6
right-6

bg-white/10
backdrop-blur-md

rounded-3xl

p-6

text-white
"

>

<p
className="
text-sm
"
>

🚀 Unlock Premium Features

</p>

<button

className="
mt-4
w-full

bg-white
text-slate-900

py-3

rounded-xl

font-semibold

hover:scale-105
transition-all
duration-300
"

>

Explore

</button>

</div>

</div>

</>

)

}

export default Sidebar;