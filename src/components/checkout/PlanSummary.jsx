function PlanSummary(){

return(

<div
className="
bg-white
rounded-xl
border
border-gray-100
shadow-sm
p-5
"
>

<div className="flex justify-between">

<h2 className="font-semibold text-lg">

Plan Summary

</h2>

<span
className="
bg-blue-50
text-blue-500

text-xs

px-2
py-1

rounded-md
"
>

Selected Plan

</span>

</div>

<h1
className="
text-5xl
font-bold
mt-4
"
>

₹4,999

<span
className="
text-base
font-normal
text-gray-500
"
>

/month

</span>

</h1>

<p
className="
text-gray-500
mt-2
text-sm
"
>

Includes 5,000 credits/month

</p>

<button
className="
w-full
mt-5

bg-blue-600
text-white

rounded-lg

h-10

hover:bg-blue-700
transition
"
>

Upgrade Plan

</button>

</div>

)

}

export default PlanSummary;