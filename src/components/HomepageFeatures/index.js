import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Resilient Streams',
    Svg: require('@site/static/img/sintered-ceramic-logo.png').default,
    description: (
      <>
        Compose external ceramic streams without inheriting their technical debt at the trust minimum.
      </>
    ),
  },
  {
    title: 'Capital Efficient',
    Svg: require('@site/static/img/eigne-layer-ceramic.png').default,
    description: (
      <>
        Streams are secured with EigenLayer AVS, meaing providers minimize their capital enifficiency with restaking
      </>
    ),
  },
  {
    title: 'Provide Streams as a Service',
    Svg: require('@site/static/img/sintered-ceramic-logo-2.png').default,
    description: (
      <>
        Sintered Ceramic opens a market for providers to build streams as a service
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={Svg} />
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
