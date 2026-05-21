import { useState } from "react";

import LayoutWrapper from "./components/layout/LayoutWrapper";

import AnalyticsCard from "./components/dashboard/AnalyticsCard";
import DataTable from "./components/dashboard/DataTable";
import RevenueChart from "./components/dashboard/RevenueChart";

function App() {

const [activePage,setActivePage]=useState("dashboard");

const renderPage=()=>{

switch(activePage){

case "dashboard":

return(

<>
<h1 className="text-4xl font-bold">
Dashboard
</h1>

<p className="text-gray-500 mt-2 mb-8">
Track performance and business growth
</p>

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">

<AnalyticsCard
title="Revenue"
value="₹1,24,500"
growth={18}
/>

<AnalyticsCard
title="Users"
value="4,892"
growth={12}
/>

<AnalyticsCard
title="Conversion"
value="64%"
growth={8}
/>

<AnalyticsCard
title="Growth"
value="21%"
growth={-4}
/>

</div>

<div className="grid lg:grid-cols-3 gap-2 mt-8">

<div className="lg:col-span-2">

<RevenueChart/>

</div>
<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="text-xl font-semibold mb-6">
Performance Summary
</h2>

<div className="space-y-6">

<div>

<div className="flex justify-between">

<span>Revenue Goal</span>
<span>82%</span>

</div>

<div className="w-full bg-gray-200 h-3 rounded-full mt-2">

<div
className="
bg-blue-500
h-3
rounded-full
w-[82%]
"
></div>

</div>

</div>

<div>

<div className="flex justify-between">

<span>User Growth</span>
<span>64%</span>

</div>

<div className="w-full bg-gray-200 h-3 rounded-full mt-2">

<div
className="
bg-green-500
h-3
rounded-full
w-[64%]
"
></div>

</div>

</div>

<div>

<div className="flex justify-between">

<span>Conversion</span>
<span>48%</span>

</div>

<div className="w-full bg-gray-200 h-3 rounded-full mt-2">

<div
className="
bg-purple-500
h-3
rounded-full
w-[48%]
"
></div>

</div>

</div>

</div>

</div>


</div>

<DataTable/>

</>

)

case "analytics":

return(

<div>

<h1 className="text-4xl font-bold">
Analytics
</h1>

<p className="text-gray-500 mt-2 mb-8">
Detailed performance insights
</p>

<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-lg mb-4">
Weekly Revenue
</h2>

<div className="space-y-4">

<div>

<div className="flex justify-between">

<span>Monday</span>
<span>70%</span>

</div>

<div className="bg-gray-200 h-3 rounded-full mt-2">

<div
className="bg-blue-500 h-3 rounded-full w-[70%]"
></div>

</div>

</div>

<div>

<div className="flex justify-between">

<span>Tuesday</span>
<span>85%</span>

</div>

<div className="bg-gray-200 h-3 rounded-full mt-2">

<div
className="bg-green-500 h-3 rounded-full w-[85%]"
></div>

</div>

</div>

<div>

<div className="flex justify-between">

<span>Wednesday</span>
<span>55%</span>

</div>

<div className="bg-gray-200 h-3 rounded-full mt-2">

<div
className="bg-purple-500 h-3 rounded-full w-[55%]"
></div>

</div>

</div>

</div>

</div>


<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-lg mb-4">
Traffic Sources
</h2>

<div className="space-y-6">

<div className="flex justify-between">

<span>Organic Search</span>
<span>45%</span>

</div>

<div className="flex justify-between">

<span>Social Media</span>
<span>25%</span>

</div>

<div className="flex justify-between">

<span>Direct Traffic</span>
<span>30%</span>

</div>

</div>

</div>


<div className="
bg-gradient-to-br
from-indigo-500
to-purple-500
rounded-2xl
p-6
pl-4
text-white
shadow-sm
">

<h2 className="text-xl font-bold">
   Insights
</h2>

<p className="mt-4">

User engagement increased by
23% this week 

</p>

<div className="mt-8">

<h1 className="text-5xl font-bold">
23%
</h1>

<p>
Growth rate
</p>

</div>

</div>

</div>

</div>

)

case "users":

return(

<div>

<h1 className="text-3xl font-bold">
Users
</h1>

<DataTable/>

</div>

)

case "reports":

return(

<div>

<h1 className="text-4xl font-bold">
Reports
</h1>

<p className="text-gray-500 mt-2 mb-8">
Generate, manage and track reports
</p>

<div className="grid lg:grid-cols-2 gap-6">

{/* Monthly Reports */}

<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-xl mb-6">
Monthly Reports
</h2>

<div className="space-y-4">

<div className="flex justify-between items-center">

<div>

<p className="font-medium">
Revenue Report
</p>

<p className="text-sm text-gray-500">
Generated on May 2026
</p>

</div>

<span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
Completed
</span>

</div>

<div className="flex justify-between items-center">

<div>

<p className="font-medium">
Users Report
</p>

<p className="text-sm text-gray-500">
Generated on May 2026
</p>

</div>

<span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm">
Pending
</span>

</div>

<div className="flex justify-between items-center">

<div>

<p className="font-medium">
Traffic Report
</p>

<p className="text-sm text-gray-500">
Generated on May 2026
</p>

</div>

<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
Processing
</span>

</div>

</div>

</div>


{/* Report Analytics */}

<div className="
bg-gradient-to-r
from-indigo-500
to-purple-500
rounded-2xl
p-6
text-white
shadow-sm
">

<h2 className="text-2xl font-bold">
Report Insights
</h2>

<p className="mt-3">

Monthly report generation increased by
18%

</p>

<div className="mt-8">

<h1 className="text-5xl font-bold">
18%
</h1>

<p>
Growth this month
</p>

</div>

</div>


{/* Quick Actions */}

<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-xl mb-6">
Quick Actions
</h2>

<div className="space-y-4">

<button
className="
w-full
bg-blue-500
text-white
py-3
rounded-xl
hover:bg-blue-600
transition
"
>

Generate Revenue Report

</button>

<button
className="
w-full
bg-green-500
text-white
py-3
rounded-xl
hover:bg-green-600
transition
"
>

Generate User Report

</button>

</div>

</div>


{/* Download */}

<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-xl">
Download Center
</h2>

<p className="text-gray-500 mt-2">

Access generated reports

</p>

<button
className="
mt-6
border
border-indigo-500
text-indigo-500
w-full
py-3
rounded-xl
hover:bg-indigo-50
transition
"
>

Download Reports

</button>

</div>

</div>

</div>

)

case "settings":

return(

<div>

<h1 className="text-4xl font-bold">
Settings
</h1>

<p className="text-gray-500 mt-2 mb-8">
Manage your account preferences and profile
</p>

<div className="grid lg:grid-cols-2 gap-6">

{/* Profile Card */}

<div className="bg-white rounded-2xl p-6 shadow-sm">

<div className="flex items-center gap-4">

<img
src="https://i.pravatar.cc/80"
alt="User profile"
className="rounded-full"
/>

<div>

<h2 className="text-xl font-bold">
Alex John
</h2>

<p className="text-gray-500">
john@example.com
</p>

<p className="text-sm text-blue-500 mt-1">
Premium Member
</p>

</div>

</div>

<button
className="
mt-6
bg-blue-500
text-white
px-5
py-3
rounded-xl
hover:bg-blue-600
transition
"
>

Edit Profile

</button>

</div>


{/* Preferences */}

<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-lg mb-6">

Preferences

</h2>

<div className="space-y-5">

<div className="flex justify-between items-center">

<span>Dark Mode</span>

<input
type="checkbox"
className="w-5 h-5"
/>

</div>

<div className="flex justify-between items-center">

<span>Email Notifications</span>

<input
type="checkbox"
className="w-5 h-5"
/>

</div>

<div className="flex justify-between items-center">

<span>Auto Updates</span>

<input
type="checkbox"
className="w-5 h-5"
/>

</div>

</div>

</div>


{/* Security */}

<div className="bg-white rounded-2xl p-6 shadow-sm">

<h2 className="font-semibold text-lg">

Security

</h2>

<p className="text-gray-500 mt-2">

Protect your account and credentials

</p>

<div className="mt-6 space-y-3">

<button
className="
w-full
border
border-blue-500
text-blue-500
py-3
rounded-xl
hover:bg-blue-50
transition
"
>

Change Password

</button>

<button
className="
w-full
border
border-red-400
text-red-500
py-3
rounded-xl
hover:bg-red-50
transition
"
>

Logout Devices

</button>

</div>

</div>


{/* Save Card */}

<div
className="
bg-gradient-to-r
from-indigo-500
to-purple-500
rounded-2xl
p-6
text-white
shadow-sm
"
>

<h2 className="text-2xl font-bold">

Save Changes

</h2>

<p className="mt-3">

Your settings have unsaved updates.

</p>

<button
className="
mt-8
bg-white
text-black
px-80
py-80
rounded-xl
font-semibold
hover:scale-105
transition
"
>

Save Settings

</button>

</div>

</div>

</div>

)
default:
return null

}

};

return(

<LayoutWrapper
activePage={activePage}
setActivePage={setActivePage}
>

{renderPage()}

</LayoutWrapper>

);

}

export default App;