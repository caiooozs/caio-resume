import useYoutubeViewModel from "./Youtube.viewmodel";
export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
};

export type YoutubeViewProps = ReturnType<typeof useYoutubeViewModel>;
