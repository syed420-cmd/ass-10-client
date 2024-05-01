import { useEffect, useState } from 'react';
import SectionHead from '../../ReusableUI/SectionHead';
import Plan from './Plan';

const Pricing = () => {
  const [plan, setPlan] = useState(null);
  console.log(plan)
  useEffect(() => {
    fetch('/pricing_plan.json')
      .then((res) => res.json())
      .then((plan) => setPlan(plan));
  }, []);
  return (
    // <div className='w-full bg-[#87ceeb09] py-4'>
    //   <div className='mx-auto max-w-screen-2xl px-4 my-20'>
    //     <SectionHead
    //       title='Pricing'
    //       subTitle='Creating Memorable Experiences Within Your Budget: Discover Our Versatile Event Pricing Plans Designed Just for You.'
    //     />
    //     {/* all pricing plan wrap  */}
    //     <div className='grid gap-10 content-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    //       {plan?.map((singlePlan, index) => (
    //         <Plan key={index} singlePlan={singlePlan} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
      
<div
    className="relative w-full bg-white px-6 pt-10 pb-8 mt-8   sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

            </p>
        </div>
        <div className="mx-auto mt-8 grid  divide-y divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>How do I care for my sculptures and models</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Proper care ensures the longevity of your artworks. Dust sculptures regularly with a soft brush or cloth to prevent buildup. Avoid placing them in direct sunlight or humid environments, as this can cause damage over time. For models made of delicate materials like clay or wood, consider displaying them in a protective case or cabinet.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Can I get a refund for my subscription?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Absolutely! We welcome custom requests. Simply reach out to us with your ideas, and we'll work closely with you to bring your vision to life. Our skilled artisans will collaborate with you every step of the way to ensure your custom artwork meets your specifications and exceeds your expectations.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>How long does it take to create a custom sculpture?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">The time required to create a custom sculpture depends on various factors, including its complexity, size, and the materials used. Generally, the process can take anywhere from several weeks to several months. We'll provide you with a personalized timeline based on your specific project requirements during the consultation phase.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Do you offer shipping services for artworks?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we offer shipping services for artworks to both domestic and international locations. We take great care in packaging and handling each piece to ensure it arrives safely at its destination. Shipping costs may vary depending on the size and weight of the artwork, as well as the shipping destination.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Are there any upcoming workshops or events I can attend?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we frequently host workshops, events, and exhibitions for art enthusiasts of all levels. Stay updated on our website or social media channels for announcements about upcoming events. Whether you're a beginner looking to learn new skills or a seasoned artist seeking inspiration, we have something for everyone!
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Do you offer any discounts or promotions?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                        from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                        up for the company's newsletter or follow it on social media.
                    </p>
                </details>
            </div>
        </div>
    </div>
</div>
    
  );
};

export default Pricing;
