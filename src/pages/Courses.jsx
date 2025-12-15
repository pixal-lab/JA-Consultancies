const Courses = () => {
    return (
        <div className="page-container courses-page">
            <h1 className="section-title">Cursos y Capacitaciones</h1>
            <p className="intro-text">
                Próximamente encontrarás aquí nuestra oferta de cursos especializados en Calidad e Inocuidad Alimentaria.
            </p>

            <section className="consultancy-section">
                <div className="highlight-box">
                    <h3>¿Te interesa capacitar a tu equipo ahora?</h3>
                    <p style={{ marginTop: '1rem', color: 'var(--text-main)' }}>
                        Diseño cursos a medida (In-Company) para cerrar brechas específicas en tu organización.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="mailto:rafael.ahumadaj@gmail.com" className="cta-button">Cotizar Capacitación</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
