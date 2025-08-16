import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Suivi Patients',
    Svg: require('@site/static/img/undraw_doctor_aum1.svg').default,
    description: (
      <>
       Uptiimum vous rends plus performant sur le marché grâce à son système de suivi des Patients très efficace. 
      </>
    ),
  },
  {
    title: 'Consultations',
    Svg: require('@site/static/img/undraw_doctors_djoj.svg').default,
    description: (
      <>
        Il prend en charge l'ensemble des consultations et les stocke dans base de données pour assurer un suivi efficace sur les Patients.
      </>
    ),
  },
  {
    title: 'Ressources Humaines',
    Svg: require('@site/static/img/undraw_hr-presentation_uunk.svg').default,
    description: (
      <>
        Afin de gérer votre personnel de travail, les affectations, les salaires et bien d'autres options avec précision, Uptiimum est la solutio idéale.
      </>
    ),
  },
  {
    title: 'Pharmacie',
    Svg: require('@site/static/img/undraw_medical-care_7m9g.svg').default,
    description: (
      <>
        Le module Pharmacie de cet ERP vous permet de contrôler votre stock de médicaments et de contrôler à la trace leur écoulement.
      </>
    ),
  },
  {
    title: 'Laboratoire',
    Svg: require('@site/static/img/gummy-medical-lab.svg').default,
    description: (
      <>
        Au Laboratoire, analysez et réalisez les examens de vos Patients, suivez-les et consultez votre historique d'analyses.
      </>
    ),
  },
  {
    title: 'Gestion des finances',
    Svg: require('@site/static/img/undraw_savings_uwjn.svg').default,
    description: (
      <>
        L'ERP Uptiimum peut également vous aider à gérer les stocks et les mouvements de votre marchandise dans votre boutique.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
