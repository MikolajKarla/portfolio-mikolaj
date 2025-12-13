/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
	{
		client: "RetailX",
		title: "Sklep e-commerce zwiększył konwersję o 42%",
		summary:
			"Migracja legacy WooCommerce do nowoczesnej aplikacji headless. Wspólnie stworzyliśmy superszybki front na Next.js oraz elastyczne CMS oparte o Strapi.",
		highlights: [
			"Czas ładowania skrócony z 4.2s do 1.1s",
			"Rekomendacje produktowe personalizowane w czasie rzeczywistym",
			"Dwukierunkowa integracja z ERP i hurtowniami",
		],
		stats: [
			{ label: "Konwersja", value: "+42%" },
			{ label: "Średnia wartość koszyka", value: "+27%" },
			{ label: "Technologie", value: "Next.js • Strapi • Stripe" },
		],
		image: "/Section2MainPage.svg",
	},
	{
		client: "EduSpark",
		title: "Platforma kursowa gotowa w 10 tygodni",
		summary:
			"Zbudowaliśmy kompletną platformę e-learningową z obsługą płatności subskrypcyjnych, modułem gamifikacji oraz panelem raportowym.",
		highlights: [
			"Automatyzacja dodawania nowych kursów w oparciu o moduł CMS",
			"Integracja z narzędziami webinarowymi przez webhooki",
			"System certyfikatów i śledzenia postępów użytkowników",
		],
		stats: [
			{ label: "Czas budowy MVP", value: "10 tyg." },
			{ label: "Aktywni użytkownicy", value: "6 200+" },
			{ label: "Technologie", value: "Next.js • Supabase • Stripe" },
		],
		image: "/Section1MainPage.svg",
	},
	{
		client: "Nova Wealth",
		title: "Aplikacja inwestycyjna B2B dla klientów premium",
		summary:
			"Stworzyliśmy bezpieczną platformę do zarządzania portfelem z raportami w czasie rzeczywistym oraz integracją z zewnętrznymi API banków.",
		highlights: [
			"Zgodność z RODO, PSD2 i podziałem uprawnień",
			"Dashboard analityczny z danymi w czasie rzeczywistym",
			"Automatyczne raporty PDF dla doradców i zarządu",
		],
		stats: [
			{ label: "Czas do wersji 1.0", value: "14 tyg." },
			{ label: "Satysfakcja klientów", value: "4.9/5" },
			{ label: "Technologie", value: "Next.js • NestJS • PostgreSQL" },
		],
		image: "/Section3MainPage.svg",
	},
];

const processSteps = [
	{
		title: "Discovery & strategia",
		description:
			"Analizujemy cele biznesowe, definiujemy metryki sukcesu i projektujemy roadmapę produktu, by od początku dowozić wartość.",
	},
	{
		title: "Warsztaty produktowe",
		description:
			"Wspólnie z zespołem klienta dopracowujemy doświadczenie użytkownika, makiety i architekturę informacji.",
	},
	{
		title: "Iteracyjne wdrażanie",
		description:
			"Budujemy w sprintach, pokazujemy kolejne releasy na środowisku testowym i reagujemy na feedback w locie.",
	},
	{
		title: "Optymalizacja i wzrost",
		description:
			"Monitorujemy wyniki, prowadzimy eksperymenty A/B i rozwijamy produkt w oparciu o dane oraz insighty z rynku.",
	},
];

