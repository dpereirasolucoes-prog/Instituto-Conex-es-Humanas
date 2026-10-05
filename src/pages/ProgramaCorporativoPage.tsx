import React from 'react';
import { SectionTag } from '../components/SectionTag';
import { SITE_CONFIG } from '../config/links';

const PRESSURE_IMPACTS = [
  [
    'Nas pessoas',
    'Estresse persistente, exaustão, burnout, ansiedade e dificuldades de recuperação individual.',
  ],
  [
    'Nas equipes',
    'Conflitos interpessoais, sobrecarga coletiva, perda de confiança e deterioração das relações de trabalho.',
  ],
  [
    'Na empresa e famílias',
    'Afastamentos, absenteísmo, rotatividade e impactos na convivência e bem-estar fora do trabalho.',
  ],
];

const CORP_SERVICES = [
  {
    tag: 'Compreender',
    title: 'Mapa de Riscos Psicossociais',
    text: 'Escuta estruturada, levantamento de fatores psicossociais e condições reais de trabalho, com mapa de criticidade e devolutiva estratégica para a gestão.',
  },
  {
    tag: 'Agir',
    title: 'Plano de Ação',
    text: 'Medidas individuais e coletivas orientadas pela criticidade: resposta prioritária, intervenções dirigidas e prevenção contínua.',
  },
  {
    tag: 'Acolher',
    title: 'Plano de Psicoterapia',
    text: 'Pacotes de sessões com nossa rede de psicólogos habilitados, com sigilo clínico, privacidade e agendamento facilitado.',
  },
];

const CRITICALITY_LEVELS = [
  [
    'Criticidade elevada',
    'Rever fatores de risco imediatos, apoio emergencial às equipes e orientação de lideranças na gestão de crises.',
  ],
  [
    'Criticidade moderada',
    'Intervenções dirigidas, escuta qualificada de grupos focais e aperfeiçoamento das práticas de trabalho.',
  ],
  [
    'Prevenção contínua',
    'Ações educativas, fortalecimento de vínculos, programas de bem-estar e acompanhamento de indicadores.',
  ],
];

const SAFE_SPACE_POINTS = [
  'Agendamento e encaminhamento com respeito à privacidade.',
  'Sigilo clínico e acolhimento especializado.',
  'Sessões e condições definidas conforme o plano contratado.',
];

const JOURNEY_STEPS = [
  [
    'Compreender',
    'Escuta ativa, diagnóstico cultural e Mapa de Riscos Psicossociais inicial.',
  ],
  [
    'Planejar',
    'Construção estratégica de ações individuais e coletivas baseadas na criticidade.',
  ],
  [
    'Implementar',
    'Execução das intervenções prioritárias e início dos pacotes de psicoterapia.',
  ],
  [
    'Evoluir',
    'Monitoramento contínuo, revisão de prioridades e sustentação do cuidado.',
  ],
];

const RESULTS_PILLARS = [
  [
    'Para as pessoas',
    'Mais acesso ao acolhimento psicológico e melhores condições e clima de trabalho.',
  ],
  [
    'Para a organização',
    'Medidas preventivas baseadas em dados e gestão orientada por evidências psicossociais.',
  ],
  [
    'Para as famílias',
    'Reflexos do bem-estar individual na qualidade das relações fora do trabalho.',
  ],
];

const MONITORED_INDICATORS = [
  [
    'Mapa de riscos',
    'Evolução da exposição aos fatores psicossociais e eficácia das contenções.',
  ],
  [
    'Plano de ação',
    'Taxa de execução das medidas e revisão dinâmica das prioridades.',
  ],
  [
    'Participação',
    'Adesão às ações coletivas e acesso à rede de psicoterapia.',
  ],
  [
    'Indicadores de saúde',
    'Absenteísmo e afastamentos relacionados à saúde mental, quando aplicável.',
  ],
];

