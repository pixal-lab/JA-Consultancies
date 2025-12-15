const CV = () => {
    return (
        <div className="page-container cv-page">
            <h1 className="section-title">Juan Rafael Ahumada Jorquera</h1>
            <p className="intro-text">
                <strong>Ingeniero en Alimentos | Consultor en Sistemas de Gestión de Calidad e Inocuidad</strong><br />
                <a href="mailto:rafael.ahumadaj@gmail.com" style={{ color: 'var(--accent)' }}>rafael.ahumadaj@gmail.com</a>
            </p>

            {/* Download Card Section */}
            <section style={{ margin: '3rem 0', display: 'flex', justifyContent: 'center' }}>
                <div className="highlight-box" style={{ maxWidth: '600px', padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Versión PDF para Imprimir</h3>
                    <p className="body-text" style={{ marginBottom: '2rem' }}>
                        Para facilitar su archivo y revisión offline, puede descargar mi currículum completo en formato PDF.
                    </p>
                    <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="CV_Juan_Ahumada.pdf" className="cta-button">
                        📄 Descargar CV (PDF)
                    </a>
                </div>
            </section>

            <hr className="divider" />

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-subtitle" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)' }}>
                    Detalle Profesional Completo
                </h2>
            </div>

            {/* Summary */}
            <section className="cv-section">
                <h2 className="section-subtitle">Resumen Profesional</h2>
                <p className="body-text">
                    Ingeniero en Alimentos con amplia experiencia en capacitación, consultoría y auditoría de Sistemas de Gestión de Inocuidad en Alimentos y en Sistemas de Gestión de Calidad.
                </p>
                <p className="body-text">
                    Me he desempeñado en asesoría de Sistemas de Gestión de Calidad en rubros tales como: Agencias de Aduanas, Construcción, Transportes, Laboratorios Clínicos y de Análisis Químico y Microbiológico, Centros de Mantenimiento de Planeadores, Empresas de Gestión de Residuos, Envases plásticos de alimentos, Laboratorios de Cosméticos e Insumos Médicos.
                </p>
                <p className="body-text">
                    Innovador en el diseño y la aplicación de Sistemas de Gestión de Calidad en organismos públicos y privados. Por su experiencia en auditorías ha diseñado cursos de preparación de auditores internos para diversas especialidades.
                </p>
            </section>

            {/* Work Experience */}
            <section className="cv-section">
                <h2 className="section-subtitle">Antecedentes Laborales</h2>

                <div className="experience-item">
                    <h3>Consultor Sistemas de Gestión</h3>
                    <span className="date">Enero 2012 – A la fecha</span>
                    <p className="role-description">Desarrollo, planificación y ejecución de planes de acción asociados a:</p>
                    <ul className="clean-list">
                        <li>Desarrollo e Implementación Sistemas de Gestión de Seguridad de la Cadena de Suministro (OEA).</li>
                        <li>Mantención de Sistema de Gestión de Calidad e Inocuidad (ISO 9001, CODEX 2022, NCh 2861 HACCP).</li>
                        <li>Medición y seguimiento de compromisos asociados a gestión integrada ISO 9001-ISO 45001 e ISO 14001.</li>
                        <li>Implementación Sistema de Gestión de Calidad basado en la Norma ISO 9001:2015.</li>
                        <li>Desarrollo e Implementación de Programas de Auditoría y seguimiento de No Conformidades.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Consultor Sistemas de Gestión de Inocuidad</h3>
                    <span className="date">Enero 2012 – A la fecha</span>
                    <ul className="clean-list">
                        <li>Integración de Sistema de Gestión para temáticas de Calidad e Inocuidad.</li>
                        <li>Implementación Sistemas de Gestión de Inocuidad basado en normas NCh 2861/HACCP y NCh 3235 GMP.</li>
                        <li>Desarrollo e Implementación de Programas de Verificación.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Docente Universitario</h3>
                    <span className="date">Universidad Central (Agosto 2025 – A la fecha)</span>
                    <ul className="clean-list">
                        <li>Facultad de Medicina y Ciencias de la Salud, carrera de Nutrición y Dietética.</li>
                        <li>Asignatura: Gestión de Calidad e Inocuidad Alimentaria II.</li>
                        <li>Temas: ISO 22000, BRC FOOD, IFS FOOD, Auditoría de calidad.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>Experiencia Previa (Consultor Asociado)</h3>
                    <ul className="clean-list">
                        <li><strong>Fundes Chile (2007-2011)</strong>: Supervisor de Proyectos, Jefe de Proyecto, Consultor, Auditor.</li>
                        <li><strong>SGE Qualitas (2002-2006)</strong>: Jefe de Proyecto, Consultor, Auditor.</li>
                        <li><strong>IGC Ltda (2000-2002)</strong>: Consultor, Auditor.</li>
                    </ul>
                </div>
            </section>

            {/* Academic Background */}
            <section className="cv-section">
                <h2 className="section-subtitle">Antecedentes Académicos</h2>
                <div className="clean-list-item">
                    <h3>Ingeniería en Alimentos</h3>
                    <p>Universidad de Chile (1986 – 1995).</p>
                    <p style={{ color: 'var(--accent)' }}>Aprobado con Distinción Máxima</p>
                </div>
            </section>

            {/* Clients List (New Section from Raw Data) */}
            <section className="cv-section">
                <h2 className="section-subtitle">Experiencia por Rubros y Clientes</h2>

                <div className="client-category">
                    <h3>Organismos Públicos</h3>
                    <p>Dirección de Aeropuertos (DAP), Superintendencia de Servicios Sanitarios, Comisión Nacional de Energía, Dirección de Presupuesto, Innova Chile, Municipalidad de Renca.</p>
                </div>

                <div className="client-category">
                    <h3>Producción de Alimentos y Bebidas</h3>
                    <p><strong>Coca Cola Company</strong>, Embotelladora Andina, <strong>Dole Chile</strong>, Agrosuper (Lo Miranda/San Vicente), Sopraval, La Preferida, South Pacific Abalones, Mermeladas Mel, Pastelería Strindberg.</p>
                </div>

                <div className="client-category">
                    <h3>Vinos y Agroindustria</h3>
                    <p>Viña Aresti, Viña El Aromo, Viña Casanova, Chateau Los Boldos, Copeval Agroindustria, Sercocamp, Agrosevilla.</p>
                </div>

                <div className="client-category">
                    <h3>Salud y Laboratorios</h3>
                    <p>Laboratorio Clínico IEM, Alta Tecnología Médica (ATM), Novosalud, Aclin, Centro Calidad Alimentos.</p>
                </div>

                <div className="client-category">
                    <h3>Otros Sectores</h3>
                    <p>Agencias de Aduana (Patricio Larrañaga, Felipe Serrano), Construcción (Araya Ltda, Roberto Paredes), Transportes (Valpotrans), Envases (Marple, SP Plásticos).</p>
                </div>
            </section>

            <section className="cv-section">
                <h2 className="section-subtitle">Certificaciones Relevantes</h2>
                <ul className="clean-list">
                    <li><strong>2023</strong>: Gestión Operador Económico Autorizado (OEA) Auditor Interno.</li>
                    <li><strong>2015</strong>: NCh-ISO 9001:2015 Gestión de la Calidad.</li>
                    <li><strong>2005</strong>: Auditor Líder ISO 9001:2000 (TÜV Rheinland / IRCA).</li>
                    <li><strong>1996</strong>: Metodologías y Herramientas para asegurar la calidad en alimentos (HACCP).</li>
                </ul>
            </section>

        </div>
    );
};

export default CV;
