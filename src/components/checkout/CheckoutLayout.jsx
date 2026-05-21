import BillingForm from "./BillingForm";
import PlanSummary from "./PlanSummary";
import WalletCard from "./WalletCard";
import CouponSection from "./CouponSection";
import PaymentSummary from "./PaymentSummary";

function CheckoutLayout(){

return(

<div className="grid lg:grid-cols-3 gap-6 mt-6">

<div className="lg:col-span-2">

<BillingForm/>

</div>

<div className="space-y-4">

<PlanSummary/>

<WalletCard/>

<CouponSection/>

<PaymentSummary/>

</div>

</div>

)

}

export default CheckoutLayout;