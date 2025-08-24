import { useState } from 'react';
import { Award, Filter, Building, Tag } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { Button } from './ui/button';

interface Certificate {
  title: string;
  provider: string;
  domain: string[];
  image: string;
  issueDate?: string;
  credentialId?: string;
}

const Certifications = () => {
  const [filterType, setFilterType] = useState<'all' | 'provider' | 'domain'>('all');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const certificates: Certificate[] = [
    {
      title: "Project Development Using Java",
      provider: "Udemy",
      domain: ["Java", "Project Development"],
      image: "/certificates/udemy/Project_development_using_Java.jpg",
      issueDate: "May 2025",
      credentialId: "NA"
    },
    {
      title: "Professional Diploma in Agile & Project Management",
      provider: "Udemy",
      domain: ["Project Development"],
      image: "/certificates/udemy/Professional_Diploma_in_Agile_&_Project_Management.jpg",
      issueDate: "April 2024",
      credentialId: "NA"
    },
    {
      title: "Master in Product Design, Development & Prototyping",
      provider: "Udemy",
      domain: ["Project Development"],
      image: "/certificates/udemy/Master_in_Product_Design_and_Development_and_Prototyping.jpg",
      issueDate: "May 2025",
      credentialId: "NA"
    },
    {
      title: "Management Skills Training",
      provider: "Udemy",
      domain: ["Management"],
      image: "/certificates/udemy/Management_skills_training.jpg",
      issueDate: "May 2024",
      credentialId: "NA"
    },
    {
      title: "Excel Dashboards",
      provider: "Udemy",
      domain: ["Excel"],
      image: "/certificates/udemy/Excel_Dashboards.jpg",
      issueDate: "May 2024",
      credentialId: "NA"
    },
    {
      title: "Computer Networks and Internet Protocol",
      provider: "NPTEL",
      domain: ["CN&IP"],
      image: "/certificates/nptel/NPTEL - Computer Networks and Internet Protocol.jpg",
      issueDate: "April 2025",
      credentialId: "NA"
    },
    {
      title: "Introduction To Internet Of Things",
      provider: "NPTEL",
      domain: ["IOT"],
      image: "/certificates/nptel/NPTEL - Introduction To Internet Of Things.jpg",
      issueDate: "April 2025",
      credentialId: "NA"
    },
    {
      title: "Introduction to Machine Learning",
      provider: "NPTEL",
      domain: ["AIML"],
      image: "/certificates/nptel/NPTEL - Introduction to Machine Learning.jpg",
      issueDate: "October 2024",
      credentialId: "NA"
    },
    {
      title: "Programming in Java",
      provider: "NPTEL",
      domain: ["Java"],
      image: "/certificates/nptel/NPTEL - Programming in Java.jpg",
      issueDate: "October 2023",
      credentialId: "NA"
    },
    {
      title: "Software Testing",
      provider: "NPTEL",
      domain: ["SDE"],
      image: "/certificates/nptel/NPTEL - Software Testing.jpg",
      issueDate: "October 2024",
      credentialId: "NA"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      provider: "Google",
      domain: ["Data Analytics", "Business Intelligence"],
      image: "/certificates/google/data-analytics.jpg",
      issueDate: "2023",
      credentialId: "ABC123"
    },
    {
      title: "AWS Machine Learning Specialty",
      provider: "Amazon Web Services",
      domain: ["Machine Learning", "Cloud Computing"],
      image: "/certificates/aws/ml-specialty.jpg",
      issueDate: "2023",
      credentialId: "AWS456"
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera",
      domain: ["Deep Learning", "Artificial Intelligence"],
      image: "/certificates/coursera/deep-learning.jpg",
      issueDate: "2023",
      credentialId: "COURSE789"
    },
    {
      title: "Python for Data Science",
      provider: "IBM",
      domain: ["Programming", "Data Science"],
      image: "/certificates/ibm/python-data-science.jpg",
      issueDate: "2022",
      credentialId: "IBM101"
    }
  ];

  const providers = [...new Set(certificates.map(cert => cert.provider))];
  const domains = [...new Set(certificates.flatMap(cert => cert.domain))];

  const filteredCertificates = certificates.filter(cert => {
    if (filterType === 'all' || selectedFilter === 'all') return true;
    if (filterType === 'provider') return cert.provider === selectedFilter;
    if (filterType === 'domain') return cert.domain.includes(selectedFilter);
    return true;
  });

  const handleFilterChange = (type: 'all' | 'provider' | 'domain', value: string = 'all') => {
    setFilterType(type);
    setSelectedFilter(value);
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrambleText 
            text="Certifications" 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <ScrambleText 
            text="Professional certificates and achievements across various domains"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            delay={300}
          />
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button
              variant={filterType === 'all' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('all')}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              All Certificates
            </Button>
            
            <div className="flex items-center gap-2">
              <Building className="text-emerald-400" size={16} />
              <select
                value={filterType === 'provider' ? selectedFilter : 'all'}
                onChange={(e) => handleFilterChange('provider', e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="all">All Providers</option>
                {providers.map(provider => (
                  <option key={provider} value={provider}>{provider}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Tag className="text-emerald-400" size={16} />
              <select
                value={filterType === 'domain' ? selectedFilter : 'all'}
                onChange={(e) => handleFilterChange('domain', e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="all">All Domains</option>
                {domains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center">
            <span className="text-gray-400 text-sm">
              Showing {filteredCertificates.length} of {certificates.length} certificates
            </span>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Certificate Image */}
              <div className="aspect-video bg-gray-700/50 flex items-center justify-center p-8">
                <div className="w-full h-full bg-gray-600/30 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                  <div className="text-center">
                    <Award className="text-gray-500 mx-auto mb-2" size={32} />
                    <span className="text-gray-500 text-sm">Certificate Image</span>
                    <div className="text-xs text-gray-600 mt-1">{cert.image}</div>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <ScrambleText 
                  text={cert.title}
                  className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors"
                  delay={index * 100}
                />

                <div className="flex items-center gap-2 mb-3">
                  <Building className="text-emerald-400" size={16} />
                  <ScrambleText 
                    text={cert.provider}
                    className="text-emerald-400 font-semibold"
                    delay={index * 100 + 50}
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.domain.map((domain, domainIndex) => (
                    <span 
                      key={domainIndex}
                      className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30"
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                {cert.issueDate && (
                  <div className="text-gray-400 text-sm mb-2">
                    Issued: {cert.issueDate}
                  </div>
                )}

                {cert.credentialId && (
                  <div className="text-gray-500 text-xs">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="text-gray-600 mx-auto mb-4" size={64} />
            <ScrambleText 
              text="No certificates found for the selected filter"
              className="text-gray-400 text-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
