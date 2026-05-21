import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip
} from "recharts";

const data = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 7000 },
  { month: "Apr", value: 6000 },
  { month: "May", value: 9000 },
  { month: "Jun", value: 8000 }
];

function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold mb-6">
        Revenue Analytics
      </h2>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>
            <XAxis dataKey="month"/>
            <Tooltip/>

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;