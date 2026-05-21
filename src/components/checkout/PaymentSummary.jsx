function PaymentSummary(){

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
mb-5
"
>

Payment Summary

</h2>

<div className="space-y-3">

<div className="flex justify-between">

<span className="text-gray-500">

Subtotal

</span>

<span>

₹4,999

</span>

</div>


<div className="flex justify-between">

<span className="text-gray-500">

GST

</span>

<span>

₹899

</span>

</div>

<hr/>

<div
className="
flex
justify-between

font-bold
text-xl
"
>

<span>Total</span>

<span>

₹5,898

</span>

</div>

</div>


<button
className="
w-full
h-11

mt-6

bg-blue-600
text-white

rounded-lg

hover:bg-blue-700
transition
"
>

Proceed To Payment

</button>

</div>

)

}

export default PaymentSummary;