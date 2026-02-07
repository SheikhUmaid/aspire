import '../About/About.css';

function CommunityAwareness() {
    return (
        <div className="community-page">
            <section className="page-header">
                <div className="container">
                    <h1>Community Awareness Programs</h1>
                    <p className="header-subtitle">
                        Creating informed, responsible, and empowered communities through awareness initiatives
                    </p>
                </div>
            </section>

            <section className="intro-section">
                <div className="container">
                    <h2 className="text-green">Building Awareness for Lasting Change</h2>
                    <p>
                        Aspire Technologies regularly conducts community awareness programs on vital social and health issues that impact quality of life and community wellbeing. These programs create informed communities where people understand important issues and can make better decisions for themselves and their families.
                    </p>

                    <div className="awareness-topics" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Cleanliness & Sanitation</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Community cleanliness drives, waste management awareness, and sanitation campaigns.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Safe Drinking Water</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Water purification, storage, and safe drinking water practices for health.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Environment Protection</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Plantation drives, pollution awareness, and sustainable environmental practices.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Drug De-addiction</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Anti-drug campaigns, rehabilitation awareness, and youth protection programs.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Child Rights & Education</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Education importance, child protection, and preventing child labor.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Gender Equality</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Women's rights, gender sensitization, and promoting gender equality.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Social Harmony</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Peace-building, communal harmony, and preventing social conflicts.</p>
                        </div>
                        <div className="topic-card" style={{ padding: '1.5rem', backgroundColor: 'var(--light-green)', borderRadius: '8px', borderLeft: '4px solid var(--primary-green)' }}>
                            <h3 style={{ color: 'var(--primary-green)', marginBottom: '0.5rem' }}>Nutrition & Health</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>Balanced diet awareness, nutrition education, and healthy living practices.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CommunityAwareness;
