export default function Home() {
  const products = [
    ["Classic Hoodie", "Clothing", "$58", "342 sold", "In Stock"],
    ["Wireless Earbuds", "Electronics", "$89", "214 sold", "Low Stock"],
    ["Fitness Bottle", "Accessories", "$24", "489 sold", "In Stock"],
    ["Smart Watch", "Electronics", "$129", "176 sold", "In Stock"],
  ];

  const orders = [
    ["#1024", "Aarav Sharma", "$320", "Completed"],
    ["#1025", "Riya Patel", "$120", "Pending"],
    ["#1026", "Kabir Singh", "$870", "Completed"],
    ["#1027", "Ananya Mehta", "$240", "Processing"],
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div>
            <p className="text-emerald-400 font-semibold mb-3">
              Real SaaS Analytics Dashboard
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">
              Shopify Analytics PRO
            </h1>
            <p className="text-zinc-400 mt-4 max-w-2xl">
              Track revenue, orders, customers, products, and store performance
              from a clean modern dashboard.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 min-w-[230px]">
            <p className="text-zinc-400">Monthly Revenue</p>
            <h2 className="text-4xl font-bold mt-2">$48,320</h2>
            <p className="text-emerald-400 mt-2">+18.4% from last month</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-10">
          {[
            ["Total Revenue", "$48,320", "+18.4%"],
            ["Orders", "1,284", "+12.2%"],
            ["Customers", "892", "+9.8%"],
            ["Conversion Rate", "4.8%", "+2.1%"],
          ].map(([title, value, growth]) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:scale-[1.02] transition duration-300"
            >
              <p className="text-zinc-400">{title}</p>
              <h2 className="text-3xl font-bold mt-3">{value}</h2>
              <p className="text-emerald-400 mt-3">{growth}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Revenue Overview</h2>
                <p className="text-zinc-400 mt-2">Last 6 months performance</p>
              </div>
              <span className="text-emerald-400 font-semibold">Growing</span>
            </div>

            <div className="flex items-end gap-5 h-72">
              {[45, 62, 55, 78, 70, 92].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-3">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-600 to-emerald-300"
                    style={{ height: `${height}%` }}
                  ></div>
                  <p className="text-zinc-500 text-sm">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Traffic Sources</h2>

            {[
              ["Organic", "42%", "w-[42%]"],
              ["Social", "28%", "w-[28%]"],
              ["Email", "18%", "w-[18%]"],
              ["Ads", "12%", "w-[12%]"],
            ].map(([name, percent, width]) => (
              <div key={name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <p className="text-zinc-300">{name}</p>
                  <p className="text-zinc-400">{percent}</p>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${width}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Top Products</h2>

            <div className="space-y-4">
              {products.map(([name, category, price, sold, status]) => (
                <div
                  key={name}
                  className="grid grid-cols-5 gap-4 border-b border-white/10 pb-4 text-sm"
                >
                  <span className="col-span-2 font-semibold">{name}</span>
                  <span className="text-zinc-400">{category}</span>
                  <span>{price}</span>
                  <span className="text-emerald-400">{status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Recent Orders</h2>

            <div className="space-y-4">
              {orders.map(([id, customer, amount, status]) => (
                <div
                  key={id}
                  className="grid grid-cols-4 gap-4 border-b border-white/10 pb-4 text-sm"
                >
                  <span className="font-semibold">{id}</span>
                  <span className="text-zinc-400">{customer}</span>
                  <span>{amount}</span>
                  <span
                    className={
                      status === "Completed"
                        ? "text-emerald-400"
                        : status === "Pending"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center text-zinc-500 text-sm">
          Built with Next.js, Tailwind CSS and SaaS analytics dashboard design.
        </footer>
      </section>
    </main>
  );
}