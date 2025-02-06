// Sample blog data
const blogData = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    image: "https://via.placeholder.com/600x400",
    content: "Artificial Intelligence (AI) is no longer a futuristic concept; it's here and transforming industries. From healthcare to finance, AI is revolutionizing how we work and live. In this post, we explore the latest advancements in AI and what the future holds for this groundbreaking technology."
  },
  {
    id: 2,
    title: "Top Travel Destinations for 2023",
    image: "https://via.placeholder.com/600x400",
    content: "2023 is shaping up to be an exciting year for travel. From the pristine beaches of Bali to the historic streets of Rome, there's something for everyone. In this post, we highlight the top destinations you should consider for your next adventure."
  },
  {
    id: 3,
    title: "Healthy Eating Habits for a Better Life",
    image: "https://via.placeholder.com/600x400",
    content: "Eating healthy doesn't have to be complicated. By making small changes to your diet, you can improve your overall well-being. In this post, we share practical tips and recipes to help you get started on your journey to a healthier lifestyle."
  },
  {
    id: 4,
    title: "The Rise of Remote Work",
    image: "https://via.placeholder.com/600x400",
    content: "Remote work has become the new norm for many professionals. In this post, we discuss the benefits and challenges of working from home, as well as tips for staying productive and maintaining a healthy work-life balance."
  },
  {
    id: 5,
    title: "Sustainable Living: Tips for Beginners",
    image: "https://via.placeholder.com/600x400",
    content: "Living sustainably is easier than you think. In this post, we provide simple steps you can take to reduce your environmental footprint, from reducing waste to conserving energy. Start your journey to a more eco-friendly lifestyle today!"
  }
];

// Get the blog post ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Find the blog post in the data
const blogPost = blogData.find(item => item.id === parseInt(postId));

// Display the blog post details
if (blogPost) {
  document.getElementById('post-title').textContent = blogPost.title;
  document.getElementById('post-image').src = blogPost.image;
  document.getElementById('post-content').textContent = blogPost.content;
} else {
  document.getElementById('post-title').textContent = "Blog Post Not Found";
  document.getElementById('post-content').textContent = "The requested blog post could not be found.";
}
