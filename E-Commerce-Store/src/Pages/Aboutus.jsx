
import { Link } from "react-router-dom";

// Reusable card component using children
function AboutCard({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
}

export default function Aboutus() {
  const benefits = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your favorite products delivered quickly and safely."
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      description: "Enjoy a simple shopping experience with security in mind."
    },
    {
      icon: "🎧",
      title: "Customer Support",
      description: "We are here to help you with your shopping questions."
    },
    {
      icon: "⭐",
      title: "Quality Products",
      description: "Discover carefully selected products for everyday life."
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:px-10">

          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About ShopHub
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Trusted Online Shopping{" "}
              <span className="text-blue-600">Partner</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              At ShopHub, we believe shopping should be simple,
              convenient, and enjoyable. We bring together great
              products, affordable prices, and a smooth shopping
              experience to make your everyday life easier.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Explore Products →
              </Link>

              <Link
                to="/"
                className="rounded-full border border-blue-200 bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85"
              alt="A modern workspace representing online shopping and technology"
              className="relative h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96"
            />

            <div className="absolute -bottom-5 left-4 rounded-2xl border border-blue-50 bg-white p-4 shadow-xl sm:left-8 sm:p-5">
              <p className="text-sm text-slate-500">
                Our promise
              </p>
              <p className="mt-1 font-bold text-blue-700">
                Simple. Smart. Convenient.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Get to know us
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            The Story Behind ShopHub
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            We are passionate about making online shopping
            easier, more accessible, and more enjoyable for everyone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <AboutCard icon="👋" title="Who We Are">
            ShopHub is an online store focused on helping customers
            discover useful products and enjoy a convenient shopping
            experience from anywhere.
          </AboutCard>

          <AboutCard icon="🎯" title="Our Mission">
            Our mission is to make online shopping simple by bringing
            quality products, clear information, and a customer-focused
            experience together in one place.
          </AboutCard>

          <AboutCard icon="💡" title="Our Vision">
            We aim to build a trusted shopping destination where
            customers can discover products with confidence and
            enjoy a seamless experience.
          </AboutCard>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo- shopping"
              alt="Shopping experience"
              className="hidden"
            />

            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="Customer making a payment at a store"
              className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
            />

            <div className="absolute -bottom-4 -right-3 rounded-2xl bg-blue-600 px-5 py-4 text-white shadow-lg sm:-right-5">
              <p className="text-lg font-bold">Shopping made easier</p>
              <p className="mt-1 text-sm text-blue-100">
                Every step, designed for you.
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose ShopHub?
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              More Than Just an Online Store
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We want every visit to ShopHub to feel easy and
              enjoyable. From discovering products to completing
              your order, our goal is to provide a smooth experience
              that puts customers first.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    {benefit.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                What matters to us
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Our Values, Your Experience
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                We believe that a great store is built on trust,
                transparency, and care for its customers. These
                values guide the experience we want to deliver
                every day.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Customer First",
                "Quality Products",
                "Fair Prices",
                "Trust & Transparency"
              ].map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 font-semibold text-slate-700"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                    ✓
                  </span>
                  {value}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Discover Something Great?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Explore our collection and find products that fit
              your needs and your lifestyle.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Start Shopping →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
