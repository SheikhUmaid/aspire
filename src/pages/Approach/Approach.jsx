import '../About/About.css';

function Approach() {
    return (
        <div className="approach-page">
            <section className="page-header">
                <div className="container">
                    <h1>Our Approach & Methodology</h1>
                    <p className="header-subtitle">
                        A systematic, community-centered approach to creating sustainable development
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <h2 className="text-green">Community-Centered Development</h2>
                    <p>
                        Aspire Technologies follows a systematic, participatory approach that places communities at the center of all our interventions. We believe that sustainable development happens when communities themselves drive the process, own the outcomes, and continue the work long after our direct involvement ends.
                    </p>

                    <div style={{ marginTop: '3rem' }}>
                        <h3 className="text-green" style={{ marginBottom: '1.5rem' }}>Our 8-Step Implementation Process</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { num: '01', title: 'Need Assessment & Community Survey', desc: 'We begin by understanding community needs, challenges, priorities, and existing resources through surveys and consultations.' },
                                { num: '02', title: 'Planning & Program Design', desc: 'Based on assessment, we design programs tailored to specific community contexts and needs.' },
                                { num: '03', title: 'Stakeholder Engagement & Mobilization', desc: 'We engage community leaders, local institutions, government bodies, and other stakeholders for collaborative action.' },
                                { num: '04', title: 'Training, Awareness & Capacity Building', desc: 'We provide comprehensive training and awareness programs to build community capabilities.' },
                                { num: '05', title: 'Implementation through Camps & Outreach', desc: 'Programs are implemented through camps, workshops, training sessions, and community outreach activities.' },
                                { num: '06', title: 'Monitoring & Reporting', desc: 'Regular monitoring ensures programs stay on track and achieve intended outcomes.' },
                                { num: '07', title: 'Evaluation & Impact Assessment', desc: 'We systematically evaluate program effectiveness and measure actual impact on beneficiaries.' },
                                { num: '08', title: 'Sustainability through Community Participation', desc: 'We ensure programs are sustainable by building local ownership and capacity for continuation.' }
                            ].map((step, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', backgroundColor: idx % 2 === 0 ? 'var(--light-green)' : 'var(--very-light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-green)', minWidth: '60px' }}>{step.num}</div>
                                    <div>
                                        <h4 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem', fontSize: '1.125rem' }}>{step.title}</h4>
                                        <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-gray)', margin: 0 }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Approach;
