import { TrendingUp, Users, Award, Heart } from 'lucide-react';
import '../About/About.css';

function Impact() {
    return (
        <div className="impact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Our Impact & Outcomes</h1>
                    <p className="header-subtitle">
                        Measuring the difference we make in communities
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <h2 className="text-green">Creating Measurable Change</h2>
                    <p>
                        Aspire Technologies is committed to creating real, measurable impact in the communities we serve. Our programs are designed with clear outcomes and we continuously monitor and evaluate our work to ensure we're achieving meaningful change.
                    </p>

                    <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px' }}>
                            <TrendingUp size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>15,000+</div>
                            <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-dark' }}>Total Beneficiaries</div>
                        </div>

                        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px' }}>
                            <Users size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>50+</div>
                            <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-dark' }}>Communities Served</div>
                        </div>

                        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px' }}>
                            <Award size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>500+</div>
                            <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-dark' }}>Programs Conducted</div>
                        </div>

                        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--light-green)', borderRadius: '8px' }}>
                            <Heart size={48} style={{ color: 'var(--primary-green)', margin: '0 auto 1rem' }} />
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-green)', marginBottom: '0.5rem' }}>100+</div>
                            <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-dark' }}>Partner Organizations</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <h3 className="text-green" style={{ marginBottom: '1.5rem' }}>Expected Outcomes</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'Increased employability and reduced unemployment among youth',
                                'Improved women livelihood and economic empowerment',
                                'Enhanced sports participation and physical wellbeing',
                                'Improved digital literacy and cyber awareness',
                                'Better mental health awareness and reduced psychological stigma',
                                'Increased access to healthcare through medical camps',
                                'Higher vaccination coverage and public health improvement',
                                'Better animal welfare systems and reduced rabies risk',
                                'Stronger, healthier, and self-reliant communities'
                            ].map((outcome, idx) => (
                                <div key={idx} style={{ padding: '1.25rem', backgroundColor: idx % 2 === 0 ? 'var(--light-green)' : 'var(--very-light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                                    <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-gray)' }}>{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Impact;
