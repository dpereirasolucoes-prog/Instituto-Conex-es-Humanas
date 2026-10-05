/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProgramaCorporativoPage } from './pages/ProgramaCorporativoPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Atualiza metadados e título de acordo com a rota ativa
    if (currentPath === '/programa-corporativo') {
      document.title = 'Programa de Cuidado Organizacional — Conexões Humanas + Despertar';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Diagnóstico de riscos psicossociais, plano de ação e psicoterapia para empresas. Cuidar de pessoas, famílias e sistemas.'
        );
      }
    } else {
      document.title = 'Instituto Conexões Humanas — Psicoterapia para crianças e adultos';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Psicoterapia para crianças, adolescentes e adultos. Cuidado para pessoas, famílias e sistemas.'
        );
      }
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-accent/20">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">
        {currentPath === '/programa-corporativo' ? (
          <ProgramaCorporativoPage />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )}
      </main>
      <Footer />
    </div>
  );
}
