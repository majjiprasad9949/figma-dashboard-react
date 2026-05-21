function InputField({
  label,
  placeholder
}) {

return(

<div className="flex flex-col">

<label
className="
text-sm
font-medium
text-gray-700
mb-2
"
>

{label}

</label>

<input
type="text"
placeholder={placeholder}
className="
w-full
h-10
px-3

bg-[#F8FAFC]

border
border-gray-200

rounded-md

text-sm

placeholder:text-gray-400

focus:outline-none
focus:ring-1
focus:ring-blue-200
focus:border-blue-500

transition
"
/>

</div>

)

}

export default InputField;