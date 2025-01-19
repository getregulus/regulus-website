import React from 'react';
import DocLayout from '../../components/doc-layout';
import Seo from '../../components/seo';

const breadcrumbPath = [
    { label: "Docs", href: "/docs" },
    { label: "What is Regulus?" },
];

const WhatIsRegulus = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
            <Seo 
                title="What is Regulus?"
                description="Discover Regulus, a blockchain monitoring and alerting platform. Learn about real-time transaction analysis, custom rules, audit logging, and more."
            >
                <meta name="keywords" content="Blockchain Monitoring, Web3 Transactions, Regulus Features, Audit Logging, API Authentication" />
                <meta property="og:url" content="https://getregulus.co/docs" />
            </Seo>
            <main className="flex-grow">
                <section className="py-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Main Title */}
                        <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
                            What is Regulus?
                        </h1>
                        
                        {/* Unified Description */}
                        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                            Regulus is an advanced <strong>blockchain monitoring and alerting platform</strong> that empowers organizations to streamline their Web3 operations. It provides real-time transaction monitoring, custom rules for alerts, audit logging, and robust analytics to ensure seamless blockchain management.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg mb-12 leading-relaxed">
                            Whether you're building decentralized applications (dApps), managing large-scale blockchain infrastructure, or ensuring regulatory compliance, Regulus simplifies complex tasks and helps you unlock new opportunities in the decentralized ecosystem.
                        </p>

                        {/* Key Features Section */}
                        <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-8">
                            Key Features
                        </h2>

                        {/* Unified Key Features Bulleted Format */}
                        <ul className="list-disc list-inside space-y-4">
                            <li className="text-gray-700 text-base sm:text-lg">
                                <span className="font-semibold text-gray-800">Real-Time Blockchain Monitoring:</span> Track and visualize blockchain transactions in real-time. Automatically detect anomalies and flag suspicious patterns with minimal setup.
                            </li>
                            <li className="text-gray-700 text-base sm:text-lg">
                                <span className="font-semibold text-gray-800">Custom Rule Engine:</span> Define and enforce monitoring rules tailored to your use cases. Automate alerts based on transaction thresholds, token activity, or custom conditions.
                            </li>
                            <li className="text-gray-700 text-base sm:text-lg">
                                <span className="font-semibold text-gray-800">Audit Logging:</span> Keep detailed logs of system activities and export them to CSV for compliance and reporting purposes.
                            </li>
                            <li className="text-gray-700 text-base sm:text-lg">
                                <span className="font-semibold text-gray-800">Scalable and Flexible Design:</span> Integrate with existing tools and workflows while scaling to handle high transaction volumes in enterprise-grade environments.
                            </li>
                            <li className="text-gray-700 text-base sm:text-lg">
                                <span className="font-semibold text-gray-800">Secure Authentication:</span> Protect APIs with token-based authentication, including JWT support. Enhance security with third-party identity providers like Google.
                            </li>
                            <li className="text-gray-700 text-base sm:text-lg">
                                <span className="font-semibold text-gray-800">Developer-Friendly Architecture:</span> Leverage detailed API documentation and pre-built integrations. Features utilities for validation, rate limiting, and response handling.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </DocLayout>
    );
};

export default WhatIsRegulus;
