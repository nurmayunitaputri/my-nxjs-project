import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend, Bar, BarChart, PieChart, Pie } from 'recharts';
import { useState, useEffect } from 'react';

const CovidPage = () => {

    const [chartData, setChartData] = useState();
  
    const fetchData = async () => {
      try {
        const response = await axios({
          url: '/covid.json',
          method: 'get',
        });
        console.log("response > ", response.data);
        setChartData(response.data.list_data);
      } catch (error) {
        console.log("error > ", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const LineChartContainer = () => {
        const data = {
            region: chartData.list_data.key,
            cases: chartData.list_data.jumlah_kasus,
            recoverse: chartData.list_data.jumlah_sembuh
        };
    
    return (
      <div className="p-4 border w-full">
        <div className="mb-3">
            <h1 className="text-2x1 font-semibold"> COVID 19</h1>
        </div>
        <div className="shadow-md rounded-xl p-2 border-red-500 h-72 w-full">
         <ResponsiveContainer width="100%" height="100%"> 
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="2 2" />
                <Line type="monotone" dataKey={data.cases} stroke="#8884d8" />
                <Line type="monotone"  dataKey={data.recoverse} stroke="#d62c0e" />
                <XAxis dataKey="key" />
                <Tooltip />
                <Legend />
            </LineChart>
         </ResponsiveContainer>
        </div>
     </div>
    )
};
  
const BarChartContainer = ({data}) => {
    const penambahan = []
 data.forEach(element => {
     penambahan.push(element.penambahan)
 });
 console.log(penambahan)
 return (
     <div className="p-3 border w-full">
         <div className="mb -3">
             <h1 className="text-2xl font-bold"> Bar Chart</h1>
         </div>
         <div className="shadow-md rounded-xl p-2 border border-indigo-500 h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
                 <BarChart
                 width={500}
                 hight={300}
                 data={penambahan}
                 margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                 }}
                 >
                     <CartesianGrid strokeDasharray=" 3 3" />
                     <XAxis dataKey="key" />
                     <XAxis >
                         <Tooltip />
                         <Legend />
                         <Bar dataKey="positif" fill="#8884d8" />
                         <Bar dataKey="sembuh" fill="#8ca9d" />
                         <Bar dataKey="meninggal" fill="#d62c0e" />
                     </XAxis>
                 </BarChart>
             </ResponsiveContainer>
         </div>s
     </div>
 )
}


const CovidPage = () => {
    return (
      <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 p-3">
        {/* <LineChartContainer />
        <BarChartContainer />
        <PieChartContainer /> */}
      </div>
    )
  }
  export default CovidPage;