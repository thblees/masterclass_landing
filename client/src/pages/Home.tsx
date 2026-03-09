import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Youtube, Check } from "lucide-react";
import { toast } from "sonner";

/**
 * Masterclass Landing Page - Minimalist Professional Design
 * 
 * Design Philosophy:
 * - Swiss Modernism with clear hierarchy and generous whitespace
 * - Deep teal (#0d7377) accents for CTAs and highlights
 * - Playfair Display for elegant headers, Inter for body text
 * - Single-column layout for affiliate program clarity
 * - Subtle animations and smooth transitions
 */

const courses = [
  {
    id: "656977",
    name: "Masterclass Bitcoin, NFTs und Krypto Assets",
    description: "Lerne alles über Kryptowährungen, NFTs und digitale Assets",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-bitcoin.jpg",
  },
  {
    id: "656974",
    name: "Masterclass Aktien und ETFs",
    description: "Investieren in Aktien und ETFs verstehen und umsetzen",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-aktien-etfs.jpg",
  },
  {
    id: "656973",
    name: "Masterclass Swingtrading",
    description: "Professionelle Swingtrading-Strategien für Anfänger und Fortgeschrittene",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-swingtrading.jpg",
  },
  {
    id: "656947",
    name: "Masterclass Dein Tradingplan",
    description: "Entwickle deinen persönlichen Tradingplan und Strategie",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-tradingplan.jpg",
  },
  {
    id: "656945",
    name: "Masterclass Technische Analyse",
    description: "Meistere die technische Analyse für erfolgreiche Trades",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-technische-analyse.jpg",
  },
  {
    id: "656942",
    name: "Masterclass Trading und Investieren",
    description: "Umfassendes Wissen über Trading und langfristige Investitionen",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-trading-investieren.jpg",
  },
  {
    id: "655817",
    name: "Masterclass Optionen für Fortgeschrittene",
    description: "Fortgeschrittene Optionsstrategien und Techniken",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-optionen-fortgeschrittene.jpg",
  },
  {
    id: "655552",
    name: "Masterclass Optionen für Einsteiger",
    description: "Grundlagen der Optionen für Anfänger verständlich erklärt",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-optionen-einsteiger.jpg",
  },
  {
    id: "650936",
    name: "Masterclass Ichimoku Cloud",
    description: "Lerne das Ichimoku-System für technische Analyse",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-ichimoku.jpg",
  },
  {
    id: "666143",
    name: "Masterclass Traden und Investieren mit KI",
    description: "Nutze künstliche Intelligenz für intelligente Trading- und Investitionsentscheidungen",
    provision: "50 % (ca. 37,00 € pro Verkauf)",
    mockup: "/images/mockup-ki.jpg",
  },
  {
    id: "670528",
    name: "Masterclass Makroanalyse für Einsteiger",
    description: "Verstehe die globale Wirtschaft und treffe bessere Investitionsentscheidungen",
    provision: "50 % (ca. 181,00 € pro Verkauf)",
    mockup: "https://d2xsxph8kpxj0f.cloudfront.net/93727259/3u6SreMUvsKGt82VdT8RZu/mockup-makroanalyse_48852756.png",
  },
];