export default function CaseStudiesPage() {
	const highlightRef = useRef<HTMLHeadingElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const metricsRef = useRef<HTMLDivElement | null>(null);
	const [highlightIndex, setHighlightIndex] = useState(0);



	useGSAP(
		() => {
			const el = highlightRef.current;
			if (!el) {
				return undefined;
			}

			return gsap.fromTo(
				el,
				{ y: 32, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
			);
		},
		{ dependencies: [highlightIndex], scope: highlightRef },
	);

	useGSAP(
		() => {
			const containerEl = containerRef.current;
			if (!containerEl) {
				return undefined;
			}

			const slides = containerEl.querySelectorAll<HTMLElement>(".case-slide");
			if (slides.length <= 1) {
				return undefined;
			}

			return gsap.to(slides, {
				xPercent: -100 * (slides.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: containerEl,
					start: "top top",
					end: () => `+=${containerEl.scrollWidth - containerEl.clientWidth}`,
					scrub: 0.6,
					pin: true,
					anticipatePin: 1,
					pinSpacing: true,
				},
			});
		},
		{ scope: containerRef },
	);

	useGSAP(
		() => {
			const selector = gsap.utils.selector(metricsRef);
			const metricItems = selector("[data-metric]");

			if (metricItems.length === 0) {
				return undefined;
			}

			return gsap.from(metricItems, {
				opacity: 0,
				y: 40,
				duration: 0.6,
				ease: "power3.out",
				stagger: 0.15,
				scrollTrigger: {
					trigger: metricsRef.current,
					start: "top 80%",
				},
			});
		},
		{ scope: metricsRef },
	);

	return (
		<div className="flex min-h-screen flex-col gap-24 overflow-hidden bg-white pb-24 text-foreground">
			<section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pt-28 text-center sm:pt-32 lg:pt-40">
				<div className="flex flex-col items-center gap-6">
					<span className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
						Case studies
					</span>
					<h1 className="text-3xl font-semibold grotesk sm:text-4xl lg:text-5xl">
						Projekty, które dowożą realne wyniki
					</h1>
				
					<p className="max-w-3xl text-base text-neutral-600 sm:text-lg">
						Tworzymy produkty cyfrowe oparte o dane i strategię. Każdy projekt to proces, który łączy design, technologię i cele biznesowe klienta.
					</p>
				</div>
			</section>

			<section ref={metricsRef} className="mx-auto w-full max-w-5xl px-6">
				<div className="grid gap-6 md:grid-cols-3">
					
				</div>
			</section>

			<section className="">
				<div
					ref={containerRef}
					className="case-scroll  flex flex-row gap-8 overflow-hidden px-6 py-10 lg:px-16"
				>
					{caseStudies.map((study) => (
						<article
							key={study.client}
							className="case-slide flex min-h-[70vh] w-full flex-shrink-0 flex-col justify-between gap-12 rounded-[40px] bg-neutral-50 px-8 py-12 shadow-lg ring-1 ring-black/5 lg:w-[80vw] lg:flex-row lg:gap-16"
						>
							<div className="flex w-full flex-col gap-8 lg:w-1/2">
								<div className="flex flex-col gap-3 text-left">
									<span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
										{study.client}
									</span>
									<h3 className="text-2xl font-semibold grotesk sm:text-3xl lg:text-4xl">
										{study.title}
									</h3>
									<p className="text-base text-neutral-600 sm:text-lg">{study.summary}</p>
								</div>
								<ul className="space-y-3 text-left">
									{study.highlights.map((highlight) => (
										<li key={highlight} className="flex items-start gap-3 text-sm text-neutral-600 sm:text-base">
											<span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900"></span>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
								<div className="grid gap-3 sm:grid-cols-3">
									{study.stats.map((stat) => (
										<div
											key={stat.label}
											className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-left"
										>
											<p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
												{stat.label}
											</p>
											<p className="mt-2 text-base font-semibold text-neutral-900">
												{stat.value}
											</p>
										</div>
									))}
								</div>
							</div>
							<div className="flex w-full items-center justify-center lg:w-1/2">
								<img
									src={study.image}
									alt={study.client}
									className="h-auto w-full max-w-xl"
									loading="lazy"
								/>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
				<div className="text-center">
					<h2 className="text-3xl font-semibold grotesk sm:text-4xl lg:text-5xl">
						Jak pracujemy nad Twoim projektem
					</h2>
					<p className="mt-4 text-base text-neutral-600 sm:text-lg">
						Każdy projekt zaczynamy od strategii i kończymy na optymalizacji wyników. Dzięki temu dowozimy cele biznesowe zamiast listy funkcji.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-4">
					{processSteps.map((step) => (
						<div key={step.title} className="box rounded-[32px] px-6 py-10 text-left text-white">
							<h3 className="text-2xl font-semibold space-mono">{step.title}</h3>
							<p className="mt-4 text-base font-light text-neutral-200">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
