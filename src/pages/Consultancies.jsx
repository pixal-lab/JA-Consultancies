import React from 'react';

const Consultancies = () => {
    return (
        <div className="page-container consultancies-page">
            <h1 className="section-title">Consultorías que Generan Valor</h1>
            <p className="intro-text">
                No vendo informes para archivar. Ofrezco soluciones vivas que mejoran tu operación diaria.
            </p>

            {/* Methodology Section (Text flow, no cards) */}
            <section style={{ margin: '4rem 0' }}>
                <h2 className="section-subtitle">Mi Metodología de Trabajo</h2>
                <p className="body-text">
                    Mi enfoque se basa en la inmersión. Para mejorar un proceso, primero hay que entenderlo desde adentro.
                    Trabajo codo a codo con tus equipos, desde la gerencia hasta los operarios, para identificar las brechas reales,
                    no solo las que aparecen en los papeles.
                </p>
                <p className="body-text">
                    <strong>1. Diagnóstico Realista:</strong> Evaluamos dónde estás y dónde necesitas llegar.<br />
                    <strong>2. Implementación Acompañada:</strong> No te entrego un manual y me voy. Te ayudo a ponerlo en marcha.<br />
                    <strong>3. Capacitación Efectiva:</strong> Transfiero el conocimiento para que tu equipo sea autónomo.
                </p>
            </section>

            <hr className="divider" />

            {/* Services Areas */}
            <section className="consultancy-section">
                <h2 className="section-subtitle">Áreas de Especialización</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>

                    <div className="service-block feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
                            alt="Gestión"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                        />
                        <h3 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Sistemas de Gestión Integral</h3>
                        <p className="body-text" style={{ fontSize: '1rem' }}>
                            Diseño sistemas robustos que soportan el crecimiento de tu empresa (ISO 9001, OEA, ISO 45001).
                        </p>
                        <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                            <em>Aeropuertos, Aduanas, Construcción.</em>
                        </p>
                    </div>

                    <div className="service-block feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1615937651187-8c489d9779df?auto=format&fit=crop&q=80&w=600"
                            alt="Inocuidad"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                        />
                        <h3 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Inocuidad Alimentaria</h3>
                        <p className="body-text" style={{ fontSize: '1rem' }}>
                            HACCP, GMP y normas GFSI. Blindamos tu proceso productivo.
                        </p>
                        <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                            <em>Coca Cola, Agrosuper, Dole.</em>
                        </p>
                    </div>

                    <div className="service-block feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
                            alt="Auditoría"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                        />
                        <h3 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Auditoría y Diagnóstico</h3>
                        <p className="body-text" style={{ fontSize: '1rem' }}>
                            Auditorías de primera y segunda parte para detectar vulnerabilidades antes de la certificación.
                        </p>
                        <p className="body-text" style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                            <em>Laboratorios Clínicos y Médicos.</em>
                        </p>
                    </div>

                    <div className="service-block feature-item">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
                            alt="Capacitación"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                        />
                        <h3 style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Formación de Equipos</h3>
                        <p className="body-text" style={{ fontSize: '1rem' }}>
                            Entreno a tus colaboradores para convertirlos en Auditores Internos y expertos en sus procesos.
                        </p>
                    </div>

                </div>
            </section>

            <hr className="divider" />

            <div style={{ textAlign: 'center', margin: '4rem 0', background: 'rgba(56, 189, 248, 0.05)', padding: '3rem', borderRadius: '16px' }}>
                <h2 className="section-subtitle">¿Hablamos de tu próximo desafío?</h2>
                <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    Cada empresa es un mundo. Cuéntame qué necesitas y diseñemos una hoja de ruta a tu medida.
                </p>
                <a href="mailto:rafael.ahumadaj@gmail.com" className="cta-button">Solicitar Diagnóstico Inicial</a>
            </div>

        </div>
    );
};

export default Consultancies;
