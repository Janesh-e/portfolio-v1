import { useState } from 'react';
import { Award, Filter, Building, Tag, ChevronUp, ChevronDown, ZoomIn, X } from 'lucide-react';
import ScrambleText from './ScrambleText';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

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
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const CERTIFICATES_PER_PAGE = 8; // 4 per row, 2 rows

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
      title: "C",
      provider: "IITB Spoken Tutorial",
      domain: ["C"],
      image: "/certificates/iitb-spoken-tutorial/Spoken tutorial - C.jpg",
      issueDate: "April 2023",
      credentialId: "NA"
    },
    {
      title: "Python",
      provider: "IITB Spoken Tutorial",
      domain: ["Python"],
      image: "/certificates/iitb-spoken-tutorial/Spoken tutorial - Python.jpg",
      issueDate: "April 2024",
      credentialId: "NA"
    },
    {
      title: "Git",
      provider: "IITB Spoken Tutorial",
      domain: ["Git"],
      image: "/certificates/iitb-spoken-tutorial/Spoken tutorial - Git.jpg",
      issueDate: "May 2025",
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

  const totalPages = Math.ceil(filteredCertificates.length / CERTIFICATES_PER_PAGE);
  const startIndex = currentPage * CERTIFICATES_PER_PAGE;
  const currentCertificates = filteredCertificates.slice(startIndex, startIndex + CERTIFICATES_PER_PAGE);

  const handleFilterChange = (type: 'all' | 'provider' | 'domain', value: string = 'all') => {
    setFilterType(type);
    setSelectedFilter(value);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
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

          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">
              Showing {startIndex + 1}-{Math.min(startIndex + CERTIFICATES_PER_PAGE, filteredCertificates.length)} of {filteredCertificates.length} certificates
            </span>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="flex items-center gap-1"
                >
                  <ChevronUp size={16} />
                  Previous
                </Button>
                <span className="text-gray-400 text-sm px-3">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronDown size={16} />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="max-h-[800px] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {currentCertificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group relative"
              >
                {/* Certificate Image */}
                <div className="aspect-[4/3] bg-gray-700/50 relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-600/30 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                    <div className="text-center">
                      <Award className="text-gray-500 mx-auto mb-2" size={24} />
                      <span className="text-gray-500 text-xs">Image not found</span>
                    </div>
                  </div>
                  {/* Zoom button */}
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                {/* Certificate Details */}
                <div className="p-3">
                  <ScrambleText 
                    text={cert.title}
                    className="text-sm font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2"
                    delay={index * 100}
                  />

                  <div className="flex items-center gap-1 mb-2">
                    <Building className="text-emerald-400" size={12} />
                    <ScrambleText 
                      text={cert.provider}
                      className="text-emerald-400 font-semibold text-xs"
                      delay={index * 100 + 50}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {cert.domain.slice(0, 2).map((domain, domainIndex) => (
                      <span 
                        key={domainIndex}
                        className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30"
                      >
                        {domain}
                      </span>
                    ))}
                    {cert.domain.length > 2 && (
                      <span className="text-gray-500 text-xs">+{cert.domain.length - 2}</span>
                    )}
                  </div>

                  {cert.issueDate && (
                    <div className="text-gray-400 text-xs">
                      {cert.issueDate}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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

        {/* Certificate Detail Modal */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-white text-xl">{selectedCertificate?.title}</DialogTitle>
            </DialogHeader>
            {selectedCertificate && (
              <div className="space-y-4">
                <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-600/30 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="text-gray-500 mx-auto mb-2" size={48} />
                      <span className="text-gray-500">Certificate image not available</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-2">Provider</h3>
                    <p className="text-gray-300">{selectedCertificate.provider}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-2">Domains</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.domain.map((domain, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full border border-emerald-500/30"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedCertificate.issueDate && (
                    <div>
                      <h3 className="text-emerald-400 font-semibold mb-2">Issue Date</h3>
                      <p className="text-gray-300">{selectedCertificate.issueDate}</p>
                    </div>
                  )}
                  
                  {selectedCertificate.credentialId && selectedCertificate.credentialId !== 'NA' && (
                    <div>
                      <h3 className="text-emerald-400 font-semibold mb-2">Credential ID</h3>
                      <p className="text-gray-300 font-mono text-sm">{selectedCertificate.credentialId}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
