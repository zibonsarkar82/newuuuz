// Sample news data
const newsData = [
  {
    id: 1,
    title: "Major Earthquake Hits Region",
    image: "https://via.placeholder.com/600x400",
    content: "A powerful earthquake has struck the region, causing widespread damage. Rescue operations are underway, and authorities are assessing the impact."
  },
  {
    id: 2,
    title: "Election Results Announced",
    image: "https://via.placeholder.com/600x400",
    content: "The final results of the national elections have been declared. The winning party has promised to focus on economic growth and social welfare."
  },
  {
    id: 3,
    title: "New COVID Variant Detected",
    image: "https://via.placeholder.com/600x400",
    content: "Scientists have identified a new variant of the COVID-19 virus. Health officials are urging the public to remain cautious and get vaccinated."
  },
  {
    id: 4,
    title: "Stock Market Hits Record High",
    image: "https://via.placeholder.com/600x400",
    content: "The stock market has reached an all-time high this week. Analysts attribute the surge to strong corporate earnings and positive economic indicators."
  },
  {
    id: 5,
    title: "Climate Summit Concludes",
    image: "https://via.placeholder.com/600x400",
    content: "Global leaders have agreed on new measures to combat climate change. The summit focused on reducing carbon emissions and promoting renewable energy."
  },
  {
    id: 6,
    title: "Tech Giant Launches New Product",
    image: "https://via.placeholder.com/600x400",
    content: "A leading tech company has unveiled its latest innovation. The new product promises to revolutionize the way we interact with technology."
  },
  {
    id: 7,
    title: "Sports Team Wins Championship",
    image: "https://via.placeholder.com/600x400",
    content: "The local team has won the national championship title. Fans are celebrating the historic victory across the city."
  },
  {
    id: 8,
    title: "New Education Policy Announced",
    image: "https://via.placeholder.com/600x400",
    content: "The government has introduced a new policy for schools and colleges. The policy aims to improve access to quality education for all students."
  },
  {
    id: 9,
    title: "Celebrity Wedding Breaks the Internet",
    image: "https://via.placeholder.com/600x400",
    content: "Fans are buzzing about the lavish wedding of a famous celebrity. The event was attended by top stars and featured stunning performances."
  },
  {
    id: 10,
    title: "Space Mission Successfully Launched",
    image: "https://via.placeholder.com/600x400",
    content: "A new space mission has been launched to explore distant planets. Scientists hope to gather valuable data about the universe."
  }
];

// Get the news ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const newsId = urlParams.get('id');

// Find the news item in the data
const newsItem = newsData.find(item => item.id === parseInt(newsId));

// Display the news details
if (newsItem) {
  document.getElementById('news-title').textContent = newsItem.title;
  document.getElementById('news-image').src = newsItem.image;
  document.getElementById('news-content').textContent = newsItem.content;
} else {
  document.getElementById('news-title').textContent = "News Not Found";
  document.getElementById('news-content').textContent = "The requested news item could not be found.";
}