const testimonials = [
  {
    course: "Masterclass Technische Analyse",
    rating: 5,
    text: "Der Kurs ist strukturiert und bringt einfach, klar und kompetent auf den Punkt, was man Wissen muss. Es ist nicht mein erster Kurs in diesem Bereich, aber keiner war so nüchtern (im Guten Sinne, weil einfach und klar) und so einfach zu verstehen! Ehrlich gesagt ist der Kurs viel zu günstig, für das, was geboten wird. Wenn Du unsicher bist, ob er das Geld wert ist - kauf ihn, Du wirst nicht enttäuscht sein! Danke Thomas für Deine Arbeit!",
    author: "Eva H.",
  },
  {
    course: "Masterclass Dein Tradingplan",
    rating: 5,
    text: "Super Kurs, unaufgeregt, verständlich erklärt und mit vielen Details wird man an einen Tradingplan herangeführt, der in meinen Augen unerlässlich ist. Viele Punkte hätte ich nicht bedacht und bin daher sehr froh über diese Investition.",
    author: "Geo",
  },
  {
    course: "Masterclass Swingtrading",
    rating: 5,
    text: "Der Kurs bietet eine klare und strukturierte Einführung ins Swing Trading. Besonders gefallen haben mir die verständlichen Erklärungen, praxisnahen Beispiele und die Anwendung auf echte Charts. Ideal für Einsteiger und Fortgeschrittene, die ihr Trading auf die nächste Level bringen wollen. Absolut empfehlenswert!",
    author: "André",
  },
  {
    course: "Masterclass Aktien und ETFs",
    rating: 5,
    text: "Hammer Kurs. Definitiv zu empfehlen wenn man sich für investieren weiterbilden möchte. Ich als Totalanfänger lerne mehr, als ich durch Bücher oder Youtube videos je lernen konnte. Weiter so!!",
    author: "Louis",
  },
  {
    course: "Masterclass Bitcoin, NFTs und Krypto Assets",
    rating: 5,
    text: "Ich bin absolut begeistert von diesem Kurs! Die Inhalte sind hervorragend recherchiert, strukturiert, klar verständlich und perfekt aufeinander abgestimmt. Thomas Blees vermittelt komplexe Themen mit einer Leichtigkeit, die das Lernen nicht nur effizient, sondern auch angenehm macht. Dieser Kurs hat meine Erwartungen deutlich übertroffen. Ich empfehle den Kurs jedem der sich in der vielversprechenden Welt der Kryptowährungen und digitalen Assets einfinden und dabei Spaß haben möchte! :-)",
    author: "Annette",
  },
    {
    course: "Masterclass Optionen für Einsteiger",
    rating: 5,
    text: "Ich hatte zuerst einen Kurs eines anderen Mentors gekauft, bei dem ich aber sehr Schwierigkeiten hatte, in die Thematik hereinzufinden. Hier ist es mir viel besser gelungen. Der Kurs ist super aufgebaut und in einfacher Sprache erklärt. Ich fühle mich jetzt bereit, mit dem Optionshandel zu starten.",
    author: "Sabrina K.",
  },
];

