"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface AudioAnalyzerState {
  isPlaying: boolean;
  frequencyData: Uint8Array | null;
  averageFrequency: number;
  bassLevel: number;
  midLevel: number;
  highLevel: number;
}

interface UseAudioAnalyzerReturn extends AudioAnalyzerState {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  setVolume: (volume: number) => void;
}

export function useAudioAnalyzer(): UseAudioAnalyzerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isAnalyzingRef = useRef(false);

  const [state, setState] = useState<AudioAnalyzerState>({
    isPlaying: false,
    frequencyData: null,
    averageFrequency: 0,
    bassLevel: 0,
    midLevel: 0,
    highLevel: 0,
  });

  const initializeAudioContext = useCallback(() => {
    if (!audioRef.current || audioContextRef.current) return;

    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const analyzer = audioContext.createAnalyser();
    analyzer.fftSize = 256;
    analyzer.smoothingTimeConstant = 0.8;

    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyzer);
    analyzer.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyzerRef.current = analyzer;
    sourceRef.current = source;
  }, []);

  // Use useEffect for animation loop
  useEffect(() => {
    const runAnalysis = () => {
      if (!isAnalyzingRef.current || !analyzerRef.current) return;

      const bufferLength = analyzerRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyzerRef.current.getByteFrequencyData(dataArray);

      const bassEnd = Math.floor(bufferLength * 0.1);
      const midEnd = Math.floor(bufferLength * 0.5);

      let bassSum = 0;
      let midSum = 0;
      let highSum = 0;
      let total = 0;

      for (let i = 0; i < bufferLength; i++) {
        total += dataArray[i];
        if (i < bassEnd) {
          bassSum += dataArray[i];
        } else if (i < midEnd) {
          midSum += dataArray[i];
        } else {
          highSum += dataArray[i];
        }
      }

      setState((prev) => ({
        ...prev,
        frequencyData: dataArray,
        averageFrequency: total / bufferLength / 255,
        bassLevel: bassSum / bassEnd / 255,
        midLevel: midSum / (midEnd - bassEnd) / 255,
        highLevel: highSum / (bufferLength - midEnd) / 255,
      }));

      animationFrameRef.current = requestAnimationFrame(runAnalysis);
    };

    if (state.isPlaying) {
      isAnalyzingRef.current = true;
      runAnalysis();
    } else {
      isAnalyzingRef.current = false;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [state.isPlaying]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;

    initializeAudioContext();

    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }

    try {
      await audioRef.current.play();
      setState((prev) => ({ ...prev, isPlaying: true }));
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  }, [initializeAudioContext]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setState((prev) => ({ ...prev, isPlaying: false }));

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return {
    audioRef,
    ...state,
    togglePlay,
    play,
    pause,
    setVolume,
  };
}
