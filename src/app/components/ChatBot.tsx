'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState<
    { id: number; sender: 'user' | 'bot'; text: string }[]
  >([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ao receber novas mensagens
  useEffect(() => {

    if (messages.length === 0) {
    setMessages([
        {
          id: Date.now(),
          sender: 'bot',
          text:
            'Olá! 👋 Eu sou o assistente virtual do Álvaro. Trabalho com integração de sistemas, automações com Bitrix24, N8N, e desenvolvimento em JavaScript , ReactJS, NodeJS e Java . Me diga como posso te ajudar!',
        },
      ]);
    }

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (sending || !input.trim()) return;
    setSending(true);

    const textToSend = input.trim();
    // adiciona mensagem do usuário
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: textToSend },
    ]);
    setInput('');

    try {
      const response = await fetch(
        'https://webhook-n8n.fluxora.space/webhook/fd240d59-c2fe-4629-9e71-ae6264e17e59',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: textToSend }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: data.reply?.response || 'Resposta não disponível.',
        },
      ]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Erro desconhecido';

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: 'bot',
          text: `Erro: ${errorMessage}`,
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 border rounded-2xl shadow-md">
      <div
        ref={containerRef}
        className="h-80 overflow-y-auto space-y-2 mb-4 bg-[#0D201F] p-2 rounded-xl flex flex-col"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-600 self-end ml-auto'
                : 'bg-green-600 self-start'
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Digite sua mensagem..."
          disabled={sending}
        />
        <button
          onClick={sendMessage}
          disabled={sending}
          className="bg-blue-500 text-white px-4 rounded-xl disabled:opacity-50"
        >
          {sending ? 'Enviando…' : 'Enviar'}
        </button>
      </div>
    </div>
  );
}
