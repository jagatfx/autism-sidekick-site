import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

// import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'
import anniePhoto from '../assets/images/annie-spratt-177697-unsplash.jpg'
import anomalyPhoto from '../assets/images/anomaly-602393-unsplash.jpg'
import workplacePhoto from '../assets/images/workplace-1245776_1920.jpg'
import hidingPhoto from '../assets/images/hiding-1209131_1920.jpg'
import wallPhoto from '../assets/images/tyler-mullins-78917-unsplash.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Autism Sidekick"
                    meta={[
                        { name: 'description', content: 'Autism Sidekick project' },
                        { name: 'keywords', content: 'autism' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${anomalyPhoto})`}}>
                            <header className="major">
                                <h3>Augmented Reality</h3>
                                <p>See an enhanced world</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Emotional Buddy</h3>
                                <p>Get help understanding emotions</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${anniePhoto})`}}>
                            <header className="major">
                                <h3>Stimming Break</h3>
                                <p>Built-in self-stimulation activities</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${workplacePhoto})`}}>
                            <header className="major">
                                <h3>Scene Characterization</h3>
                                <p>Understand what is occurring in scene</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${hidingPhoto})`}}>
                            <header className="major">
                                <h3>Therapy Replay</h3>
                                <p>Replay interactions with caregivers</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${wallPhoto})`}}>
                            <header className="major">
                                <h3>Clarity</h3>
                                <p>Focus the world to your frequency</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Autism Sidekick</h2>
                            </header>
                            <p>Autism Sidekick is a project focused on granting super powers to people living with ASD using augmented reality (AR). Powered by the Unity engine, the Autism Sidekick is an entry in the 2019 Unity for Humanity Challenge.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Learn More</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex