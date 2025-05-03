import React from 'react';
import './Blog.css';

const featuredArticles = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    tags: ['EMPLOYEE SPOTLIGHT', 'SUSTAINABILITY'],
    title: 'SUSTAINABILITY STARTS',
    date: 'Apr 28, 2025',
    excerpt: 'Discover how FreshBite is leading the way in sustainable food delivery and making a difference in our communities.'
  },
  {
    image: 'https://images.unsplash.com/photo-1739440426771-8265663f8899?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFzcyUyMGZvb2QlMjBzZXJ2aW5nfGVufDB8fDB8fHww',
    tags: ['FOOD INSECURITY'],
    title: 'TWO MILLION MEALS SERVED THROUGH MEALS WITH MEANING: OUR VETERAN FEEDING VETERAN PROGRAM',
    date: 'Apr 28, 2025',
    excerpt: 'Our program has provided over two million meals to veterans in need, fostering community and support.'
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    tags: ['SUSTAINABILITY'],
    title: 'CELEBRATING EARTH MONTH: HOW FRESHBITE IS REDUCING CARBON EMISSIONS',
    date: 'Apr 23, 2025',
    excerpt: "In honor of Earth Month, we're proud to share our latest sustainability milestones and green initiatives."
  }
];

const communityStories = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    user: 'bdanielle1285',
    story: 'My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!'
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    user: 'lilpepthekelpie',
    story: "I'm helping out 🐶 #masterchef #bestboy"
  },
  {
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D',
    user: 'mandi14eid',
    story: 'Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!'
  },
  {
    image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D',
    user: 'our_lovely_stride',
    story: "We had a cooking class yesterday and we had such an amazing time. They had such a great time working as a team and I can't wait for our next meal!"
  }
];

const Blog = () => (
  <div className="blog-page">
    <section className="blog-featured">
      <div className="blog-featured-bg"></div>
      <h2 className="blog-section-title">FEATURED ARTICLES</h2>
      <div className="blog-cards">
        {featuredArticles.map((article, idx) => (
          <div className="blog-card" key={idx}>
            <img src={article.image} alt={article.title} className="blog-card-img" />
            <div className="blog-card-tags">
              {article.tags.map((tag, i) => (
                <span className="blog-card-tag" key={i}>{tag}</span>
              ))}
            </div>
            <h3 className="blog-card-title">{article.title}</h3>
            <div className="blog-card-date">{article.date}</div>
            <p className="blog-card-excerpt">{article.excerpt}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="blog-community">
      <h2 className="blog-section-title">Cook it. Love it. Tag it <span className="blog-hashtag">#MyFreshBiteStory</span></h2>
      <p className="blog-community-sub">Follow us on Instagram @freshbite</p>
      <div className="blog-community-cards">
        {communityStories.map((story, idx) => (
          <div className="community-card" key={idx}>
            <img src={story.image} alt={story.user} className="community-card-img" />
            <div className="community-card-user">{story.user}</div>
            <div className="community-card-story">{story.story}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Blog; 