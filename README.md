STMPD – What We Do Hover PoC

Deze Proof of Concept toont een interactieve “What We Do” sectie voor STMPD Records.
Wanneer een gebruiker over een service hovert, verschijnt een bijbehorende afbeelding die de muis volgt met een subtiele 3D-animatie. Het actieve item komt daarbij visueel boven de afbeelding te liggen.
De PoC is bedoeld om het concept, de interactie en de visuele hiërarchie te valideren voordat dit naar productie wordt doorontwikkeld.

Functionaliteit
    •	Hover over een service toont een bijbehorende afbeelding
    •	Afbeelding volgt de cursor met een lichte 3D-rotatie
    •	Actieve service staat visueel boven de afbeelding
    •	Animaties verlopen vloeiend via GSAP

Technologie
    •	Next.js (App Router)
    •	React + TypeScript
    •	GSAP voor animaties
    •	CSS Modules voor component-styling
    •	Tailwind CSS voor layout en utility classes

Project starten
Installeer dependencies:
npm install
Start de development server:
npm run dev
Open daarna in je browser:
http://localhost:3000

Structuur
De PoC staat volledig in de app map en bestaat hoofdzakelijk uit:
    •	page.tsx → de interactieve What We Do component
    •	whatwedo.module.css → styling van de sectie
    •	globals.css → globale layout & achtergrond
Alle interactieve logica en animaties staan direct in de pagina zodat de PoC makkelijk overdraagbaar is.

Overdraagbaarheid
De code is voorzien van duidelijke comments per codeblok zodat developers snel begrijpen:
    •	waar animaties worden aangestuurd
    •	hoe hover-states werken
    •	hoe de cursor-afbeelding wordt gepositioneerd
Hierdoor kan deze PoC direct als basis dienen voor implementatie in een productie-omgeving.

Doel
Deze PoC is niet bedoeld als eindproduct, maar als valideerbare ontwerp- en interactiebasis voor de STMPD website.