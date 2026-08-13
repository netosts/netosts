"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Send, Check } from "lucide-react";
import { profile, contactTopics } from "@/lib/data";

export function ContactChat() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [topic, setTopic] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // Mantém o avatar visível, mas só mostra o convite no fim da página.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let invitationScheduled = false;

    function stopListening() {
      window.removeEventListener("scroll", checkPageBottom);
      window.removeEventListener("resize", checkPageBottom);
    }

    function checkPageBottom() {
      const viewportBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      const reachedBottom = viewportBottom >= pageBottom - 4;

      if (!reachedBottom || invitationScheduled) return;

      invitationScheduled = true;
      stopListening();
      timer = setTimeout(() => setShowBubble(true), 600);
    }

    window.addEventListener("scroll", checkPageBottom, { passive: true });
    window.addEventListener("resize", checkPageBottom);
    checkPageBottom();

    return () => {
      stopListening();
      if (timer) clearTimeout(timer);
    };
  }, []);

  const selectedTopic = contactTopics.find((t) => t.id === topic);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!topic) return;
    const subject = encodeURIComponent(
      selectedTopic?.label ?? "Contato pelo portfólio",
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  function reset() {
    setSent(false);
    setTopic(null);
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Balão de fala */}
      {showBubble && !open && (
        <button
          onClick={() => {
            setOpen(true);
            setShowBubble(false);
          }}
          className="max-w-[15rem] origin-bottom-right animate-in fade-in slide-in-from-bottom-2 rounded-2xl rounded-br-sm border border-border bg-card px-4 py-3 text-left text-sm leading-relaxed text-card-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Olá! Se quiser falar comigo, é só clicar aqui.
        </button>
      )}

      {/* Painel do chat */}
      {open && (
        <div className="w-[min(92vw,22rem)] origin-bottom-right animate-in fade-in zoom-in-95 slide-in-from-bottom-2 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl">
          {/* Cabeçalho */}
          <div className="flex items-center gap-3 border-b border-border p-4">
            <span className="relative">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
                crossOrigin="anonymous"
              />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-card bg-green-500" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{profile.name}</p>
              <p className="truncate font-mono text-xs text-muted-foreground">
                Normalmente respondo em 1 dia
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Corpo */}
          <div className="max-h-[60vh] space-y-4 overflow-y-auto p-4">
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <span
                  className="flex size-12 items-center justify-center rounded-full"
                  style={{
                    color: "var(--accent-solid)",
                    backgroundColor:
                      "color-mix(in oklch, var(--accent-solid) 14%, transparent)",
                  }}
                >
                  <Check className="size-6" />
                </span>
                <p className="text-sm font-medium">
                  Seu aplicativo de email foi aberto
                </p>
                <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
                  Revise a mensagem no seu aplicativo e confirme o envio.
                </p>
                <button
                  onClick={reset}
                  className="mt-1 text-xs font-medium underline underline-offset-4 hover:opacity-70"
                >
                  Começar de novo
                </button>
              </div>
            ) : (
              <>
                {/* Mensagem de boas-vindas */}
                <div className="flex gap-2.5">
                  <Image
                    src={profile.avatar}
                    alt=""
                    width={28}
                    height={28}
                    className="mt-0.5 size-7 shrink-0 rounded-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-3.5 py-2.5 text-sm leading-relaxed">
                    Que bom te ver por aqui! Sobre o que você quer falar?
                  </p>
                </div>

                {/* Seleção de assunto */}
                <div className="flex flex-wrap gap-2 pl-9">
                  {contactTopics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTopic(t.id)}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                      style={
                        topic === t.id
                          ? {
                              borderColor: "var(--accent-solid)",
                              color: "var(--accent-solid)",
                              backgroundColor:
                                "color-mix(in oklch, var(--accent-solid) 12%, transparent)",
                            }
                          : { borderColor: "var(--border)" }
                      }
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Formulário */}
                {topic && (
                  <form
                    onSubmit={handleSend}
                    className="animate-in fade-in slide-in-from-bottom-1 space-y-2.5 pl-9"
                  >
                    <p className="text-xs text-muted-foreground">
                      Assunto:{" "}
                      <span className="text-foreground">
                        {selectedTopic?.label}
                      </span>
                    </p>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Escreva sua mensagem..."
                      className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--accent-solid)]"
                    />
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: "var(--accent-solid)",
                        color: "var(--accent-solid-foreground)",
                      }}
                    >
                      Enviar mensagem
                      <Send className="size-4" />
                    </button>
                  </form>
                )}

                {/* Canais diretos */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-4 pl-9">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    ou
                  </span>
                  {[
                    { label: "Email", href: `mailto:${profile.email}` },
                    { label: "GitHub", href: profile.socials.github },
                    { label: "LinkedIn", href: profile.socials.linkedin },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Avatar / botão fixo */}
      <button
        onClick={() => {
          setOpen((v) => !v);
          setShowBubble(false);
        }}
        aria-label={open ? "Fechar chat de contato" : "Abrir chat de contato"}
        className="relative flex size-14 items-center justify-center overflow-visible rounded-full border border-border bg-card shadow-lg transition-transform hover:scale-105 md:size-16"
      >
        {open ? (
          <X className="size-5 text-foreground" />
        ) : (
          <Image
            src={profile.avatar}
            alt="Falar comigo"
            width={64}
            height={64}
            className="size-full rounded-full object-cover"
            crossOrigin="anonymous"
          />
        )}
        {!open && (
          <span className="absolute bottom-1 right-1 z-10 size-3.5 translate-x-1/4 translate-y-1/4 rounded-full border-2 border-card bg-green-500" />
        )}
      </button>
    </div>
  );
}
