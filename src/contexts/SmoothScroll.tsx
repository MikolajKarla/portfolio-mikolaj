"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScroll() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			// You can tweak options as needed
			smoothWheel: true,
			// lerp: 0.1,
		});

		// Sync GSAP ScrollTrigger with Lenis
		const onScroll = () => ScrollTrigger.update();
		lenis.on("scroll", onScroll);

		let rafId: number | null = null;
		const raf = (time: number) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);

		return () => {
			if (rafId) cancelAnimationFrame(rafId);
			lenis.off("scroll", onScroll);
			lenis.destroy();
			// Do not globally kill ScrollTrigger; other components may use it
			// ScrollTrigger.kill();
		};
	}, []);

	return null;
}