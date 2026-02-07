import { Building2, Users, Briefcase, Heart } from 'lucide-react';
import '../About/About.css';

function Partners() {
    return (
        <div className="partners-page">
            <section className="page-header">
                <div className="container">
                    <h1>Partners & Collaboration</h1>
                    <p className="header-subtitle">
                        Building partnerships for greater social impact
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <h2 className="text-green">Collaboration for Change</h2>
                    <p>
                        Aspire Technologies believes in the power of partnerships. We actively seek collaborations with government departments, CSR companies, NGOs, educational institutions, healthcare providers, and community organizations to amplify our impact and reach more beneficiaries.
                    </p>

                    <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', textAlign: 'center' }}>
                            <Building2 size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.75rem' }}>Government Departments</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-gray)' }}>
                                Partnering with government agencies for program implementation, resource support, and policy alignment.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', textAlign: 'center' }}>
                            <Briefcase size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.75rem' }}>CSR Companies</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-gray)' }}>
                                Collaborating with corporates on CSR initiatives, program  sponsorship, and employee volunteer programs.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', textAlign: 'center' }}>
                            <Users size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.75rem' }}>NGOs & Social Organizations</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-gray)' }}>
                                Working with fellow NGOs and social organizations for knowledge sharing and joint program implementation.
                            </p>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', textAlign: 'center' }}>
                            <Heart size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.75rem' }}>Educational & Healthcare Institutions</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-gray)' }}>
                                Partnering with schools, colleges, hospitals, and clinics for program delivery and service provision.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--primary-green)', borderRadius: '8px', textAlign: 'center', color: 'white' }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Interested in Partnering With Us?</h2>
                        <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>
                            We welcome partnerships that align with our mission and values. Together, we can create greater social impact.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-large" style={{ backgroundColor: 'white', color: 'var(--primary-green)' }}>Contact Us for Partnership</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Partners;
