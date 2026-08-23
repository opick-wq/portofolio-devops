import { Cloud, Container, GitBranch, Headphones, MonitorCog, Server, ShieldCheck, Workflow, Wrench } from "lucide-react";

const skills = [
  { icon: Server, title: "Server Infrastructure", text: "Administrasi Linux server, hardening dasar, manajemen service, deployment aplikasi, dan troubleshooting production." },
  { icon: Workflow, title: "CI/CD Automation", text: "Membangun pipeline otomatis untuk build, test, dan deployment menggunakan Jenkins, GitHub Actions, dan GitLab CI." },
  { icon: Cloud, title: "Cloud Infrastructure", text: "Pengelolaan infrastruktur cloud seperti AWS EC2, S3, IAM, VPC, dan deployment aplikasi berbasis cloud." },
  { icon: Container, title: "Docker & Container", text: "Containerization aplikasi, Docker Compose, image optimization, restart policy, dan deployment service yang stabil." },
  { icon: Wrench, title: "IaC & Automation", text: "Otomatisasi konfigurasi dan provisioning dengan Ansible dan Terraform untuk environment yang konsisten." },
  { icon: MonitorCog, title: "Monitoring System", text: "Observability dengan Prometheus dan Grafana untuk memantau performa, resource, dan availability server." },
  { icon: Headphones, title: "IT Support", text: "Dukungan teknis end-user, instalasi sistem, jaringan dasar, backup, maintenance, dan problem solving cepat." },
  { icon: ShieldCheck, title: "Reliability & Security", text: "Fokus pada uptime, backup, permission, patching, log inspection, dan praktik keamanan operasional." }
];

const tools = ["AWS", "Docker", "Docker Compose", "Ansible", "Terraform", "Jenkins", "Prometheus", "Grafana", "Linux", "Nginx", "GitHub", "CI/CD"];

const projects = [
  {
    title: "Dockerized Web Deployment",
    desc: "Membungkus aplikasi web ke container Nginx dengan restart: always agar otomatis pulih setelah reboot atau mati listrik.",
    stack: "Docker, Nginx, Compose"
  },
  {
    title: "CI/CD Pipeline Automation",
    desc: "Pipeline otomatis untuk build, test, dan deployment sehingga proses rilis lebih cepat, konsisten, dan minim error manual.",
    stack: "Jenkins, GitHub Actions, Linux"
  },
  {
    title: "Infrastructure Monitoring Dashboard",
    desc: "Dashboard monitoring resource server dan service untuk mendeteksi masalah sejak dini dan menjaga ketersediaan layanan.",
    stack: "Prometheus, Grafana, Node Exporter"
  }
];

function App() {
  return (
    <div className="page-shell">
      <nav className="navbar">
        <a className="brand" href="#home">MSI</a>
        <div className="nav-links">
          <a href="#about">Profil</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Project</a>
          <a href="#contact">Kontak</a>
        </div>
      </nav>

      <header id="home" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">DevOps Engineer • IT Support • Cloud Infrastructure</p>
          <h1>Muhammad Sultan Ihsan</h1>
          <p className="hero-text">
            Saya membantu bisnis dan tim teknis membangun infrastruktur server yang stabil,
            otomatis, mudah dimonitor, dan siap berjalan kembali setelah gangguan.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">Lihat Project</a>
            <a className="btn secondary" href="#contact">Hubungi Saya</a>
          </div>
        </div>
        <div className="hero-card">
          <GitBranch size={42} />
          <h2>Reliable Deployment</h2>
          <p>Docker, CI/CD, monitoring, dan automation untuk workflow production yang lebih aman.</p>
        </div>
      </header>

      <main>
        <section id="about" className="section about-grid">
          <div>
            <p className="eyebrow">Tentang Saya</p>
            <h2>Fokus pada infrastruktur yang rapi, stabil, dan mudah dikelola.</h2>
          </div>
          <p>
            Saya memiliki minat kuat pada DevOps dan IT Support, terutama dalam pengelolaan server Linux,
            deployment aplikasi, Docker, CI/CD, cloud AWS, otomasi konfigurasi, dan monitoring sistem.
            Tujuan saya adalah membuat proses operasional IT menjadi lebih efisien, terdokumentasi,
            dan siap menghadapi kebutuhan produksi.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">Keahlian Utama</p>
          <h2>Skillset DevOps & IT Support</h2>
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, text }) => (
              <article className="skill-card" key={title}>
                <Icon className="card-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section tools-section">
          <p className="eyebrow">Tools & Technology</p>
          <h2>Teknologi yang Saya Kuasai</h2>
          <div className="tool-cloud">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">Portfolio Project</p>
          <h2>Contoh Area Pekerjaan</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <strong>{project.stack}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-card">
          <p className="eyebrow">Kontak</p>
          <h2>Siap membantu kebutuhan DevOps dan IT Support Anda.</h2>
          <p>Email: <a href="mailto:ikgsanikhsan93@gmail.com">ikgsanikhsan93@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/opick-wq" target="_blank" rel="noreferrer">github.com/opick-wq</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;
