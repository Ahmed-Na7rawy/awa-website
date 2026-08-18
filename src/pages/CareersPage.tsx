import React, { useState } from 'react';
import { Send, CheckCircle2, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [careerForm, setCareerForm] = useState({
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
      location: 'Alexandria Headquarters',
      department: 'Logistics & Operations',
      type: 'Full-Time',
      desc: 'Coordinating reefer fleet distribution, temperature telemetry, and warehouse FIFO dispatch.'
    }
  ];

  return (
    <div className="careers-page">
      {/* Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">Join Our Team</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            Careers at AWA Group
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px' }}>
            Be part of a passionate team driving food science, cutting-edge ingredient formulations, and sustainable industrial growth across Egypt and the region.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Culture & Growth</div>
            <h2 className="section-title">Why Build Your Career At AWA?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Sparkles size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Scientific Learning</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Access to state-of-the-art pilot lab equipment, international supplier technical seminars, and hands-on formulation mentorship.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Competitive Rewards</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Competitive salary structures, comprehensive medical coverage, transportation support, and performance bonus incentives.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <HeartHandshake size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Collaborative Culture</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                A respectful, inclusive industrial environment where your innovation directly shapes food products consumed by millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings & Application Form */}
      <section className="section section-stone">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem' }}>
            {/* Job Openings */}
            <div>
              <div className="eyebrow">Current Vacancies</div>
              <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Featured Opportunities</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                {openings.map((job, idx) => (
                  <div key={idx} style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>{job.title}</h4>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                        {job.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                      {job.department} • {job.location}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Application Form */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: 'fit-content' }}>
              <div className="eyebrow">Direct Application</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '1.5rem' }}>
                Submit Your Resume
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={54} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Application Received!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Thank you for your interest in AWA Group. Our HR talent team will review your qualifications and reach out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sara Mahmoud"
                      value={careerForm.fullName}
                      onChange={(e) => setCareerForm({ ...careerForm, fullName: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sara@example.com"
                      value={careerForm.email}
                      onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+20 1X XXXX XXXX"
                      value={careerForm.phone}
                      onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>Target Department</label>
                      <select
                        value={careerForm.department}
                        onChange={(e) => setCareerForm({ ...careerForm, department: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', background: '#FFFFFF' }}
                      >
                        <option value="R&D / Food Science">R&D / Food Science</option>
                        <option value="Quality Assurance / QC">Quality Assurance / QC</option>
                        <option value="Technical Sales">Technical Sales</option>
                        <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                        <option value="Factory Operations">Factory Operations</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>Years of Experience</label>
                      <select
                        value={careerForm.experience}
                        onChange={(e) => setCareerForm({ ...careerForm, experience: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', background: '#FFFFFF' }}
                      >
                        <option value="Fresh Graduate">Fresh Graduate</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>LinkedIn Profile / Cover Note</label>
                    <textarea
                      placeholder="Paste your LinkedIn link or introduce your professional background..."
                      rows={3}
                      value={careerForm.message}
                      onChange={(e) => setCareerForm({ ...careerForm, message: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <span>Submit Candidate Profile</span>
                    <Send size={16} />
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                    Or email your CV directly to <strong style={{ color: 'var(--primary)' }}>{COMPANY_CONTACT.email}</strong>
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
