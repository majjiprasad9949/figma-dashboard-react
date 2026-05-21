import Header from "./components/layout/Header";
import CheckoutLayout from "./components/checkout/CheckoutLayout";

function App() {

return (

<div className="min-h-screen bg-[#F5F7FA]">

<Header/>

<div className="max-w-7xl mx-auto px-6 py-8">

<CheckoutLayout/>

</div>

</div>

);

}

export default App;