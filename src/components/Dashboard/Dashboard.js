import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div>
            <h1 className='text-6xl text-blue-800 font-mono text-center'>Deshboard</h1>
            <div className="my-10 mx-10 grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-around items-center gap-32">

                <div className='AreaChart'>
                    <h1 className='my-6 text-center text-4xl text-cyan-400'>Investment VS Sell</h1>
                    <AreaChart width={700} height={350} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div className="ComposedChart">
                    <h1 className='my-6 text-center text-4xl text-cyan-400'>Investment vs Sell vs Revenue </h1>
                    <ComposedChart width={700} height={350} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                    </ComposedChart>
                </div>
                <div className="BarChart">
                    <h1 className='my-6 text-center text-4xl text-cyan-400'>Investment vs Revenue </h1>
                    <BarChart width={700} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className="AreaChart">
                    <h1 className='my-6 text-center text-4xl text-cyan-400'>Monthly Sell</h1>
                    <AreaChart
                        width={700}
                        height={350}
                        data={data}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Area dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                        <Tooltip />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;