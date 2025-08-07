"use client";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/kibo-ui/video-player";
import { useTranslations } from "next-intl";
const VedioSystem = () => {
  const t = useTranslations("intro");
  return (
    <div
      className="max-w-5xl mx-auto z-10 relative scroll-mt-20 px-6"
      id="video"
    >
      <h1 className="text-2xl font-bold mb-4 mx-auto max-w-max">
        {t("vedio")}
      </h1>
      <VideoPlayer className="overflow-hidden rounded-xl" dir="ltr">
        <VideoPlayerContent
          crossOrigin=""
          muted
          preload="auto"
          poster={
            "https://0z2nd3qqcw.ufs.sh/f/TBCLLQXRstn0porFqnBeCRUOLtrEBWKN6x1QvMH8lDdTc4im"
          }
          tabIndex={0}
          slot="media"
          src="https://0z2nd3qqcw.ufs.sh/f/TBCLLQXRstn02u11CYjVtWuHMkBYbXaG8iemn2pOf97A3KoD"
        />
        <VideoPlayerControlBar>
          <VideoPlayerPlayButton />
          <VideoPlayerSeekBackwardButton />
          <VideoPlayerSeekForwardButton />
          <VideoPlayerTimeRange />
          <VideoPlayerTimeDisplay showDuration />
          <VideoPlayerMuteButton />
          <VideoPlayerVolumeRange />
        </VideoPlayerControlBar>
      </VideoPlayer>
    </div>
  );
};
export default VedioSystem;
