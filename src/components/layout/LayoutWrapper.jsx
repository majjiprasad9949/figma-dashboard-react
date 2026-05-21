import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

function LayoutWrapper({
children,
activePage,
setActivePage
}){

const [sidebarOpen,setSidebarOpen]=useState(false);

return(

<div className="flex">

<Sidebar
activePage={activePage}
setActivePage={setActivePage}
sidebarOpen={sidebarOpen}
setSidebarOpen={setSidebarOpen}
/>

<div className="
flex-1
lg:ml-64
">

<Header
setSidebarOpen={setSidebarOpen}
/>

<div className="p-6">

{children}

</div>

</div>

</div>

)

}

export default LayoutWrapper;