import React, { useEffect } from 'react'
import {
    FaBuilding,
    FaGraduationCap,
    FaLandmark,
    FaHandshake,
    FaChild,
    FaGlobe,
    FaChalkboardTeacher,
    FaHeart,
    FaUniversity
} from 'react-icons/fa'
import './Community.css'

const Community = () => {
    // Add this inside your Community component
    useEffect(() => {
        const marqueeTrack = document.querySelector('.marquee-track')
        const pauseBtn = document.getElementById('pauseMarquee')
        const playBtn = document.getElementById('playMarquee')

        if (pauseBtn && playBtn && marqueeTrack) {
            pauseBtn.addEventListener('click', () => {
                marqueeTrack.style.animationPlayState = 'paused'
            })

            playBtn.addEventListener('click', () => {
                marqueeTrack.style.animationPlayState = 'running'
            })
        }

        return () => {
            if (pauseBtn && playBtn) {
                pauseBtn.removeEventListener('click', () => { })
                playBtn.removeEventListener('click', () => { })
            }
        }
    }, [])

    const partners = [
        {
            id: 1,
            name: "ABC Foundation",
            description: "Empowering education since 2010",
            icon: <FaBuilding className="partner-icon-svg" />,
            stats: "500+ Schools",
            color: "#4F46E5"
        },
        {
            id: 2,
            name: "EduHelp",
            description: "Making learning accessible",
            icon: <FaGraduationCap className="partner-icon-svg" />,
            stats: "1M+ Students",
            color: "#10B981"
        },
        {
            id: 3,
            name: "Gov.in",
            description: "Government initiative for education",
            icon: <FaLandmark className="partner-icon-svg" />,
            stats: "National Program",
            color: "#F59E0B"
        },
        {
            id: 4,
            name: "State Council",
            description: "Educational policy leaders",
            icon: <FaUniversity className="partner-icon-svg" />,
            stats: "28 States",
            color: "#EF4444"
        },
        {
            id: 5,
            name: "Children First",
            description: "Child welfare advocates",
            icon: <FaChild className="partner-icon-svg" />,
            stats: "2M+ Children",
            color: "#EC4899"
        },
        {
            id: 6,
            name: "EduLink",
            description: "Connecting educators globally",
            icon: <FaGlobe className="partner-icon-svg" />,
            stats: "150+ Countries",
            color: "#3B82F6"
        },
        {
            id: 7,
            name: "SIE",
            description: "Special education experts",
            icon: <FaChalkboardTeacher className="partner-icon-svg" />,
            stats: "Expert Network",
            color: "#8B5CF6"
        }
    ]

    // Duplicate partners for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners, ...partners]

    return (
        <section className="community-partners">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">
                        <FaHandshake className="tag-icon" />
                        Partnerships
                    </span>
                    <h2 className="section-title">
                        Community & Government <span>Partnership Vision</span>
                    </h2>
                    <p className="section-subtitle">
                        Collaborating with community and government institutions for greater
                        educational and social impact
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container">
                    <div className="marquee-track">
                        {duplicatedPartners.map((partner, index) => (
                            <div key={`${partner.id}-${index}`} className="partner-card marquee-card">
                                <div className="partner-icon-wrapper" style={{ backgroundColor: `${partner.color}15` }}>
                                    {partner.icon}
                                </div>
                                <h3 className="partner-name">{partner.name}</h3>
                                <p className="partner-description">{partner.description}</p>
                                <div className="partner-stats">
                                    <FaHeart className="stats-icon" />
                                    <span>{partner.stats}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pause/Play Controls */}
                <div className="marquee-controls">
                    <button className="control-btn" id="pauseMarquee">
                        ⏸️ Pause
                    </button>
                    <button className="control-btn" id="playMarquee">
                        ▶️ Play
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Community