import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FORWARD_TO = 'vastgoldent@gmail.com';
const FORWARD_FROM = 'info@matrixbond.vip';

export async function POST(request) {
  const payload = await request.text();

  let event;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get('svix-id'),
        timestamp: request.headers.get('svix-timestamp'),
        signature: request.headers.get('svix-signature'),
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET,
    });
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 401 });
  }

  if (event.type !== 'email.received') {
    return new Response(JSON.stringify({ message: 'Ignored', type: event.type }), { status: 200 });
  }

  try {
    const { error } = await resend.emails.receiving.forward({
      emailId: event.data.email_id,
      to: FORWARD_TO,
      from: FORWARD_FROM,
      passthrough: true,
    });
    if (error) {
      console.error('Forward failed:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 502 });
    }
    return new Response(JSON.stringify({ message: 'Forwarded' }), { status: 200 });
  } catch (err) {
    console.error('Forward failed:', err);
    return new Response(JSON.stringify({ error: 'Forward failed' }), { status: 500 });
  }
}
