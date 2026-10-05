import React from 'react';
import { SectionTag } from '../components/SectionTag';
import { SITE_CONFIG } from '../config/links';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const SERVICES = [
  {
    tag: 'Infância e adolescência',
    title: 'Psicoterapia infantil',
    text: 'Acolhimento lúdico e cuidadoso para crianças e adolescentes, com orientação e participação da família no processo.',
  },
  {
    tag: 'Vida adulta',
    title: 'Psicoterapia para adultos',
    text: 'Um espaço seguro e sigiloso para lidar com ansiedade, estresse, relações, transições e autoconhecimento.',
  },
  {
    tag: 'Famílias',
    title: 'Orientação familiar',
    text: 'Apoio às famílias para fortalecer vínculos, melhorar a comunicação e atravessar momentos difíceis juntos.',
  },
];

const PILLARS = [
  [
    'Pessoas',
    'Cada história é única. Escutamos com respeito, sem pressa e sem julgamentos.',
  ],
  [
    'Famílias',
    'O cuidado individual reverbera em casa — e a família também faz parte do cuidado.',
  ],
  [
    'Sistemas',
    'Pessoas vivem em redes: escola, trabalho, comunidade. Olhamos para o todo.',
  ],
];

const BENEFITS = [
  [
    'Vida pessoal',
    'Autoconhecimento, regulação emocional, autoestima e sentido para atravessar fases e mudanças.',
  ],
  [
    'Vida profissional',
    'Manejo do estresse, tomada de decisão, liderança, limites e equilíbrio entre trabalho e vida.',
  ],
  [
    'Relações sociais',
    'Comunicação, vínculos afetivos, conflitos familiares e convivência em grupos e comunidades.',
  ],
];

