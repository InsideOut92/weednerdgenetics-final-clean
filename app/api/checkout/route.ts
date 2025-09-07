import { NextResponse } from 'next/server';
// To enable Stripe checkout create a .env.local with STRIPE_SECRET_KEY=sk_test_xxx
// and uncomment the import & Stripe client creation below.
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = body.product;

    // If Stripe is configured, create a session. Otherwise return a placeholder.
    if (process.env.STRIPE_SECRET_KEY) {
      // const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ['card'],
      //   line_items: [ { price_data: { currency: 'eur', product_data: { name: product.name }, unit_amount: Math.round(product.price * 100) }, quantity: 1 } ],
      //   mode: 'payment',
      //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success`,
      //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cancel`,
      // });
      // return NextResponse.json({ id: session.id });
    }

    return NextResponse.json({ message: 'Stripe not configured - this is a demo response.' });
  } catch (err) {
    return NextResponse.json({ error: 'Error creating checkout' }, { status: 500 });
  }
}
