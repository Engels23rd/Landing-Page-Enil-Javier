import Image from "next/image";
import perfil from "../media/fotos/perfil.png"
import p1 from "../media/proyectos/1.jpg";
import p2 from "../media/proyectos/2.jpg";
import p3 from "../media/proyectos/3.jpg";
import p4 from "../media/proyectos/4.jpeg";
import p5 from "../media/proyectos/5.jpeg";
import p6 from "../media/proyectos/6.jpeg";
import p7 from "../media/proyectos/7.jpeg";
import p8 from "../media/proyectos/8.jpeg";
import p9 from "../media/proyectos/9.jpeg";


const proyectos = [
  { imagen: p1, titulo: "Branding estratégico", categoria: "Branding" },
  { imagen: p2, titulo: "Beneficios del branding", categoria: "Campaña visual" },
  { imagen: p3, titulo: "Contenido automotriz", categoria: "Contenido visual" },
  { imagen: p4, titulo: "IA para proyectos", categoria: "Marketing digital" },
  { imagen: p5, titulo: "Estrategia de herramientas", categoria: "Contenido educativo" },
  { imagen: p6, titulo: "ChatGPT", categoria: "Comunicación digital" },
  { imagen: p7, titulo: "Gemini", categoria: "Contenido digital" },
  { imagen: p8, titulo: "Claude", categoria: "Redacción" },
  { imagen: p9, titulo: "Comparativa digital", categoria: "Estrategia" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
            {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center bg-[#050A30] px-5 py-10 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0EA5E9_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#0A4D8F_0%,transparent_30%)] opacity-40" />
        <div className="absolute left-[-120px] top-32 h-64 w-64 rounded-full bg-[#2BB3E8]/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-[#0A4D8F]/30 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <p className="mx-auto mb-4 inline-flex rounded-full border border-[#2BB3E8]/40 px-4 py-2 text-xs font-medium text-[#A7E8FF] sm:text-sm lg:mx-0">
              Branding • Comunicación • Presencia Digital
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Enil Javier
            </h1>

            <h2 className="mt-4 text-xl font-semibold text-[#A7E8FF] sm:text-2xl md:text-3xl">
              Comunicación Digital & Branding
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:mx-0">
              Ayudo a marcas y profesionales a construir una presencia clara,
              moderna y estratégica, conectando con su audiencia desde una imagen más
              profesional.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://wa.me/18093458526"
                target="_blank"
                className="mx-auto w-fit rounded-full bg-[#2BB3E8] px-8 py-4 text-center text-sm font-bold text-[#050A30] transition hover:bg-white sm:mx-0"
              >
                Contactar por WhatsApp
              </a>

              <a
                href="https://www.instagram.com/titerefuedr"
                target="_blank"
                className="mx-auto w-fit rounded-full border border-white/30 px-8 py-4 text-center text-sm font-bold text-white transition hover:border-[#2BB3E8] hover:text-[#A7E8FF] sm:mx-0"
              >
                Ver Instagram
              </a>
            </div>
          </div>

          {/* Imagen dinámica */}
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center sm:max-w-md lg:max-w-lg">
            <div className="absolute h-72 w-72 rounded-full bg-[#2BB3E8]/20 blur-3xl sm:h-96 sm:w-96" />

            <div className="relative rounded-[2rem] border border-[#2BB3E8]/40 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#EAF2F8]">
                <Image
                  src={perfil}
                  alt="Enil Javier"
                  className="h-[420px] w-full object-cover object-top sm:h-[520px]"
                  priority
                />
              </div>
            </div>

            {/* Etiqueta 1 */}
            <div className="absolute -left-3 bottom-12 rounded-r-2xl rounded-l-md bg-[#050A30] px-5 py-3 text-sm font-bold text-[#A7E8FF] shadow-xl border border-[#2BB3E8]/30">
              Estratégica
            </div>

            {/* Etiqueta 2 */}
            <div className="absolute -right-3 top-10 rounded-l-2xl rounded-r-md bg-[#2BB3E8] px-5 py-3 text-sm font-bold text-[#050A30] shadow-xl">
              Creativa
            </div>

            {/* Etiqueta 3 */}
            <div className="absolute -bottom-5 rounded-full border border-[#FFD38A]/30 bg-[#C68B2C] px-6 py-3 text-sm font-bold text-white shadow-xl">
              Liderazgo
            </div>
          </div>
          </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="bg-white px-5 py-16 text-[#050A30] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0A4D8F] sm:text-sm">
              Sobre mí
            </p>
            <h2 className="mx-auto max-w-xl text-2xl font-bold leading-tight sm:text-4xl lg:mx-0">
              Comunicación con intención, imagen con propósito.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600 text-center lg:text-left sm:text-lg">
            Soy Enil Javier, comunicadora digital con enfoque en branding,
            comunicación y presencia profesional. Trabajo con marcas y personas
            que desean proyectar una imagen más clara, moderna y estratégica.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="relative overflow-hidden bg-[#EAF2F8] px-5 py-16 text-[#050A30] sm:px-8 sm:py-20 lg:px-12">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#2BB3E8]/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-[#0A4D8F]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0A4D8F] sm:text-sm">
            Servicios
          </p>

          <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight sm:text-4xl">
            Soluciones para elevar tu marca y comunicar mejor.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3 sm:mt-10">
            {["Branding", "Comunicación", "Presencia Digital"].map(
              (service) => (
                <div
                  key={service}
                  className="group rounded-3xl border border-transparent bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#2BB3E8]/20 hover:shadow-[0_10px_40px_rgba(43,179,232,0.12)] sm:p-7"
                >
                  <h3 className="text-xl font-bold">{service}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Estrategias visuales y comunicacionales para proyectar una
                    imagen profesional y coherente.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="bg-[#050A30] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#A7E8FF] sm:text-sm">
            Proyectos
          </p>

          <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight sm:text-4xl">
            Proyectos y piezas visuales desarrolladas
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.titulo}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#2BB3E8]/30 bg-white/10 shadow-xl"
              >
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/90 via-[#050A30]/20 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A7E8FF]">
                    {proyecto.categoria}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {proyecto.titulo}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="relative overflow-hidden bg-white px-5 py-16 text-[#050A30] sm:px-8 sm:py-20 lg:px-12">
        <div className="absolute left-1/2 top-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#2BB3E8]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0A4D8F] sm:text-sm">
            Diferencial
          </p>

          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight sm:text-4xl">
            Calidad, eficiencia y creatividad en cada proyecto.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3 sm:mt-10">
            {["Calidad", "Eficiencia", "Creatividad"].map((item) => (
              <div
                  key={item}
                  className="rounded-3xl border border-transparent bg-[#EAF2F8] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#2BB3E8]/20 hover:shadow-[0_10px_35px_rgba(43,179,232,0.10)] sm:p-7">
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="relative overflow-hidden bg-[#EAF2F8] px-5 py-16 text-[#050A30] sm:px-8 sm:py-20 lg:px-12">
        <div className="absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-[#2BB3E8]/10 blur-3xl" />
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/50 bg-white/90 p-6 text-center shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0A4D8F] sm:text-sm">
            Contacto
          </p>

          <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
            ¿Lista para trabajar tu imagen profesional?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Conversemos sobre tu marca, tus ideas y cómo llevar tu presencia
            digital al siguiente nivel.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/18093458526"
              target="_blank"
              className="rounded-full bg-[#050A30] px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-[#0A4D8F]"
            >
              Escribeme por WhatsApp
            </a>

            <a
              href="mailto:eniljavier0000@gmail.com"
              className="rounded-full border border-[#050A30]/20 px-7 py-4 text-center text-sm font-bold transition hover:border-[#0A4D8F] hover:text-[#0A4D8F]"
            >
              Enviame un correo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050A30] px-5 py-8 text-center text-sm text-white/60">
        © 2026 Enil Javier. Desarrollado por Engels Urbano - KodeRD.
      </footer>
    </main>
  );
}