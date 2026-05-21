import { useState } from "react";

function CouponSection() {

const [selectedCoupon,setSelectedCoupon] = useState("");

const coupons = [

{
id:"WELCOME20",
description:"20% off your first month"
},

{
id:"ANNUAL50",
description:"50% off annual plan"
}

];

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

<h2
className="
font-semibold
text-lg
mb-4
"
>

Apply Coupon

</h2>

<input
type="text"
placeholder="Enter coupon code"
className="
w-full
h-10
px-3

bg-[#F8FAFC]

border
border-gray-200

rounded-md

text-sm

outline-none

focus:ring-1
focus:ring-blue-200
focus:border-blue-500
"
/>

<div className="space-y-3 mt-4">

{coupons.map((coupon)=>(

<div
key={coupon.id}

onClick={()=>setSelectedCoupon(coupon.id)}

className="
flex
justify-between
items-center

border
border-gray-200

rounded-md

px-3
py-3

cursor-pointer

hover:bg-gray-50
transition
"
>

<div>

<p className="font-medium">

{coupon.id}

</p>

<p className="text-xs text-gray-500">

{coupon.description}

</p>

</div>


<div
className="
w-5
h-5

rounded-full

border-2
border-blue-500

flex
items-center
justify-center
"
>

{selectedCoupon===coupon.id && (

<div
className="
w-2
h-2
rounded-full
bg-blue-500
"
></div>

)}

</div>

</div>

))}

</div>

</div>

)

}

export default CouponSection;