export function HomePage({ onNavigate }: HomePageProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <SectionTag>Pessoas · Famílias · Sistemas</SectionTag>
            <h1 className="text-4xl leading-tight text-primary md:text-6xl">
              Cuidar de cada pessoa é{' '}
              <em className="text-brand not-italic md:italic">fortalecer conexões.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              O Instituto Conexões Humanas oferece psicoterapia para crianças, adolescentes e
              adultos, com escuta qualificada e acolhimento para toda a família.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={SITE_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand px-7 py-3 font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Agendar atendimento
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleScrollTo(e, 'servicos')}
                className="rounded-full border border-primary/20 px-7 py-3 font-medium text-primary transition hover:bg-secondary"
              >
                Nossos serviços
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-full bg-brand opacity-20 blur-3xl" />
            <img
              src={SITE_CONFIG.logoUrl}
              alt="Instituto Conexões Humanas"
              className="relative aspect-square w-full rounded-full object-cover shadow-soft ring-8 ring-card"
            />
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionTag>Quem somos</SectionTag>
            <h2 className="text-3xl text-primary md:text-4xl">
              Um instituto dedicado ao cuidado psicológico em todas as fases da vida.
            </h2>
          </div>
          <p className="text-muted-foreground">
            Acreditamos que o bem-estar se constrói nas relações. Por isso, nosso trabalho
            considera a pessoa, a família e os sistemas dos quais ela faz parte — da infância à
            vida adulta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map(([title, text], idx) => (
            <div key={title} className="rounded-2xl border bg-card p-7">
              <span className="font-serif text-3xl text-accent">0{idx + 1}</span>
              <h3 className="mt-3 text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por que fazer psicoterapia */}
      <section className="bg-soft py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionTag>Por que fazer psicoterapia</SectionTag>
              <h2 className="text-3xl text-primary md:text-4xl">
                Desenvolver-se é aprender a lidar com a vida — por dentro e nas relações.
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p>
                A psicoterapia é um caminho de desenvolvimento humano. Ela ajuda a compreender
                emoções, pensamentos e padrões de comportamento, ampliando a capacidade de fazer
                escolhas mais conscientes e saudáveis.
              </p>
              <p>
                Mais do que aliviar sofrimentos, ela fortalece recursos internos para enfrentar
                desafios pessoais e profissionais e para construir relações mais saudáveis — na
                família, no trabalho, nas amizades e em todos os espaços sociais em que vivemos.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {BENEFITS.map(([title, text]) => (
              <div key={title} className="rounded-2xl border bg-card p-7 shadow-soft">
                <h3 className="text-xl text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso compromisso */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTag>Nosso compromisso</SectionTag>
        <h2 className="max-w-3xl text-3xl text-primary md:text-4xl">
          Cuidado com intervenções práticas e direcionadas.
        </h2>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Nosso compromisso é com o cuidado real. Cada processo terapêutico é construído a partir
          das necessidades de quem chega, com objetivos claros, estratégias práticas e
          acompanhamento contínuo da evolução — para que a mudança aconteça também fora do
          consultório.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Acolhimento
            </p>
            <h3 className="mt-2 text-2xl text-primary">
              Um espaço seguro para ser quem você é
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Escuta sem julgamentos, respeito ao seu tempo e sigilo absoluto. Aqui, cada história é
              recebida com empatia e cuidado.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Confronto
            </p>
            <h3 className="mt-2 text-2xl text-primary">Coragem para crescer</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Acolher também é provocar. Com ética e afeto, confrontamos padrões, crenças e escolhas
              que limitam, porque o crescimento nasce quando nos permitimos olhar o que precisa
              mudar.
            </p>
          </div>
        </div>
      </section>

      {/* Nosso propósito */}
      <section className="bg-brand py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] opacity-80">
            Nosso propósito
          </p>
          <h2 className="text-3xl md:text-5xl">
            Transformar vidas que transformam ambientes e influenciam gerações.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl opacity-85">
            Acreditamos que quando uma pessoa se transforma, tudo ao seu redor muda: a família, a
            escola, o trabalho, a comunidade. Cada processo de cuidado é uma semente que alcança
            muito além de quem a recebe.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {['Vidas', 'Ambientes', 'Gerações'].map((item, idx) => (
              <div
                key={item}
                className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6"
              >
                <span className="font-serif text-3xl">0{idx + 1}</span>
                <p className="mt-2 text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-deep py-24 text-deep-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTag>Serviços</SectionTag>
          <h2 className="max-w-3xl text-3xl md:text-4xl">Como podemos cuidar de você.</h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-deep-foreground/10 bg-deep-foreground/5 p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {s.tag}
                </p>
                <h3 className="mt-2 text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-75">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-8 rounded-2xl bg-brand p-8 md:grid-cols-[1.5fr_1fr] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                Para empresas · Parceria com a Clínica Despertar
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl">
                Programa Integrado de Cuidado Organizacional
              </h3>
              <p className="mt-3 text-sm opacity-85">
                Diagnóstico de riscos psicossociais, plano de ação e psicoterapia para colaboradores
                em uma jornada de 12 meses.
              </p>
            </div>
            <a
              href="/programa-corporativo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/programa-corporativo');
              }}
              className="justify-self-start rounded-full bg-card px-7 py-3 font-semibold text-primary transition hover:opacity-90 md:justify-self-end"
            >
              Conhecer o programa →
            </a>
          </div>
        </div>
      </section>

      {/* Plataformas do instituto */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTag>Plataformas do instituto</SectionTag>
        <h2 className="max-w-3xl text-3xl text-primary md:text-4xl">
          Tecnologia a serviço do cuidado.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href={SITE_CONFIG.serenaUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border bg-card p-8 shadow-soft transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Serena
            </p>
            <h3 className="mt-2 text-2xl text-primary">Teleatendimento psicológico</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Sessões online em salas seguras, com agendamento simples e sigilo garantido.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-accent group-hover:underline">
              Acessar Serena →
            </span>
          </a>

          <a
            href={SITE_CONFIG.despertaUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border bg-card p-8 shadow-soft transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-teal">
              Desperta
            </p>
            <h3 className="mt-2 text-2xl text-primary">Diagnóstico psicossocial</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Mapeamento de riscos psicossociais e gestão do cuidado organizacional para empresas.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-accent group-hover:underline">
              Acessar Desperta →
            </span>
          </a>
        </div>
      </section>

      {/* Chamada para ação final */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border bg-soft px-8 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-3xl text-3xl text-primary md:text-5xl">
            Dar o primeiro passo já é um ato de cuidado.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Atendimento para crianças, adolescentes e adultos.
          </p>
          <a
            href={SITE_CONFIG.whatsappDefaultUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {SITE_CONFIG.whatsappPhoneDisplay} · WhatsApp
          </a>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-3xl border bg-card shadow-soft md:grid-cols-[1fr_1.4fr]">
          <div className="p-8 md:p-10">
            <SectionTag>Onde estamos</SectionTag>
            <h2 className="text-3xl text-primary">Venha nos visitar</h2>
            <p className="mt-4 text-muted-foreground">{SITE_CONFIG.address}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-secondary"
              >
                Abrir no Google Maps
              </a>
              <a
                href={SITE_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Agendar consulta
              </a>
            </div>
          </div>

          <iframe
            title="Mapa do Instituto Conexões Humanas"
            src={SITE_CONFIG.mapsEmbedUrl}
            className="h-80 w-full border-0 md:h-full md:min-h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
