import InputField from "../common/InputField";

function BillingForm() {

return (

<div
className="
bg-white
rounded-xl
border
border-gray-100
shadow-sm
p-6
"
>

<h2
className="
text-3xl
font-bold
mb-1
"
>

Review your details

</h2>

<p
className="
text-gray-500
mb-8
"
>

Billing Information

</p>

<div
className="
grid
grid-cols-2
gap-x-6
gap-y-6
"
>

<InputField
label="Company Name"
placeholder="Company Name"
/>

<InputField
label="Email"
placeholder="Email"
/>

<InputField
label="GST Number (Optional)"
placeholder="GST Number"
/>

<InputField
label="PAN Number"
placeholder="PAN Number"
/>

<InputField
label="Premise / House No."
placeholder="House Number"
/>

<InputField
label="Street"
placeholder="Street"
/>


{/* State */}

<div>

<label
className="
text-sm
font-medium
block
mb-2
"
>

State

</label>

<select
className="
w-full
h-10
px-3

bg-[#F8FAFC]

border
border-gray-200

rounded-md

outline-none

focus:ring-1
focus:ring-blue-200
"
>

<option>Select State</option>
<option>Telangana</option>
<option>Karnataka</option>
<option>Tamil Nadu</option>

</select>

</div>


{/* City */}

<div>

<label
className="
text-sm
font-medium
block
mb-2
"
>

City

</label>

<select
className="
w-full
h-10
px-3

bg-[#F8FAFC]

border
border-gray-200

rounded-md

outline-none

focus:ring-1
focus:ring-blue-200
"
>

<option>Select City</option>
<option>Hyderabad</option>
<option>Bangalore</option>
<option>Chennai</option>

</select>

</div>


<InputField
label="Country"
placeholder="India"
/>

<InputField
label="Pin Code"
placeholder="Pincode"
/>

</div>


<div
className="
flex
justify-end
items-center
gap-4

mt-10
pt-6

border-t
border-gray-100
"
>

<button
className="
px-6
py-2.5

text-gray-600

border
border-gray-300

rounded-lg

hover:bg-gray-50
transition
"
>

Cancel

</button>

<button
className="
px-6
py-2.5

bg-blue-600
text-white

rounded-lg

hover:bg-blue-700
transition
"
>

Save Details

</button>

</div>

</div>

);

}

export default BillingForm;