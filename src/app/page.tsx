"use client"

// src/app/page.tsx
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('hero');
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Harmonia Pilates</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li onClick={() => setActiveTab('hero')} className={activeTab === 'hero' ? styles.active : ''}>Home</li>
            <li onClick={() => setActiveTab('sobre')} className={activeTab === 'sobre' ? styles.active : ''}>Sobre</li>
            <li onClick={() => setActiveTab('metodo')} className={activeTab === 'metodo' ? styles.active : ''}>Método</li>
            <li onClick={() => setActiveTab('aulas')} className={activeTab === 'aulas' ? styles.active : ''}>Aulas</li>
            <li onClick={() => setActiveTab('instrutores')} className={activeTab === 'instrutores' ? styles.active : ''}>Instrutores</li>
            <li onClick={() => setActiveTab('contato')} className={activeTab === 'contato' ? styles.active : ''}>Contato</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {activeTab === 'hero' && (
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h2>Transforme seu corpo e sua vida com Pilates</h2>
              <p>Conquistando equilíbrio, força e bem-estar através do movimento consciente</p>
              <button className={styles.btnPrimary}>Agende sua Aula Experimental</button>
            </div>
            <div className={styles.heroImage}>
              {/* Placeholder for hero image */}
              <div className={styles.imagePlaceholder}>Imagem de Pilates</div>
            </div>
          </section>
        )}

        {activeTab === 'sobre' && (
          <section className={styles.about}>
            <h2>Sobre o Estúdio Harmonia Pilates</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  Fundado em 2015, o Estúdio Harmonia Pilates nasceu da paixão por transformar vidas através do movimento consciente.
                  Nossa missão é proporcionar um ambiente acolhedor onde cada aluno possa descobrir os benefícios do Pilates adaptados às suas necessidades individuais.
                </p>
                <p>
                  Nosso estúdio conta com equipamentos de última geração e profissionais certificados, comprometidos em oferecer uma experiência única
                  que integra corpo, mente e espírito.
                </p>
                <ul className={styles.benefitsList}>
                  <li>Melhora da postura e alinhamento corporal</li>
                  <li>Aumento da força e flexibilidade</li>
                  <li>Redução de dores crônicas</li>
                  <li>Ganho de consciência corporal</li>
                  <li>Desenvolvimento de concentração e foco</li>
                </ul>
              </div>
              <div className={styles.aboutImage}>
                {/* Placeholder for about image */}
                <div className={styles.imagePlaceholder}>Imagem do Estúdio</div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'metodo' && (
          <section className={styles.method}>
            <h2>O Método Pilates</h2>
            <div className={styles.methodContent}>
              <p>
                O método Pilates foi desenvolvido por Joseph Pilates no início do século XX e se baseia em seis princípios fundamentais:
                concentração, controle, centralização, fluidez, precisão e respiração.
              </p>
              <div className={styles.principles}>
                <div className={styles.principleCard}>
                  <h3>Concentração</h3>
                  <p>Foco total nos movimentos realizados</p>
                </div>
                <div className={styles.principleCard}>
                  <h3>Controle</h3>
                  <p>Domínio completo sobre cada movimento</p>
                </div>
                <div className={styles.principleCard}>
                  <h3>Centralização</h3>
                  <p>Fortalecimento do centro de força (powerhouse)</p>
                </div>
                <div className={styles.principleCard}>
                  <h3>Fluidez</h3>
                  <p>Transições suaves entre os movimentos</p>
                </div>
                <div className={styles.principleCard}>
                  <h3>Precisão</h3>
                  <p>Execução correta e detalhada</p>
                </div>
                <div className={styles.principleCard}>
                  <h3>Respiração</h3>
                  <p>Coordenação da respiração com os movimentos</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'aulas' && (
          <section className={styles.classes}>
            <h2>Nossas Aulas</h2>
            <div className={styles.classesGrid}>
              <div className={styles.classCard}>
                <h3>Pilates Solo</h3>
                <p>Aulas em grupo realizadas no solo com pequenos acessórios</p>
                <p className={styles.classDuration}>Duração: 50 minutos</p>
                <button className={styles.btnSecondary}>Saiba mais</button>
              </div>
              <div className={styles.classCard}>
                <h3>Pilates Aparelhos</h3>
                <p>Aulas em equipamentos específicos como Reformer, Cadillac e Chair</p>
                <p className={styles.classDuration}>Duração: 50 minutos</p>
                <button className={styles.btnSecondary}>Saiba mais</button>
              </div>
              <div className={styles.classCard}>
                <h3>Pilates Clínico</h3>
                <p>Aulas individuais voltadas para reabilitação e necessidades específicas</p>
                <p className={styles.classDuration}>Duração: 60 minutos</p>
                <button className={styles.btnSecondary}>Saiba mais</button>
              </div>
              <div className={styles.classCard}>
                <h3>Pilates para Gestantes</h3>
                <p>Aulas adaptadas para cada trimestre da gestação</p>
                <p className={styles.classDuration}>Duração: 50 minutos</p>
                <button className={styles.btnSecondary}>Saiba mais</button>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'instrutores' && (
          <section className={styles.instructors}>
            <h2>Nossos Instrutores</h2>
            <div className={styles.instructorsGrid}>
              <div className={styles.instructorCard}>
                <div className={styles.instructorPhoto}>
                  {/* Placeholder for instructor photo */}
                  <div className={styles.imagePlaceholder}>Foto</div>
                </div>
                <h3>Mariana Silva</h3>
                <p>Diretora e Instrutora Sênior</p>
                <p>Especialista em Pilates Clínico e Reabilitação</p>
              </div>
              <div className={styles.instructorCard}>
                <div className={styles.instructorPhoto}>
                  {/* Placeholder for instructor photo */}
                  <div className={styles.imagePlaceholder}>Foto</div>
                </div>
                <h3>Carlos Oliveira</h3>
                <p>Instrutor Master</p>
                <p>Especialista em Performance Esportiva</p>
              </div>
              <div className={styles.instructorCard}>
                <div className={styles.instructorPhoto}>
                  {/* Placeholder for instructor photo */}
                  <div className={styles.imagePlaceholder}>Foto</div>
                </div>
                <h3>Juliana Costa</h3>
                <p>Instrutora</p>
                <p>Especialista em Pilates para Gestantes</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contato' && (
          <section className={styles.contact}>
            <h2>Entre em Contato</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactForm}>
                <form>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" rows={4} required></textarea>
                  </div>
                  <button type="submit" className={styles.btnPrimary}>Enviar Mensagem</button>
                </form>
              </div>
              <div className={styles.contactInfo}>
                <h3>Informações de Contato</h3>
                <p><strong>Endereço:</strong> Av. das Flores, 123 - Jardim Primavera</p>
                <p><strong>Telefone:</strong> (11) 3456-7890</p>
                <p><strong>Email:</strong> contato@harmoniapilates.com.br</p>
                <h3>Horário de Funcionamento</h3>
                <p><strong>Segunda a Sexta:</strong> 7h às 21h</p>
                <p><strong>Sábado:</strong> 8h às 14h</p>
                <div className={styles.socialMedia}>
                  <a href="#" className={styles.socialIcon}>Instagram</a>
                  <a href="#" className={styles.socialIcon}>Facebook</a>
                  <a href="#" className={styles.socialIcon}>YouTube</a>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className={styles.testimonials}>
          <h2>Depoimentos</h2>
          <div className={styles.testimonialsSlider}>
            <div className={styles.testimonialCard}>
              <p>&ldquo;O Pilates transformou completamente minha qualidade de vida. Após anos sofrendo com dores na coluna, encontrei no Estúdio Harmonia Pilates não apenas alívio, mas uma nova forma de me relacionar com meu corpo.&rdquo;</p>
              <h4>Ana Paula, 42 anos</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p>&ldquo;Como atleta, busquei o Pilates para melhorar meu desempenho e prevenir lesões. Os resultados superaram minhas expectativas. A equipe do Estúdio Harmonia é extremamente profissional e atenciosa.&rdquo;</p>
              <h4>Rodrigo, 28 anos</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p>&ldquo;Praticar Pilates durante minha gestação foi essencial para manter-me ativa e saudável. As aulas adaptadas me deram segurança e bem-estar durante toda a gravidez e ajudaram na recuperação pós-parto.&rdquo;</p>
              <h4>Fernanda, 35 anos</h4>
            </div>
          </div>
          {activeTab !== 'hero' && (
            <div className={styles.cta}>
              <button className={styles.btnPrimary}>Agende sua Aula Experimental</button>
            </div>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>Harmonia Pilates</h3>
            <p>Transformando vidas através do movimento consciente</p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('hero'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('sobre'); }}>Sobre</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('metodo'); }}>Método</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('aulas'); }}>Aulas</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('instrutores'); }}>Instrutores</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('contato'); }}>Contato</a></li>
            </ul>
          </div>
          <div className={styles.footerNewsletter}>
            <h4>Receba Novidades</h4>
            <form>
              <input type="email" placeholder="Seu email" required />
              <button type="submit">Inscrever</button>
            </form>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Estúdio Harmonia Pilates. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}