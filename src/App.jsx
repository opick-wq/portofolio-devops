const skills = [
  ["Server Infrastructure", "Administrasi Linux server, hardening dasar, backup, troubleshooting service, DNS, web server, dan optimasi performa."],
  ["Docker & Container", "Membuat Dockerfile, docker-compose, deployment aplikasi, isolasi service, dan strategi restart otomatis."],
  ["CI/CD Automation", "Pipeline build-test-deploy dengan Jenkins dan GitHub Actions untuk mempercepat delivery aplikasi."],
  ["Cloud AWS", "Pengelolaan EC2, S3, IAM, VPC, Security Group, dan deployment workload cloud yang aman dan efisien."],
  ["Infrastructure as Code", "Provisioning infrastruktur menggunakan Terraform agar environment konsisten dan mudah direplikasi."],
  ["Ansible Automation", "Otomatisasi konfigurasi server, instalasi paket, setup aplikasi, dan deployment berbasis playbook."],
  ["Monitoring", "Observability dengan Prometheus dan Grafana untuk metrik, alerting, dashboard, dan analisis insiden."],
  ["IT Support", "Troubleshooting jaringan, perangkat kerja, sistem operasi, aplikasi, user support, dan dokumentasi teknis."],
];

const projects = [
  ["Dockerized Portfolio", "Website React dibungkus dengan Nginx dan Docker Compose, menggunakan restart: always untuk auto-recovery setelah reboot."],
  ["CI/CD Pipeline", "Rancangan pipeline Jenkins untuk build, test, publish image Docker, dan deployment otomatis ke server."],
  ["Monitoring Stack", "Desain monitoring server dan container dengan Prometheus, Node Exporter, dan dashboard Grafana."],
];

function App() {
  return (
    <main>
      <nav className="navbar">
        <span className="brand">MSI</span>
        <div>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Proyek</a>
          <a href="#contact">Kontak</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">DevOps Engineer • IT Support • Cloud Infrastructure</p>
        <h1>Muhammad Sultan Ihsan</h1>
        <p className="lead">
          Saya membantu bisnis membangun infrastruktur server yang stabil, pipeline deployment yang otomatis,
          dan sistem monitoring yang mudah dipantau. Fokus saya adalah reliability, automation, security,
          dan operasional IT yang rapi.
        </p>
        <div className="heroActions">
          <a className="button primary" href="#contact">Hubungi Saya</a>
          <a className="button secondary" href="#projects">Lihat Proyek</a>
        </div>
      </section>

      <section className="stats">
        <div><strong>24/7</strong><span>Mindset reliability</span></div>
        <div><strong>CI/CD</strong><span>Automation workflow</span></div>
        <div><strong>Cloud</strong><span>AWS, Docker, Terraform</span></div>
      </section>

      <section className="section" id="skills">
        <p className="eyebrow">Core Expertise</p>
        <h2>Keahlian DevOps & IT Support</h2>
        <div className="grid">
          {skills.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">Selected Work</p>
        <h2>Contoh Proyek</h2>
        <div className="grid three">
          {projects.map(([title, text]) => (
            <article className="card project" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Siap membantu deployment dan operasional server Anda.</h2>
        <p>Email: <a href="mailto:ikgsanikhsan93@gmail.com">ikgsanikhsan93@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/opick-wq" target="_blank" rel="noreferrer">github.com/opick-wq</a></p>
      </section>
    </main>
  );
}

export default App;
