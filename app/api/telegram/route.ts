// app/api/telegram/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, company } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!token || !chatId) {
      console.warn("Telegram tokens are missing in the environment variables.");
      return NextResponse.json({ error: 'Telegram configuration missing' }, { status: 500 });
    }

    const safeName = (name || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safePhone = (phone || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeCompany = (company || 'Ko\'rsatilmagan').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const message = `
🔥 <b>Yangi Mijoz (UN1QUE)</b> 🔥
──────────────
👤 <b>Ism:</b> ${safeName}
📱 <b>Telefon:</b> ${safePhone}
🏢 <b>Kompaniya:</b> ${safeCompany}
──────────────
    `;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
       const err = await response.text();
       console.error("Telegram API Error:", err);
       return NextResponse.json({ error: `Telegram API: ${JSON.parse(err).description || 'Unknown error'}` }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Telegram route error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send message' }, { status: 500 });
  }
}
