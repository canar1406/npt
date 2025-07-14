import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kiến Thức Chuyên Sâu',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cung cấp kiến thức toán học chuyên sâu từ cơ bản đến nâng cao, 
        bao gồm đại số, hình học, giải tích và các lĩnh vực toán học ứng dụng.
      </>
    ),
  },
  {
    title: 'Nghiên Cứu Học Thuật',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Khám phá các nghiên cứu học thuật mới nhất trong lĩnh vực toán học,
        với các bài báo, luận văn và tài liệu tham khảo chất lượng cao.
      </>
    ),
  },
  {
    title: 'Ví Dụ Minh Họa',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Học tập hiệu quả qua các ví dụ minh họa chi tiết, bài tập thực hành
        và các ứng dụng thực tế của toán học trong cuộc sống.
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