export default function Home() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (courseId: string) => {
    const link = `https://www.digistore24.com/redir/${courseId}/DEINE-ID/`;
    navigator.clipboard.writeText(link).then(() => {
      setCopiedId(courseId);
      toast.success("Link in die Zwischenablage kopiert!");
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {
      toast.error("Fehler beim Kopieren des Links");
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <div className="container h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Masterclass</div>
          <div className="text-sm text-muted-foreground">Affiliate Program</div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-secondary/50 to-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Werde mein Partner und lass uns gemeinsam wachsen!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Hey! Ich freue mich riesig, dass du meine Kurse weiterempfehlen möchtest. Auf dieser Seite erkläre ich dir Schritt für Schritt, wie du als mein Partner (Affiliate) Geld verdienst, indem du anderen Menschen hilfst, ihre Ziele mit meinen Inhalten zu erreichen.
              </p>
              <a href="https://www.digistore24.com/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Jetzt starten <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Warum es sich für dich lohnt
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Satte Provision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ich beteilige dich mit <strong>50 %</strong> an jedem Netto-Verkauf, den du vermittelst.
                </p>
              </Card>

              <Card className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Passives Einkommen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Du empfiehlst den Kurs einmal – und jedes Mal, wenn jemand über deinen Link kauft, landet Geld auf deinem Konto.
                </p>
              </Card>

              <Card className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Sichere Abwicklung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alles läuft über <strong>Digistore24</strong>. Das bedeutet für dich: Pünktliche Auszahlung und volle Transparenz über deine Verkäufe.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Schritt-für-Schritt: So wirst du mein Affiliate
            </h2>

            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Dein kostenloses Konto bei Digistore24
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Damit das System weiß, dass ein Kauf von dir kommt, brauchst du ein Konto bei unserem Zahlungsanbieter.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <a href="https://www.digistore24.com/signup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Klicke hier um dich bei Digistore24 anzumelden</a></li>
                    <li>• Wähle bei der Anmeldung die Option <strong>„Vendor & Affiliate"</strong></li>
                    <li>• Such dir einen <strong>Usernamen</strong> aus. <strong>Wichtig:</strong> Merk dir diesen Namen gut, das ist deine persönliche <strong>Affiliate-ID</strong></li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Deine Affiliate-ID finden
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sobald du eingeloggt bist, siehst du oben links in deinem Digistore-Dashboard deinen Usernamen. Das ist die ID, die wir jetzt brauchen, um deinen persönlichen Link zu bauen.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Deinen persönlichen Werbelink erstellen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Damit du die Provision bekommst, musst du einen speziellen Link verschicken. Wenn jemand darauf klickt, wird ein „Cookie" im Browser gespeichert. Kauft die Person (auch erst Tage später), weiß das System: „Das war [Dein Name]!"
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Der Link sieht so aus:
                  </p>
                  <div className="bg-secondary/50 p-3 rounded-md border border-border mb-4">
                    <code className="text-sm text-foreground font-mono">
                      https://www.digistore24.com/redir/PRODUKT-ID/DEINE-ID/
                    </code>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Das musst du tun:</strong> Ersetze <code className="bg-secondary px-2 py-1 rounded">DEINE-ID</code> durch deinen Usernamen. Die <code className="bg-secondary px-2 py-1 rounded">PRODUKT-ID</code> findest du in der Liste unten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Meine Kurse: Such dir dein Produkt aus
            </h2>
            <p className="text-lg text-muted-foreground mb-16">
              Hier sind die Links, die du für deine Werbung nutzen kannst. Ersetze einfach das Wort <code className="bg-secondary px-2 py-1 rounded">DEINE-ID</code> am Ende durch deinen Digistore-Usernamen.
            </p>

            <div className="space-y-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="p-6 border border-border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex gap-6 items-start">
                    {/* Mockup Image - Small */}
                    <div className="flex-shrink-0 w-28 h-36 overflow-hidden bg-secondary/20 rounded-lg">
                      <img
                        src={course.mockup}
                        alt={course.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-sm font-mono text-muted-foreground mb-2">
                        Produkt-ID: {course.id}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {course.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                        {course.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                            Deine Provision
                          </p>
                          <p className="font-bold text-primary text-sm">
                            {course.provision}
                          </p>
                        </div>

                        <div className="md:col-span-2">
                          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                            Dein Werbelink
                          </p>
                          <div className="bg-secondary/50 p-2 rounded-md border border-border mb-3">
                            <code className="text-xs text-foreground break-all font-mono">
                              https://www.digistore24.com/redir/{course.id}/DEINE-ID/
                            </code>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary/10 text-xs"
                            onClick={() => handleCopyLink(course.id)}
                          >
                            {copiedId === course.id ? (
                              <>
                                <Check className="h-3 w-3 mr-1" />
                                Kopiert!
                              </>
                            ) : (
                              "Link kopieren"
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Das sagen meine Kursteilnehmer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border border-border bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Deine Werkzeugkiste (Werbematerial)
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Ich möchte es dir so einfach wie möglich machen. Du musst das Rad nicht neu erfinden! Nutze gerne meine vorbereiteten Materialien:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="https://drive.google.com/drive/folders/1wp4Qp0q_yQB3UZTIEwk24ABhHwSWoQ88?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-8 border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Bildmaterial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hier findest du Kursbilder, Logos und Story-Grafiken.
                  </p>
                </Card>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1aB5D82X_dYSYrj-sNQ0DGC53LlMG2sRp?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-8 border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Fertige Texte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kopiere dir meine Texte einfach heraus und passe sie kurz an.
                  </p>
                </Card>
              </a>
            </div>

            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">💡 Mein Profi-Tipp für dich</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sei authentisch! Erzähle deiner Community, warum <strong>du</strong> hinter meinen Kursen stehst. Ein persönlicher Satz wie: „Ich kenne [Dein Name] und weiß, wie viel Herzblut in diesem Kurs steckt", verkauft sich 10x besser als reine Werbesprache.
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Du hast Fragen oder brauchst Hilfe?
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Wenn du irgendwo hängst, einen Test-Zugang für ein Review brauchst oder eine Idee für eine gemeinsame Aktion hast, schreib mir einfach!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border border-border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">E-Mail</h3>
                </div>
                <p className="text-muted-foreground">
                  <a
                    href="mailto:tblees@meine-geldseite.de"
                    className="text-primary hover:underline font-semibold"
                  >
                    tblees@meine-geldseite.de
                  </a>
                </p>
              </Card>

              <Card className="p-8 border border-border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <Youtube className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">YouTube</h3>
                </div>
                <p className="text-muted-foreground">
                  <a
                    href="https://www.youtube.com/@meinegeldseite"
                    className="text-primary hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @meinegeldseite
                  </a>
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Section - Dein Partner */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Dein Partner
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/93727259/oZjVsVywlDUlQgDx.png"
                    alt="Lars Pillmann, Berlin"
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-card p-4 text-center">
                    <p className="text-sm text-muted-foreground font-semibold">
                      © Lars Pillmann, Berlin
                    </p>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    Aktuelle Position & Zertifikationen
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Abschluss KI-Pionier Akademie von Garrit Wilson ai consulting</li>
                    <li>• (Masterclass Prompt Engineering und Masterclass KI-Automatisierung)</li>
                    <li>• 2024 AI Workplace Proficiency Certification der Superhuman AI Academy</li>
                    <li className="mt-3">• 2021-heute Geschäftsführer FTB Investment GmbH</li>
                    <li>• 2019 Intensivausbildung Portfoliomanagement bei André Stagge</li>
                    <li>• 2013 Examen Certified Financial Technician Level I</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    Branchenerfahrung
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Mitglied der Vereinigung Technischer Analysten Deutschlands e.V.</li>
                    <li>• seit 2007 an der Börse aktiv – Erfahrung im Handel mit Aktien, ETFs, Optionen, Futures, Forex</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    Medienkarriere & Ausbildung
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 2001-2023 Pressesprecher KPMG AG</li>
                    <li>• 2001 Abschluss Dipl.-Betriebswirt (ebw)</li>
                    <li>• 2000-2001 Pressesprecher bmp AG</li>
                    <li>• 1999-2000 Redakteur "Made in Germany" (Deutsche Welle TV)</li>
                    <li>• 1998-1999 Redakteur "Talk im Turm" (SAT1)</li>
                    <li>• 1992-1998 freier Mitarbeiter beim SFB (Hörfunk und TV)</li>
                    <li>• 1990-1992 Volontariat beim Sender Freies Berlin</li>
                    <li>• 1983-1990 Studium Publizistik, Politik und Soziologie an der FU Berlin (M.A.)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    Weitere Aktivitäten
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Freie Mitarbeit bei Zeitungen und Hörfunk</li>
                    <li className="mt-3"><strong>Buchveröffentlichungen:</strong></li>
                    <li>• Glienicker Brücke (1996)</li>
                    <li>• 90 Minuten Klassenkampf (1999)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lass uns gemeinsam durchstarten!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Werde jetzt Teil unseres Affiliate-Programms und verdiene mit deiner Community.
            </p>
            <a href="https://www.digistore24.com/signup" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Jetzt Affiliate werden <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
