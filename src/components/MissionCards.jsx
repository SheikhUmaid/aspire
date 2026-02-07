import { Link } from 'react-router-dom';
import { Users, Heart, Trophy, Laptop, Brain, Stethoscope, Syringe, PawPrint } from 'lucide-react';
import './MissionCards.css';

function MissionCards() {
    const programs = [
        {
            icon: Users,
            title: 'Youth Development',
            description: 'Empowering youth through skill development, career guidance, and leadership training for a productive future.',
            link: '/programs/youth-development',
            color: '#2D5016'
        },
        {
            icon: Heart,
            title: 'Women Empowerment',
            description: 'Strengthening women through vocational training, entrepreneurship, and livelihood programs for financial independence.',
            link: '/programs/women-empowerment',
            color: '#4A7C2C'
        },
        {
            icon: Trophy,
            title: 'Sports Promotion',
            description: 'Promoting physical fitness, discipline, and teamwork through sports activities and tournaments for youth.',
            link: '/programs/sports-promotion',
            color: '#6B9E4D'
        },
        {
            icon: Laptop,
            title: 'Digital Skills',
            description: 'Enhancing digital literacy and technology skills to prepare communities for modern employment opportunities.',
            link: '/programs/digital-skills',
            color: '#2D5016'
        },
        {
            icon: Brain,
            title: 'Mental Health',
            description: 'Creating awareness and reducing stigma around mental health through counseling and support programs.',
            link: '/programs/mental-health',
            color: '#4A7C2C'
        },
        {
            icon: Stethoscope,
            title: 'Medical Camps',
            description: 'Providing accessible healthcare through medical camps and health awareness programs for underserved communities.',
            link: '/programs/health-medical-camps',
            color: '#6B9E4D'
        },
        {
            icon: Syringe,
            title: 'Vaccination Programs',
            description: 'Supporting immunization drives and creating awareness about vaccination for public health protection.',
            link: '/programs/vaccination-programs',
            color: '#2D5016'
        },
        {
            icon: PawPrint,
            title: 'Animal Welfare',
            description: 'Promoting compassionate treatment and vaccination programs for animals and rabies prevention awareness.',
            link: '/programs/animal-welfare',
            color: '#4A7C2C'
        }
    ];

    return (
        <section className="mission-cards">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Program Areas</h2>
                    <p className="section-description">
                        Aspire Technologies implements comprehensive programs across eight key focus areas to create holistic community development and sustainable social impact.
                    </p>
                </div>
                <div className="cards-grid">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <Link to={program.link} key={index} className="program-card">
                                <div className="card-icon" style={{ backgroundColor: program.color }}>
                                    <Icon size={32} color="white" />
                                </div>
                                <h3 className="card-title">{program.title}</h3>
                                <p className="card-description">{program.description}</p>
                                <span className="card-link-text">Learn More →</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default MissionCards;
