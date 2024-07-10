import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Build Your Web App Without Code</h1>
      <Image src="/images/banner.jpg" alt="Banner" width={1200} height={400} className="rounded-lg mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <FeatureCard
          title="Quick Setup"
          description="Choose from our pre-built templates and customize your app in minutes."
          icon="rocket.svg"
        />
        <FeatureCard
          title="Booking System"
          description="Integrate a powerful booking system to manage appointments and schedules."
          icon="calendar.svg"
        />
        <FeatureCard
          title="Team Collaboration"
          description="Add team members and collaborate seamlessly within your application."
          icon="team.svg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/images/thumbnail1.jpg" alt="Security First" width={400} height={300} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Security First Approach</h3>
            <p>We prioritize the security of your data and applications. With enterprise-grade security measures, your information is always protected.</p>
          </div>
          <div>
            <Image src="/images/thumbnail2.jpg" alt="Cost-Effective" width={400} height={300} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Cost-Effective Solution</h3>
            <p>Save on development costs and time with our affordable no-code platform. Scale your app as you grow without breaking the bank.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Simplicity at Its Core</h2>
        <Image src="/images/tutorial-filler.jpg" alt="User-Friendly Interface" width={1200} height={400} className="rounded-lg mb-4" />
        <p>We've designed our platform with user-friendliness in mind. Create, manage, and grow your web app with intuitive tools and interfaces.</p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Web App?</h2>
        <p className="mb-4">Join thousands of businesses who have transformed their online presence with our platform.</p>
        <Link href="/choose-template" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
          Start Your Free Trial
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Image src={`/icons/${icon}`} alt={title} width={48} height={48} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
