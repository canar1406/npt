import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

export default function About() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About me - ${siteConfig.title}`}
      description="Tìm hiểu về tác giả của Tiểu sảnh nhỏ xíu của Arust">
      <div className={styles.aboutContainer}>
        {/* Hero Section */}
        <div className={styles.aboutHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.avatarContainer}>
                <div className={styles.avatarWrapper}>
                  <img src="/img/logo.png" alt="Arust Avatar" className={styles.avatar} />
                  <div className={styles.avatarRing}></div>
                </div>
              </div>
              <h1 className={styles.heroTitle}>Xin chào! Tôi là Nguyễn Phước Thịnh 👋</h1>
              <p className={styles.heroSubtitle}>
                Mathematician & Math Expert
              </p>
              <div className={styles.heroTags}>
                <span className={styles.tag}>🧮 Toán học</span>
                <span className={styles.tag}>🚀 Ứng dụng</span>
                <span className={styles.tag}>📚 Giáo dục</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container">
          {/* Main Sections Grid */}
          <div className={styles.sectionsGrid}>
            {/* Row 1 */}
            <div className={`${styles.sectionsRow} ${styles.sectionsRowFirst}`}>
              {/* About Me Section */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>🎯</span>
                    Về tôi
                  </h2>
                </div>
                <div className={styles.aboutText}>
                  <p>
                    Xin chào! Tôi là <strong>Arust</strong>, một developer đam mê toán học và công nghệ. 
                    Tôi tin rằng toán học không chỉ là con số và công thức, mà là nghệ thuật tư duy logic và 
                    công cụ mạnh mẽ để hiểu thế giới xung quanh chúng ta.
                  </p>
                  <p>
                    Thông qua <strong>"Tiểu sảnh nhỏ xíu của Arust"</strong>, tôi muốn chia sẻ những kiến thức, 
                    trải nghiệm và góc nhìn thú vị về toán học, từ những khái niệm cơ bản đến các chủ đề nâng cao.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>🧠</span>
                    Kỹ năng & Chuyên môn
                  </h2>
                </div>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCard}>
                    <div className={styles.skillIcon}>📊</div>
                    <h3>Giải tích</h3>
                    <p>Làm chủ hàm số, chinh phục mọi bài toán giới hạn và vi phân.</p>
                    <div className={styles.skillProgress}>
                      <div className={styles.progressBar} style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className={styles.skillCard}>
                    <div className={styles.skillIcon}>📐</div>
                    <h3>Hình học</h3>
                    <p>Thấu thị không gian, luận hình sắc bén, không ai vượt mặt.</p>
                    <div className={styles.skillProgress}>
                      <div className={styles.progressBar} style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className={styles.skillCard}>
                    <div className={styles.skillIcon}>🔢</div>
                    <h3>Số học</h3>
                    <p>Số nguyên trong tay, định lý cổ điển chỉ là bước khởi đầu.</p>
                    <div className={styles.skillProgress}>
                      <div className={styles.progressBar} style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className={styles.skillCard}>
                    <div className={styles.skillIcon}>🧩</div>
                    <h3>Tổ hợp</h3>
                    <p>Tư duy như nước chảy, đếm là chính xác, quy nạp là bản năng.</p>
                    <div className={styles.skillProgress}>
                      <div className={styles.progressBar} style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className={`${styles.sectionsRow} ${styles.sectionsRowSecond}`}>
              {/* Philosophy Section */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>🌟</span>
                    Triết lý & Sứ mệnh
                  </h2>
                </div>
                <div className={styles.philosophyContent}>
                  <blockquote className={styles.quote}>
                    <p>Toán học là ngôn ngữ mà Chúa đã viết nên vũ trụ</p>
                    <cite>— Galileo Galilei</cite>
                  </blockquote>
                  <div className={styles.missionCards}>
                    <div className={styles.missionCard}>
                      <div className={styles.missionIcon}>🎯</div>
                      <h4>Sứ mệnh</h4>
                      <p>Làm cho toán học trở nên dễ tiếp cận và thú vị với mọi người</p>
                    </div>
                    <div className={styles.missionCard}>
                      <div className={styles.missionIcon}>🌱</div>
                      <h4>Tầm nhìn</h4>
                      <p>Xây dựng cộng đồng học tập toán học tích cực và hỗ trợ lẫn nhau</p>
                    </div>
                    <div className={styles.missionCard}>
                      <div className={styles.missionIcon}>💝</div>
                      <h4>Giá trị</h4>
                      <p>Kiến thức chia sẻ sẽ nhân đôi, đam mê lan toa sẽ bất tận</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className={styles.sectionCard}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.titleIcon}>📞</span>
                    Kết nối với tôi
                  </h2>
                </div>
                <div className={styles.contactContent}>
                  <p className={styles.contactDescription}>
                    Nếu bạn có câu hỏi, góp ý, hoặc chỉ muốn trò chuyện về toán học, 
                    đừng ngần ngại liên hệ với tôi!
                  </p>
                  <div className={styles.contactGrid}>
                    <a href="https://www.facebook.com/NPTarceus" className={styles.contactCard} target="_blank" rel="noopener noreferrer">
                      <div className={styles.contactIcon}>📘</div>
                      <h4>Facebook</h4>
                      <p>NPTarceus</p>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61577889720836" className={styles.contactCard} target="_blank" rel="noopener noreferrer">
                      <div className={styles.contactIcon}>👤</div>
                      <h4>My Page</h4>
                      <p>Personal Page</p>
                    </a>
                    <a href="https://the-bithub.com/NPT" className={styles.contactCard} target="_blank" rel="noopener noreferrer">
                      <div className={styles.contactIcon}>🌐</div>
                      <h4>Website</h4>
                      <p>The BitHub</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
