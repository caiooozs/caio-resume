import { XMLParser } from "fast-xml-parser";
import { Video } from "./Youtube.model";

export default function useYoutubeViewModel() {
  async function getVideos(): Promise<Video[]> {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${process.env.YOUTUBE_CHANNEL_ID}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) return [];

    const xml = await res.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });

    const data = parser.parse(xml);
    const entries = data.feed?.entry ?? [];

    // Se só tiver 1 vídeo, o parser retorna objeto em vez de array — normaliza
    const entryList = Array.isArray(entries) ? entries : [entries];

    return entryList.slice(0, 6).map((entry: any) => ({
      id: entry["yt:videoId"],
      title: entry.title,
      thumbnail: entry["media:group"]["media:thumbnail"]["@_url"],
      publishedAt: entry.published,
      url: entry.link["@_href"],
    }));
  }

  return {
    getVideos,
  };
}
