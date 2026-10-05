import React from 'react';
import { SITE_CONFIG } from '../config/links';

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src={SITE_CONFIG.logoUrl}
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <span>
            {SITE_CONFIG.companyName} · CNPJ {SITE_CONFIG.cnpj}
            <br />
            {SITE_CONFIG.whatsappPhoneDisplay} ·{' '}
            <a
              href={SITE_CONFIG.mapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              {SITE_CONFIG.address}
            </a>
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href={SITE_CONFIG.serenaUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Serena
          </a>
          <a
            href={SITE_CONFIG.despertaUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            Desperta
          </a>
        </div>
      </div>
    </footer>
  );
}