export function ProgramaCorporativoPage() {
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
            <SectionTag>Parceria Instituto Conexões Humanas + Clínica Despertar</SectionTag>
            <h1 className="text-4xl leading-tight text-primary md:text-6xl">
              Cuidar de organizações{' '}
              <em className="text-brand not-italic md:italic">cuidando de pessoas.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Programa Integrado de Cuidado Organizacional: diagnóstico psicossocial, plano de
              ação e psicoterapia em uma jornada de 12 meses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                onClick={(e) => handleScrollTo(e, 'contato')}
                className="rounded-full bg-brand px-7 py-3 font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Agendar conversa
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleScrollTo(e, 'servicos')}
                className="rounded-full border border-primary/20 px-7 py-3 font-medium text-primary transition hover:bg-secondary"
              >
                Conhecer serviços
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-full bg-brand opacity-20 blur-3xl" />
            <div className="relative rounded-3xl bg-card p-8 shadow-soft">
              <p className="font-serif text-2xl text-primary">
                Programa Integrado de Cuidado Organizacional
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                12 meses · Diagnóstico · Ação · Psicoterapia
              </p>
              <a
                href={SITE_CONFIG.despertaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-accent hover:underline"
              >
                Acessar plataforma Desperta →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visão */}
      <section id="visao" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionTag>Nossa visão</SectionTag>
            <h2 className="text-3xl text-primary md:text-4xl">
              A empresa também faz parte da vida de quem trabalha nela.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>
              O que acontece durante o expediente não termina quando a pessoa volta para casa.
            </p>
            <p>
              Quando o ambiente de trabalho oferece escuta, respeito e condições saudáveis, o
              cuidado alcança também as famílias. E pessoas apoiadas contribuem, criam e crescem
              junto com a organização.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-widest text-primary">
              {['Organização', 'Pessoas', 'Famílias', 'Organização'].map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1.5">{item}</span>
                  {idx < 3 && <span className="text-accent">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-2xl text-primary">
            Quando a pressão se torna rotina, todos sentem.
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {PRESSURE_IMPACTS.map(([title, text], idx) => (
              <div key={title} className="rounded-2xl border bg-card p-7">
                <span className="font-serif text-3xl text-accent">0{idx + 1}</span>
                <h4 className="mt-3 font-semibold text-primary">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Três serviços · um compromisso */}
      <section id="servicos" className="bg-deep py-24 text-deep-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTag>Três serviços · um compromisso</SectionTag>
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            Cuidar de quem faz a empresa acontecer.
          </h2>
          <p className="mt-4 max-w-2xl opacity-75">
            Conhecer a realidade, transformar o ambiente e acolher cada pessoa.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {CORP_SERVICES.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-2xl border border-deep-foreground/10 bg-deep-foreground/5 p-8 transition hover:bg-deep-foreground/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand font-serif text-lg text-primary-foreground">
                  0{idx + 1}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {s.tag}
                </p>
                <h3 className="mt-2 text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-75">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Resposta proporcional */}
          <div className="mt-16 grid gap-8 rounded-2xl border border-deep-foreground/10 bg-deep-foreground/5 p-8 md:grid-cols-[1fr_1.5fr] md:p-10">
            <div>
              <SectionTag>Resposta proporcional</SectionTag>
              <h3 className="text-2xl">Cuidado se transforma em atitudes concretas.</h3>
              <p className="mt-3 text-sm opacity-75">
                O Plano de Ação se adapta à criticidade identificada no diagnóstico.
              </p>
            </div>
            <div className="space-y-4">
              {CRITICALITY_LEVELS.map(([level, desc], idx) => (
                <div
                  key={level}
                  className="flex gap-5 rounded-xl border border-deep-foreground/10 p-5"
                >
                  <span className="font-serif text-2xl text-teal">{idx + 1}</span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider">{level}</p>
                    <p className="mt-1 text-sm opacity-75">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Espaço seguro */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <SectionTag>Um espaço seguro para ser ouvido</SectionTag>
          <h2 className="text-3xl text-primary md:text-4xl">
            Quando alguém precisa conversar, o cuidado deve estar perto.
          </h2>
        </div>
        <ul className="space-y-4">
          {SAFE_SPACE_POINTS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-xl bg-secondary p-5 text-secondary-foreground"
            >
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Jornada de 12 meses */}
      <section id="jornada" className="bg-soft py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTag>Jornada de 12 meses</SectionTag>
          <h2 className="max-w-3xl text-3xl text-primary md:text-4xl">
            Uma jornada de cuidado que acompanha a empresa.
          </h2>

          <div className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-brand md:block" />
            {JOURNEY_STEPS.map(([step, desc], idx) => (
              <div key={step} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary font-semibold text-primary-foreground">
                  0{idx + 1}
                </div>
                <h3 className="mt-5 text-xl text-primary">{step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTag>Resultados</SectionTag>
        <h2 className="max-w-3xl text-3xl text-primary md:text-4xl">
          Cuidado que pode ser percebido e acompanhado.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {RESULTS_PILLARS.map(([pillar, desc]) => (
            <div
              key={pillar}
              className="rounded-2xl border-t-4 border-accent bg-card p-7 shadow-soft"
            >
              <h3 className="text-xl text-primary">{pillar}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-2xl text-primary">O que acompanhamos ao longo do ano</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Indicadores definidos com a empresa, analisados de forma agregada e sigilosa.
        </p>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 md:grid-cols-4">
          {MONITORED_INDICATORS.map(([name, desc]) => (
            <div key={name} className="bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                {name}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contato Final */}
      <section id="contato" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-brand px-8 py-16 text-center text-primary-foreground md:px-16">
          <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl">
            Vamos construir um lugar onde cuidar das pessoas é parte do crescimento?
          </h2>
          <p className="mt-5 opacity-85">
            Diagnóstico · Intervenção · Atendimento psicológico · Acompanhamento
          </p>
          <p className="mt-2 text-sm opacity-75">
            Investimento sob medida, conforme o perfil e o número de colaboradores.
          </p>
          <a
            href={SITE_CONFIG.whatsappCorporativoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-card px-8 py-4 font-semibold text-primary transition hover:opacity-90"
          >
            {SITE_CONFIG.whatsappPhoneDisplay} · WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
