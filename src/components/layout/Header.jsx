function Header(){

return(

<div
className="
bg-white
border-b
border-gray-100

h-16

px-8

flex
items-center
justify-between
"
>

<input
placeholder="Find influencers to collaborate with"
className="
w-[420px]
h-10

px-4

text-sm

bg-[#F8FAFC]

border
border-gray-200

rounded-lg

outline-none

focus:ring-1
focus:ring-blue-200
"
/>

<div className="flex items-center gap-3">

<button
className="
px-4
py-1

bg-orange-100
text-orange-500

rounded-md
text-sm
"
>

Upgrade

</button>


<button
className="
px-4
py-2

bg-blue-600
text-white

rounded-lg
text-sm

hover:bg-blue-700
transition
"
>

+ Create Campaign

</button>

<div
className="
w-10
h-10

rounded-full

bg-blue-600

text-white

flex
items-center
justify-center

font-semibold
"
>

JD

</div>

</div>

</div>

)

}

export default Header;