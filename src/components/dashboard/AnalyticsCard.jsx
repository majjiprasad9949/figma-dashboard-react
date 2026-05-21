import { TrendingUp, TrendingDown } from "lucide-react";

function AnalyticsCard({
title,
value,
growth
}) {

const positive = growth > 0;

return (

<div className="
bg-white
rounded-2xl
p-6
shadow-sm
border
border-gray-100
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
">

<div className="flex justify-between items-center">

<p className="text-gray-500 text-sm">
{title}
</p>

<div
className={`
p-2 rounded-full
${positive
?"bg-green-100"
:"bg-red-100"}
`}
>

{positive ?
<TrendingUp
size={18}
className="text-green-600"
/>
:
<TrendingDown
size={18}
className="text-red-600"
/>
}

</div>

</div>

<h2 className="text-4xl font-bold mt-4">
{value}
</h2>

<div className="mt-4">

<span
className={`font-semibold

${positive
?"text-green-500"
:"text-red-500"
}`}

>

{positive?"+":""}
{growth}%

</span>

<span className="text-gray-400 ml-2">
this month
</span>

</div>

</div>

)

}

export default AnalyticsCard