export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        Shopify Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Total Revenue</h2>
          <p className="text-3xl font-bold mt-2">$48,320</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Orders</h2>
          <p className="text-3xl font-bold mt-2">1,284</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Customers</h2>
          <p className="text-3xl font-bold mt-2">892</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-gray-400">Conversion Rate</h2>
          <p className="text-3xl font-bold mt-2">4.8%</p>
        </div>
      </div>

      <div className="bg-zinc-900 mt-10 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span>Order #1024</span>
            <span>$320</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span>Order #1025</span>
            <span>$120</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span>Order #1026</span>
            <span>$870</span>
          </div>
        </div>
      </div>
    </main>
  );
}