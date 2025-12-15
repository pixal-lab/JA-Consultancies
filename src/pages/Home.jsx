import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="home-wrapper">
            <Hero
                title="Más que Cumplimiento, Excelencia."
                subtitle="Transformando la Calidad e Inocuidad en tu ventaja competitiva."
                image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600"
            />
            <div className="page-container home-page">

                <section className="intro-section">
                    <h1 className="section-title">Tu Socio Estratégico en Calidad</h1>
                    <p className="intro-text">
                        En un mercado cada vez más exigente, la calidad no es solo un requisito, es el pilar de la confianza.
                        Como Ingeniero en Alimentos con más de dos décadas de trayectoria, no me limito a "revisar papeles".
                        Me integro en tu cultura organizacional para diseñar sistemas que funcionan en la práctica, no solo en la teoría.
                    </p>
                    <p className="intro-text">
                        Desde la implementación de normativas ISO hasta la gestión de crisis en inocuidad alimentaria,
                        mi objetivo es que duermas tranquilo sabiendo que tu operación cumple con los más altos estándares globales.
                    </p>
                </section>

                <div className="media-card">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                        alt="Ingeniería y Procesos"
                        className="media-image"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>

                <hr className="divider" />

                <section className="services-preview">
                    <h2 className="section-subtitle">Lo que podemos lograr juntos</h2>
                    <div className="clean-list">
                        <div className="clean-list-item">
                            <h3>Gestión de Calidad (ISO 9001)</h3>
                            <p>Optimizo tus procesos para que la calidad sea fluida, reduciendo costos y aumentando la satisfacción de tus clientes en rubros desde la construcción hasta la salud.</p>
                        </div>
                        <div className="clean-list-item">
                            <h3>Inocuidad Alimentaria (HACCP / ISO 22000)</h3>
                            <p>Protejo tu marca y a tus consumidores. Garantizo la seguridad en cada eslabón de la cadena, desde la materia prima hasta la mesa.</p>
                        </div>
                        <div className="clean-list-item">
                            <h3>Certificación y Auditoría (OEA)</h3>
                            <p>Preparo a tu empresa para las grandes ligas. Auditorías internas rigurosas que aseguran que pases las certificaciones oficiales sin sobresaltos.</p>
                        </div>
                    </div>
                </section>

                <section className="why-me-section" style={{ marginTop: '4rem' }}>
                    <h2 className="section-subtitle">¿Por qué trabajar conmigo?</h2>
                    <p className="body-text">
                        He caminado los pasillos de gigantes como <strong>Coca Cola, Agrosuper y Dole Chile</strong>, pero también entiendo los desafíos de las empresas en crecimiento.
                        Mi enfoque es <em>práctico y humano</em>. Entiendo que detrás de cada proceso hay personas, y que un sistema de gestión solo es exitoso si el equipo lo adopta con convicción.
                    </p>
                    <blockquote className="highlight-text">
                        "No traigo problemas, traigo soluciones probadas y una visión fresca para tus desafíos de calidad."
                    </blockquote>
                </section>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <a href="/consultancies" className="cta-button">Descubre cómo puedo ayudarte</a>
                    <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                        O <a href="/cv" style={{ color: 'var(--accent)' }}>revisa mi trayectoria completa</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
