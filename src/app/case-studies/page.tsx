import Image from "next/image";
import { Button } from "@/components/ui/button";

const caseStudies = [
	{
		client: "Sleep Like A Baby",
		title: "Sklep e-commerce zwiększył sprzedaż o 40% w pierwszym kwartale współpracy",
		summary:
			"Sklep potrzebował popraw bramki płatniczej, nowych grafik produktowych, konfiguracja zakupów kursu oraz zooptymalizowania strony pod względem wydajności",
		highlights: [
			"Diagnoza błędu płatności i jego rozwiązanie",
			"Znaczne zmniejszenie ilości wtyczek na stronie",
			"Poprawa UX i UI ",
		],
		image: "/sleeplikeababy.jpg",
		link: "https://sleeplikeababy.eu/",

	},
	{
		client: "Rezydencja Gościnna",
		title: "Platforma kursowa gotowa w 10 tygodni",
		summary:
			"Zbudowaliśmy kompletną platformę e-learningową z obsługą płatności subskrypcyjnych, modułem gamifikacji oraz panelem raportowym.",
		highlights: [
			"Automatyzacja dodawania nowych kursów w oparciu o moduł CMS",
			"Integracja z narzędziami webinarowymi przez webhooki",
			"System certyfikatów i śledzenia postępów użytkowników",
		],
		image: "/rezydencjagoscinna.jpg",
		link: "https://rezydencjagoscinna.pl/"
	},
	{
		client: "Agata Przemęcka",
		title: "Aplikacja inwestycyjna B2B dla klientów premium",
		summary:
			"Stworzyliśmy bezpieczną platformę do zarządzania portfelem z raportami w czasie rzeczywistym oraz integracją z zewnętrznymi API banków.",
		highlights: [
			"Zgodność z RODO, PSD2 i podziałem uprawnień",
			"Dashboard analityczny z danymi w czasie rzeczywistym",
			"Automatyczne raporty PDF dla doradców i zarządu",
		],
		image: "/agata-przemecka.jpg",
		link: "https://agataprzemecka.pl/"
	},
	{
		client: "Balonowy świat",
		title: "Aplikacja inwestycyjna B2B dla klientów premium",
		summary:
			"Stworzyliśmy bezpieczną platformę do zarządzania portfelem z raportami w czasie rzeczywistym oraz integracją z zewnętrznymi API banków.",
		highlights: [
			"Zgodność z RODO, PSD2 i podziałem uprawnień",
			"Dashboard analityczny z danymi w czasie rzeczywistym",
			"Automatyczne raporty PDF dla doradców i zarządu",
		],
		image: "/balonowy-swiat.jpg",
		link: "https://balonowyswiat.biz/"
	}
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

	return (
		<div className="flex  min-h-screen flex-col gap-24 overflow-hidden bg-white text-foreground">
			<section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pt-28 text-center sm:pt-32 lg:pt-40">
				<div className="flex flex-col items-center gap-6">
					<span className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
						Case studies
					</span>
					<h1 className="text-3xl font-semibold grotesk sm:text-4xl lg:text-5xl">
						Realne wyniki i wzrost konwersji naszych klientów
					</h1>
					<p className="max-w-3xl text-base text-neutral-600 sm:text-lg">
						Poniżej znajdziesz wybrane case studies. <br/> Dowiedz się, jak nasze podejście do designu i developmentu rozwiązuje problemy realnych firm.
					</p>
				</div>
			</section>



			<section className="case-studies reduced-width flex flex-col items-center gap-14 pb-14" >
					{caseStudies.map((study) => (
						<article
							key={study.client}
							className="case-slide flex min-h-[50vh] w-full flex-shrink-0 flex-col rounded-xl justify-between gap-12 px-8 py-12 shadow-lg ring-1 ring-black/5 lg:w-[80vw] lg:max-w-[1920px] lg:flex-row lg:gap-16"
						>
							<div className="flex w-full flex-col gap-14 lg:w-1/2">
								<div className="flex flex-col gap-3 text-left">
									<span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
										{study.client}
									</span>
									<h3 className="text-2xl font-semibold grotesk sm:text-3xl lg:text-4xl">
										{study.title}
									</h3>
									<p className="text-base text-neutral-600 sm:text-lg">{study.summary}</p>
								<ul className="space-y-3 text-left">
									{study.highlights.map((highlight) => (
										<li key={highlight} className="flex items-start gap-3 text-sm text-neutral-600 sm:text-base">
											<span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900"></span>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
									</div>
								<div className="w-full pt-4 hidden md:block">
									<a href={study.link}>

									<Button className="light " >Sprawdź Stronę</Button>
									</a>
									</div>
							</div>
								<div className="flex w-full items-center justify-center lg:w-1/2">
									<div 
										className=" w-full max-w-xl overflow-hidden rounded-xl border border-black/5 bg-gray-50 relative"
									>
										<div className="w-full h-auto block will-change-transform">
										<Image
											src={"/case-studies" + study.image}
											alt={study.client}
											width={960}
											height={720}
											className="w-full h-auto"
										/>
										</div>
									</div>
								</div>
										<div className="flex justify-center md:hidden w-full">
									<a href={study.link}>
										<Button className="light">Sprawdź Stronę</Button>
									</a>
									</div>
						</article>
					))}
			</section>
{/* 
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
						<div
							key={step.title}
							className="rounded-[32px] px-6 py-10 text-left text-white shadow-[5px_5px_40px_rgba(0,0,0,0.5)]"
							style={{
								backgroundImage:
									"linear-gradient(-20deg,#ebebeb -80%,#000000 35%,#000000 60%,#ebebeb 180%)",
							}}
						>
							<h3 className="text-2xl font-semibold space-mono">{step.title}</h3>
							<p className="mt-4 text-base font-light text-neutral-200">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</section> */}
		</div>
	);
}
