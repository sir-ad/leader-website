export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
}

export const categories = [
  'Product Leadership',
  'Innovation',
  'Team Building',
  'Personal Growth',
  'Technology'
];

export const posts: Post[] = [
  {
    id: 'building-one-ai',
    title: 'Building ONE AI: A Journey in HR Innovation',
    excerpt: 'How we transformed HR operations with AI-driven automation and personalized insights.',
    content: `The journey of building ONE AI started with a simple question: How can we make HR more human by making it more intelligent?

    Our mission was clear - to create an AI assistant that wouldn't just automate tasks but would understand, learn, and adapt to each organization's unique HR needs.

    Key Milestones:
    1. Understanding the human element in HR processes
    2. Developing adaptive AI algorithms
    3. Creating intuitive interfaces for complex operations
    4. Implementing continuous learning mechanisms

    The result? A 30% reduction in manual tasks, 25% increase in employee engagement, and most importantly, HR teams that can focus on what matters most - people.`,
    date: '2024-03-15',
    category: 'Innovation',
    readTime: '5 min',
    author: {
      name: 'Adarsh Agrahari',
      avatar: 'https://adplist-bucket.s3.amazonaws.com/media/profile_photos/8d4b90ae840e48c1bf6575d2575a48d4CEja9.webp'
    },
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'upsc-to-product-leadership',
    title: 'From UPSC to Product Leadership: Lessons in Adaptability',
    excerpt: 'How preparing for India\'s toughest exam shaped my approach to product management.',
    content: `The journey from UPSC preparation to product leadership might seem unusual, but the skills and mindset required are surprisingly similar.

    Both domains demand:
    - Strategic thinking and problem-solving
    - Deep understanding of complex systems
    - Ability to adapt and learn continuously
    - Focus on impact and outcomes

    The discipline and structured approach required for UPSC preparation directly translated into my product management methodology.`,
    date: '2024-03-10',
    category: 'Personal Growth',
    readTime: '7 min',
    author: {
      name: 'Adarsh Agrahari',
      avatar: 'https://adplist-bucket.s3.amazonaws.com/media/profile_photos/8d4b90ae840e48c1bf6575d2575a48d4CEja9.webp'
    },
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'art-of-product-mentorship',
    title: 'The Art of Product Mentorship',
    excerpt: 'Insights from mentoring 800+ aspiring product managers and leaders.',
    content: `After mentoring hundreds of aspiring product managers, I've learned that great product leadership isn't just about frameworks and methodologies.

    Key insights:
    1. The importance of first principles thinking
    2. Building empathy with users and stakeholders
    3. Balancing data with intuition
    4. Leading with vision while staying grounded in execution

    Success in product management comes from a combination of structured thinking and creative problem-solving.`,
    date: '2024-03-05',
    category: 'Team Building',
    readTime: '6 min',
    author: {
      name: 'Adarsh Agrahari',
      avatar: 'https://adplist-bucket.s3.amazonaws.com/media/profile_photos/8d4b90ae840e48c1bf6575d2575a48d4CEja9.webp'
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
  }
];