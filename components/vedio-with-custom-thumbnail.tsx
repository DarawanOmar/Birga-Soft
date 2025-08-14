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
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import posterLight from "@/public/light.webp"; // Adjust the path as necessary
import posterDark from "@/public/dark.webp"; // Adjust the path as necessary
import { useTheme } from "next-themes";

const VedioSystemWithCustomThumbnail = () => {
  const { theme } = useTheme();
  const t = useTranslations("intro");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="max-w-5xl mx-auto z-10 relative scroll-mt-20 px-6"
      id="video"
    >
      <h1 className="text-2xl font-bold mb-4 mx-auto max-w-max">
        {t("vedio")}
      </h1>

      <div className="relative overflow-hidden rounded-xl">
        {!isPlaying ? (
          <div
            className="relative cursor-pointer group"
            onClick={handlePlayClick}
          >
            <Image
              src="/light.webp"
              alt="Video Thumbnail"
              width={1200}
              height={675}
              className="w-full h-auto object-cover block dark:hidden"
            />
            <Image
              src="/dark.webp"
              alt="Video Thumbnail"
              width={1200}
              height={675}
              className="w-full h-auto object-cover hidden dark:block"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur group-hover:bg-black/20 transition-all duration-500">
              <div className="bg-white/90 rounded-full p-4 group-hover:scale-150 transition-transform group-hover:bg-primary">
                <Play
                  className="w-8 h-8 text-black  group-hover:text-white ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        ) : (
          <VideoPlayer className="overflow-hidden rounded-xl" dir="ltr">
            <VideoPlayerContent
              crossOrigin=""
              preload="auto"
              autoPlay={isPlaying}
              tabIndex={0}
              poster={theme === "dark" ? posterDark.src : posterLight.src}
              slot="media"
              src="https://0z2nd3qqcw.ufs.sh/f/TBCLLQXRstn0y51bgg37F2PATULIRolS18JfW4ziMue6Cxkn"
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
        )}
      </div>
    </div>
  );
};

export default VedioSystemWithCustomThumbnail;
