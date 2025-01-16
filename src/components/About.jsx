import React from 'react'
import { Link } from 'react-feather';

const About = () => {
  return (
    <section className='section__container' data-aos="fade-up">
        <div className="container__grid">
            <div className="grid__section">
                <h2 className="section__name">/sobre-mi</h2>
            </div>
            <div className="grid__content">
                <p className="content__text">Hey, soy un desarrollador web y co-fundador de <a href="https://fractalagency.es" target="_blank" rel="noreferrer">Fractal Agency<Link size={14} /></a> en Alicante.</p>
                <p className="content__text">Me dedico principalmente a la <span className='programming'>programación</span> y al <span className='design'>diseño gráfico</span>, pasando ideas e ilusiones a la realidad. Siempre dispuesto a seguir aprendiendo tanto siendo desarrollador como emprendedor.</p>
                <p className="content__text">Si tienes algún proyecto en mente o quieres aprender algo nuevo, contacta conmigo o sígueme en mis redes sociales.</p>
            </div>
        </div>
    </section>
  )
}

export default About