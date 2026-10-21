// Photo galleries on project pages. Each key is a folder in src/assets/work/; photos show in this order.
// Captions double as alt text. A photo added to a folder but not listed here is not shown.
export type Photo = { file: string; en: string; es: string };

export const galleries: Record<string, Photo[]> = {
  explorigins: [
    { file: 'first-fall-meeting.jpg', en: 'The first meeting of the fall: “Launch Point: Welcome to ExplOrigins.”', es: 'La primera reunión del otoño: “Launch Point: Welcome to ExplOrigins”.' },
    { file: 'elevator-pitch.jpg', en: 'Hello World!: Share Your Science Stories, an elevator pitch workshop.', es: 'Hello World!: Share Your Science Stories, un taller para presentar tu investigación en pocas palabras.' },
    { file: 'passport-to-other-worlds.jpg', en: 'Passport to Other Worlds, a showcase of places on Earth that stand in for other worlds.', es: 'Passport to Other Worlds, una muestra de lugares en la Tierra que se parecen a otros mundos.' },
    { file: 'career-panel-flyer.jpeg', en: 'Flyer for Horizons Beyond Earth, a career panel with Georgia Tech alumni in astrobiology and space exploration.', es: 'Afiche de Horizons Beyond Earth, un panel de carreras con exalumnos de Georgia Tech en astrobiología y exploración espacial.' },
    { file: 'career-panel.jpg', en: 'Horizons Beyond Earth, with the panelists joining virtually.', es: 'Horizons Beyond Earth, con los panelistas conectados de forma virtual.' },
    { file: 'science-to-policy-flyer.png', en: 'Flyer for Science to Policy: Communicating Research for Impact, a workshop with Brittany Webster of the American Geophysical Union.', es: 'Afiche de Science to Policy: Communicating Research for Impact, un taller con Brittany Webster de la American Geophysical Union.' },
    { file: 'celebrate-steam.jpg', en: 'Hands-on astrobiology for young visitors at Celebrate STEAM 2026, part of the Atlanta Science Festival.', es: 'Astrobiología práctica para visitantes jóvenes en Celebrate STEAM 2026, parte del Atlanta Science Festival.' },
    { file: 'celebrate-steam-2.jpg', en: 'The ExplOrigins table at Celebrate STEAM 2026.', es: 'La mesa de ExplOrigins en Celebrate STEAM 2026.' },
    { file: 'arabia-mountain-visit.jpg', en: 'The field trip to Arabia Mountain.', es: 'La excursión a Arabia Mountain.' },
    { file: 'happy-b-earth-day.jpg', en: 'Happy B-Earth Day: From Earth to What’s Next.', es: 'Happy B-Earth Day: From Earth to What’s Next.' },
    { file: 'sae-school-outreach.JPG', en: 'Outreach at The SAE School.', es: 'Actividad de divulgación en The SAE School.' },
  ],
  'astrobio-fellows': [
    { file: 'fellows.jpg', en: 'Georgia Tech Astrobiology Fellows.', es: 'Becarios de Astrobiología de Georgia Tech.' },
    { file: 'virtual-special-seminar.JPG', en: 'Flyer for a virtual special seminar, Solar System Science from the James Webb Space Telescope, with Dr. Naomi Rowe-Gurney.', es: 'Afiche de un seminario especial virtual, Solar System Science from the James Webb Space Telescope, con la Dra. Naomi Rowe-Gurney.' },
    { file: 'distinguished-lecture-flyer.JPG', en: 'Flyer for the Fall 2023 Georgia Tech Astrobiology Distinguished Lecture with Dr. José Carlos Aponte of NASA Goddard.', es: 'Afiche de la Distinguished Lecture de Astrobiología de Georgia Tech del otoño 2023, con el Dr. José Carlos Aponte de NASA Goddard.' },
    { file: 'fall-distinguished-lecture.JPG', en: 'The Fall 2023 Distinguished Lecture.', es: 'La Distinguished Lecture del otoño 2023.' },
    { file: 'colloquium-flyer.JPG', en: 'Flyer for the 2024 ExplOrigins Colloquium, From Cosmos to Microcosm: Traversing Small Bodies to Icy Frontiers.', es: 'Afiche del ExplOrigins Colloquium 2024, From Cosmos to Microcosm: Traversing Small Bodies to Icy Frontiers.' },
    { file: 'colloquium-poster-session.JPG', en: 'The colloquium’s poster session.', es: 'La sesión de afiches del coloquio.' },
    { file: 'gt-astrobiology-community.JPG', en: 'Georgia Tech’s astrobiology community.', es: 'La comunidad de astrobiología de Georgia Tech.' },
  ],
  cire2n: [
    { file: 'urban-community-center-capetillo.JPG', en: 'An activity on self-assembled polymers for targeted drug delivery at the Urban, Community and Business Action Center of Capetillo.', es: 'Una actividad sobre polímeros autoensamblados para la entrega dirigida de medicamentos en el Centro de Acción Urbana, Comunitaria y Empresarial de Capetillo.' },
    { file: 'caras-con-causa-vietnam.JPG', en: 'Science outreach with Caras con Causa in the Vietnam community of Cataño.', es: 'Divulgación científica con Caras con Causa en la comunidad Vietnam de Cataño.' },
    { file: 'nanodays-2019.JPG', en: 'The CIRE²N team at Nanodays 2019.', es: 'El equipo de CIRE²N en Nanodays 2019.' },
    { file: 'nanodays-2019-2.JPG', en: 'Hands-on nanoscience at Nanodays 2019.', es: 'Nanociencia práctica en Nanodays 2019.' },
    { file: 'molecular-science-research-center-open-house.JPG', en: 'The Molecular Sciences Research Center’s Open House.', es: 'La casa abierta del Molecular Sciences Research Center.' },
  ],
  logras: [
    { file: 'trivia.jpg', en: 'Hispanic and Latinx Heritage Month trivia.', es: 'Trivia del Mes de la Herencia Hispana y Latinx.' },
    { file: 'taste-of-latin-america.jpg', en: 'Sack races at Taste of Latin America.', es: 'Carreras de sacos en Taste of Latin America.' },
    { file: 'end-of-fall-event.jpg', en: 'The end-of-fall gathering.', es: 'El encuentro de fin de otoño.' },
    { file: 'end-of-spring-event.JPG', en: 'The end-of-spring gathering.', es: 'El encuentro de fin de primavera.' },
  ],
  ecoexploratorio: [
    { file: 'planeta-digital-2016.JPG', en: 'Planeta Digital 2016: the Rainbow Walking Water Experiment.', es: 'Planeta Digital 2016: el experimento del agua que camina en arcoíris (Rainbow Walking Water Experiment).' },
    { file: 'planeta-digital-2017.jpg', en: 'Planeta Digital 2017: a young visitor looking at phytoplankton under the microscope.', es: 'Planeta Digital 2017: una visitante joven observando fitoplancton bajo el microscopio.' },
    { file: 'science-live-2017.JPG', en: 'Presenting Contaminación Hídrica at SCIENCE LIVE!, part of Planeta Digital 2017. Photo: Wilfred Miranda.', es: 'Presentando Contaminación Hídrica en SCIENCE LIVE!, parte de Planeta Digital 2017. Foto: Wilfred Miranda.' },
    { file: 'science-live-2.JPG', en: 'Taking questions from young visitors at SCIENCE LIVE! Photo: Wilfred Miranda.', es: 'Respondiendo preguntas de visitantes jóvenes en SCIENCE LIVE! Foto: Wilfred Miranda.' },
  ],
  ciasu: [
    { file: 'student-organization-fair.JPG', en: 'Recruiting new members at the student organization fair.', es: 'Reclutando miembros en la feria de organizaciones estudiantiles.' },
    { file: 'space-exploration-festival.jpg', en: 'The CIASU table at the First Puerto Rican Space Exploration Festival.', es: 'La mesa de CIASU en el Primer Festival de Exploración Espacial de Puerto Rico.' },
    { file: 'collective-spotify-playlist.jpg', en: 'Per aspera ad astra, a collective space-themed playlist.', es: 'Per aspera ad astra, una lista de canciones espaciales hecha en colectivo.' },
    { file: 'micrometeorite-hunt-1.JPG', en: 'Searching for micrometeorites under the microscope.', es: 'Buscando micrometeoritos bajo el microscopio.' },
    { file: 'micrometeorite-hunt-2.JPG', en: 'A micrometeorite candidate, seen through the microscope.', es: 'Un posible micrometeorito, visto a través del microscopio.' },
    { file: 'arecibo-observatory-visit-1.JPG', en: 'Visiting the Arecibo Observatory.', es: 'De visita en el Observatorio de Arecibo.' },
    { file: 'arecibo-observatory-visit-2.jpg', en: 'At the Arecibo Observatory, with the radio telescope’s platform behind us.', es: 'En el Observatorio de Arecibo, con la plataforma del radiotelescopio detrás.' },
  ],
};
