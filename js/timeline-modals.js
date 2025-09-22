// Timeline modal data and generation logic

// Modal content data structure
const timelineModalData = [
  {
    id: "1968",
    title: "Intel Founded",
    image: "img/webp/1.webp",
    imageAlt: "Early Intel office",
    subtitle: "The Beginning of a Tech Giant",
    description: [
      "On July 18, 1968, Robert Noyce and Gordon Moore founded Intel with just $2.5 million in funding. The name \"Intel\" was derived from \"integrated electronics.\"",
      "Their vision was to create memory chips using silicon-based manufacturing, which would eventually lead to the microprocessor revolution."
    ],
    sectionTitle: "Key Facts",
    bulletPoints: [
      "Initial funding: $2.5 million",
      "First product: 3101 Schottky bipolar memory",
      "First headquarters: Mountain View, California"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/company-overview/company-overview.html",
    linkText: "Learn More About Intel"
  },
  {
    id: "1971",
    title: "First Microprocessor",
    image: "img/webp/2.webp",
    imageAlt: "Intel 4004 microprocessor",
    subtitle: "The 4004 Revolution",
    description: [
      "The Intel 4004, released in November 1971, was the world's first commercially available microprocessor, marking the beginning of the digital revolution.",
      "This innovation consolidated multiple circuit boards' worth of computing capability into a single chip, dramatically reducing the physical resources needed for computing tasks."
    ],
    sectionTitle: "Technical Specifications",
    bulletPoints: [
      "Clock speed: 740 kHz",
      "Transistor count: 2,300",
      "Manufacturing process: 10μm",
      "Power consumption significantly lower than previous computing solutions"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/history/museum-story-of-intel-4004.html",
    linkText: "Learn About the 4004"
  },
  {
    id: "1978",
    title: "8086 Processor",
    image: "img/webp/3.webp",
    imageAlt: "Intel 8086 processor chip",
    subtitle: "Birth of the x86 Architecture",
    description: [
      "The Intel 8086, introduced in 1978, was the first 16-bit processor in the x86 family that would go on to define modern computing.",
      "The processor's success established Intel as a leader in the emerging personal computer market, as the architecture would become the foundation for millions of computers worldwide."
    ],
    sectionTitle: "Technological Impact",
    bulletPoints: [
      "29,000 transistors at 3.2 microns",
      "Enabled more powerful computing with less material",
      "Created foundation for backward compatibility that extends to today",
      "Reduced energy requirements compared to earlier computing solutions"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/history/virtual-vault/articles/birth-of-the-intel-8086-processor.html",
    linkText: "Explore the 8086 Legacy"
  },
  {
    id: "1985",
    title: "386 Processor",
    image: "img/webp/4.webp",
    imageAlt: "Intel 386 processor chip",
    subtitle: "The 32-bit Revolution",
    description: [
      "The Intel 386 processor marked Intel's shift to 32-bit computing, dramatically increasing the capabilities of personal computers.",
      "This processor enabled more sophisticated software applications that could solve increasingly complex problems—a significant step toward more efficient computing."
    ],
    sectionTitle: "Performance & Efficiency",
    bulletPoints: [
      "First 32-bit x86 processor with 275,000 transistors",
      "Manufacturing process: 1.5μm",
      "Introduced protected mode and virtual memory",
      "Enabled sophisticated multitasking which improved productivity and efficiency"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/history/virtual-vault/articles/intel386-processor.html",
    linkText: "386 Processor History"
  },
  {
    id: "2006",
    title: "Peak GHG Emissions",
    image: "img/webp/5.webp",
    imageAlt: "Factory with emissions",
    subtitle: "A Turning Point",
    description: [
      "In 2006, Intel reached its peak greenhouse gas emissions, marking a critical moment in the company's history.",
      "This inflection point led to a comprehensive sustainability strategy that would transform Intel's operations over the following decades."
    ],
    sectionTitle: "Key Initiatives Following 2006",
    bulletPoints: [
      "Installation of advanced abatement equipment in fabrication facilities",
      "First major purchases of renewable energy certificates",
      "Energy efficiency incorporated into all new facility designs",
      "Development of more energy-efficient manufacturing processes"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/corporate-responsibility/climate-change.html",
    linkText: "Intel's Climate Strategy"
  },
  {
    id: "2020",
    title: "RISE Strategy",
    image: "img/webp/6.webp",
    imageAlt: "RISE strategy graphic",
    subtitle: "Comprehensive Sustainability Framework",
    description: [
      "In 2020, Intel launched its RISE strategy—Responsible, Inclusive, Sustainable, and Enabling—establishing one of the most comprehensive corporate sustainability frameworks in the technology industry.",
      "The RISE strategy set ambitious 2030 goals, creating a roadmap for Intel's next decade of corporate responsibility initiatives."
    ],
    sectionTitle: "RISE Strategy Components",
    bulletPoints: [
      "<strong>Responsible:</strong> Lead in responsible business practices",
      "<strong>Inclusive:</strong> Advance diversity and inclusion",
      "<strong>Sustainable:</strong> Reduce environmental impact across operations",
      "<strong>Enabling:</strong> Accelerate positive change through technology"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/corporate-responsibility/2030-goals.html",
    linkText: "Explore RISE 2030 Goals"
  },
  {
    id: "2022",
    title: "Net-Zero By 2040",
    image: "img/webp/7.webp",
    imageAlt: "Net-zero graphic",
    subtitle: "Ambitious Climate Commitment",
    description: [
      "In 2022, Intel announced its commitment to achieve net-zero greenhouse gas emissions in its global operations by 2040, setting one of the most ambitious climate targets in the semiconductor industry.",
      "The net-zero commitment recognized the urgency of addressing climate change and positioned Intel as a leader in corporate climate action."
    ],
    sectionTitle: "Key Components of the Net-Zero Strategy",
    bulletPoints: [
      "100% renewable electricity across global operations",
      "Investment in energy conservation projects to reduce consumption",
      "Development of new abatement equipment for manufacturing processes",
      "Collaboration with suppliers to reduce upstream emissions"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/newsroom/news/net-zero-greenhouse-gas-emissions-operations.html",
    linkText: "Net-Zero Announcement"
  },
  {
    id: "2023",
    title: "Renewable Electricity",
    image: "img/webp/8.webp",
    imageAlt: "Wind turbines for renewable energy",
    subtitle: "98% Renewable Milestone",
    description: [
      "In 2023, Intel achieved a remarkable milestone by powering its global operations with 98% renewable electricity, dramatically reducing the company's carbon footprint.",
      "The transition to renewable electricity helped Intel reduce its Scope 2 emissions by over 90% compared to the 2006 peak."
    ],
    sectionTitle: "Renewable Electricity Sources",
    bulletPoints: [
      "On-site solar installations at facilities in multiple countries",
      "Long-term power purchase agreements (PPAs) with renewable providers",
      "Green tariffs through utilities in various regions",
      "Renewable energy certificates (RECs) to address remaining gaps"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/corporate-responsibility/environmental-sustainability.html",
    linkText: "Environmental Sustainability"
  },
  {
    id: "2024",
    title: "Sustainability Summit",
    image: "img/webp/9.webp",
    imageAlt: "People at a summit",
    subtitle: "Industry Collaboration",
    description: [
      "In 2024, Intel hosted its first Sustainability Summit, bringing together suppliers, government officials, industry leaders, and environmental experts.",
      "This initiative recognized that achieving true sustainability requires collaboration beyond any single company's operations."
    ],
    sectionTitle: "Key Focus Areas",
    bulletPoints: [
      "Water-efficient semiconductor manufacturing processes",
      "Energy-efficient fab designs and operations",
      "Circular economy approaches for equipment and materials",
      "Cross-industry standardization of sustainability metrics"
    ],
    linkUrl: "https://www.intel.com/content/www/us/en/corporate-responsibility/esg-report.html",
    linkText: "Intel ESG Report"
  }
];

// Function to generate modals from data
function generateTimelineModals() {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'timeline-modals';
  
  timelineModalData.forEach(modal => {
    const modalHTML = `
      <div class="modal fade" id="modal${modal.id}" tabindex="-1" aria-labelledby="modal${modal.id}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-4" id="modal${modal.id}Label">${modal.id}: ${modal.title}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6">
                  <img src="${modal.image}" alt="${modal.imageAlt}" class="img-fluid rounded mb-3" loading="lazy">
                </div>
                <div class="col-md-6">
                  <h3 class="h5 mb-3">${modal.subtitle}</h3>
                  ${modal.description.map(para => `<p>${para}</p>`).join('')}
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <div class="card bg-light p-3 mt-2">
                    <h5 class="h6">${modal.sectionTitle}</h5>
                    <ul>
                      ${modal.bulletPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="${modal.linkUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-intel">${modal.linkText}</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    modalContainer.innerHTML += modalHTML;
  });
  
  document.body.appendChild(modalContainer);
}

// Initialize modals when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', generateTimelineModals);
