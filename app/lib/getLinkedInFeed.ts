import Parser from "rss-parser";
import NodeCache from "node-cache";

const parser = new Parser();
const cache = new NodeCache({ stdTTL: 3600 }); // 1h de cache

export async function getLinkedInFeed() {
  const cached = cache.get("linkedin_feed");
  if (cached) return cached;

  const feed = await parser.parseURL(
    "https://rss.app/feeds/yLnJFWaEe6zY8Tpw.xml"
  );

  const items = feed.items.slice(0, 9).map((item) => ({
    title: item.title,
    link: item.link,
    content: item.contentSnippet,
    pubDate: item.pubDate,
    image:
      item.enclosure?.url ||
      item.thumbnail ||
      null,
  }));

  cache.set("linkedin_feed", items);
  return items;
}
