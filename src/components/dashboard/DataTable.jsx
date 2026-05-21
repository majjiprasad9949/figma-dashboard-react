import Badge from "../common/Badge";

const users=[

{
id:1,
name:" Alex John",
email:"john@example.com",
status:"Active",
revenue:"₹12,500"
},

{
id:2,
name:"Sarah Smith",
email:"sarah@example.com",
status:"Pending",
revenue:"₹8,200"
},

{
id:3,
name:"Mike Johnson",
email:"mike@example.com",
status:"Inactive",
revenue:"₹4,100"
}

]

function DataTable(){

return(

<div className="bg-white p-6 rounded-lg shadow-sm mt-8">

<h2 className="text-xl font-semibold mb-6">
Recent Users
</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th className="text-left py-3">
Name
</th>

<th className="text-left">
Email
</th>

<th className="text-left">
Status
</th>

<th className="text-left">
Revenue
</th>

</tr>

</thead>

<tbody>

{users.map((user)=>(

<tr
key={user.id}
className="border-b"
>

<td className="py-4">
{user.name}
</td>

<td>
{user.email}
</td>

<td>

<Badge
status={user.status}
/>

</td>

<td>
{user.revenue}
</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default DataTable;