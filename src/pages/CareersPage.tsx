import React from 'react';
import { Briefcase, Send, CheckCircle2, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [careerForm, setCareerForm] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    department: 'R&D / Food Science',
    experience: '3-5 years',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCareerForm({
        fullName: '',
        email: '',
        phone: '',
        department: 'R&D / Food Science',
        experience: '3-5 years',
        message: ''
      });
    }, 3500);
  };

  const openings = [
    {
      title: 'Senior Food Scientist / Application Technologist (Dairy)',
      location: 'New Borg El-Arab City / Alexandria',
      department: 'R&D & Application Center',
      type: 'Full-Time',
      desc: 'Formulation of processed cheese stabilizer blends, yogurt texture optimizers, and pilot trials.'
    },
    {
      title: 'Chemical & Microbiological QC Specialist',
      location: 'New Borg El-Arab Plant',
      department: 'Quality Assurance',
      type: 'Full-Time',
      desc: 'Raw material testing, HPLC / viscosity profiling, and microbiological pathogen screening.'
    },
    {
      title: 'Technical Sales Manager (Food Ingredients)',
      location: 'Cairo Office (Sheraton)',
      department: 'Commercial Sales',
      type: 'Full-Time',
      desc: 'Managing key accounts across FMCG industrial food processors, dairy, and beverage manufacturers.'
    },
    {
      title: 'Supply Chain & Cold Logistics Coordinator',
      location: 'Alexandria Office',
      department: 'Logistics & Operations',
      type: 'Full-Time',
      desc: 'Coordinating reefer fleet distribution, temperature monitoring, and warehouse FIFO dispatch.'
    }
  ];

  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">Join Our Team</span>
          <h1 className="page-banner-title">Careers at AWA Group</h1>
          <p className="page-banner-subtitle">
            Be part of a passionate team driving food science, cutting-edge ingredient solutions, and sustainable growth across Egypt.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Culture & Growth</span>
            <h2 className="section-title">Why Build Your Career At AWA?</h2>
            <p className="section-desc">
              We invest in talent, provide world-class laboratory environments, and cultivate an inspiring culture of innovation.
            </p>
          </div>

          <div className="cards-3col">
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Continuous Scientific Learning</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Access to cutting-edge pilot equipment, international supplier seminars, and hands-on food formulation mentorship.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Competitive Rewards</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Attractive compensation packages, medical insurance, transportation assistance, and performance-based bonuses.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                <HeartHandshake size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dynamic Work Culture</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A respectful, inclusive, and collaborative environment where your ideas directly shape leading food products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Opportunities & Application Form */}
      <section className="section section-alt">
        <div className="container">
          <div className="contact-grid">
            {/* Openings list */}
            <div>
              <span className="badge">Current Opportunities</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Featured Job Openings</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                {openings.map((job, idx) => (
                  <div key={idx} style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111a2e' }}>{job.title}</h4>
                      <span className="badge" style={{ margin: 0, fontSize: '0.75rem' }}>{job.type}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#128d46', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {job.department} • {job.location}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.5' }}>
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application form */}
            <div className="contact-card">
              <span className="badge">Direct Application</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111a2e', marginBottom: '1.5rem' }}>
                Submit Your Resume
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={54} color="#128d46" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.5rem' }}>Application Received!</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    Thank you for your interest in AWA Group. Our HR talent acquisition team will review your profile and reach out if your qualifications match our current vacancies.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Sara Mahmoud"
                      value={careerForm.fullName}
                      onChange={(e) => setCareerForm({ ...careerForm, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="sara@example.com"
                      value={careerForm.email}
                      onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+20 1X XXXX XXXX"
                      value={careerForm.phone}
                      onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Target Department</label>
                      <select
                        className="form-select"
                        value={careerForm.department}
                        onChange={(e) => setCareerForm({ ...careerForm, department: e.target.value })}
                      >
                        <option value="R&D / Food Science">R&D / Food Science</option>
                        <option value="Quality Assurance / QC">Quality Assurance / QC</option>
                        <option value="Technical Sales">Technical Sales</option>
                        <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                        <option value="Factory Operations">Factory Operations</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Years of Experience</label>
                      <select
                        className="form-select"
                        value={careerForm.experience}
                        onChange={(e) => setCareerForm({ ...careerForm, experience: e.target.value })}
                      >
                        <option value="Fresh Graduate">Fresh Graduate</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cover Note / LinkedIn or Portfolio URL</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Paste your LinkedIn profile link or briefly summarize your background..."
                      rows={3}
                      value={careerForm.message}
                      onChange={(e) => setCareerForm({ ...careerForm, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={16} /> Submit Career Profile
                  </button>

                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.75rem' }}>
                    You can also email your CV directly to <strong style={{ color: '#128d46' }}>careers@awa-group.net</strong> or {COMPANY_CONTACT.email}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
