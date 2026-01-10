import Stripe from 'stripe';

export async function onRequestPost(context) {
  const stripe = new Stripe(context.env.STRIPE_SECRET_KEY);
  
  try {
    const { amount, giftAid, origin } = await context.request.json();
    
    // Validate amount (min 50p to cover fees, let's say £1)
    if (!amount || isNaN(amount) || amount < 100) { 
      return new Response(JSON.stringify({ error: 'Invalid amount (minimum £1)' }), { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Donation to Masjid Al Ummah',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      submit_type: 'donate',
      success_url: `${origin}/donate?success=true`,
      cancel_url: `${origin}/donate?canceled=true`,
      metadata: {
        gift_aid: giftAid ? 'yes' : 'no',
      },
      // automatic_tax: { enabled: false },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Stripe error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
