import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/links';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const isHomeActive = currentPath === '/' || currentPath === '';
  const isCorpActive = currentPath === '/programa-corporativo';

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo and Brand Title */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src={SITE_CONFIG.logoUrl}
            alt="Logo Instituto Conexões Humanas"
            className="h-11 w-11 rounded-full object-cover shadow-xs"
          />
          <span className="hidden font-serif text-lg text-primary sm:block">
            Conexões Humanas
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className={`transition hover:text-primary ${
              isHomeActive ? 'font-medium text-primary' : ''
            }`}
          >
            Instituto
          </a>
          <a
            href="/programa-corporativo"
            onClick={(e) => handleNavClick(e, '/programa-corporativo')}
            className={`transition hover:text-primary ${
              isCorpActive ? 'font-medium text-primary' : ''
            }`}
          >
            Programa corporativo
          </a>
          <a
            href={SITE_CONFIG.serenaUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-primary"
          >
            Serena
          </a>
          <a
            href={SITE_CONFIG.despertaUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-primary"
          >
            Desperta
          </a>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.whatsappDefaultUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Agendar
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-primary md:hidden"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-card px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-base">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className={`rounded-lg px-3 py-2 transition ${
                isHomeActive
                  ? 'bg-secondary font-medium text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Instituto
            </a>
            <a
              href="/programa-corporativo"
              onClick={(e) => handleNavClick(e, '/programa-corporativo')}
              className={`rounded-lg px-3 py-2 transition ${
                isCorpActive
                  ? 'bg-secondary font-medium text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Programa corporativo
            </a>
            <a
              href={SITE_CONFIG.serenaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              Serena (Teleatendimento)
            </a>
            <a
              href={SITE_CONFIG.despertaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              Desperta (Diagnóstico Psicossocial)
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
