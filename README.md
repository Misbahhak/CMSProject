Hotel Booking System

This project is a hotel booking platform built with Next.js for the frontend and Sanity CMS for content management. It allows users to browse hotels, check availability, and make bookings seamlessly.

Key features include:

🏨 Dynamic hotel listings powered by Sanity CMS

⚡ Fast and responsive UI with Next.js

💳 Secure payment processing via Stripe integration (fully functional)

🔧 Easy content updates through Sanity’s dashboard

🚀 Getting Started

Prerequisites

Node.js (v16 or above recommended)

npm or yarn

Sanity CLI installed globally (npm install -g @sanity/cli)

Installation

Clone the repository:

git clone https://github.com/Misbahhak/hotel-booking-system.git
cd hotel-booking-system

Install dependencies:

npm install
# or
yarn install

Set up environment variables:

Create a .env.local file in the root directory.

Add your Stripe keys, Sanity project ID, and dataset. Example:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLIC_KEY=your_stripe_public

🖥️ Running the Project

Next.js (Frontend)

npm run dev
# or
yarn dev

This will start the development server at http://localhost:3000.

Sanity CMS (Backend)

sanity start

This will launch the Sanity Studio locally, allowing you to manage hotel data.

✅ Stripe Integration

Stripe is fully integrated for handling payments. Test bookings can be made using Stripe’s test cards (e.g., 4242 4242 4242 4242).
