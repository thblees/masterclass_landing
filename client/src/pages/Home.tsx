import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Instagram } from "lucide-react";

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
    provision: "€XX",
  },
  {
    id: "656974",
    name: "Masterclass Aktien und ETFs",
    description: "Investieren in Aktien und ETFs verstehen und umsetzen",
    provision: "€XX",
  },
  {
    id: "656973",
    name: "Masterclass Swingtrading",
    description: "Professionelle Swingtrading-Strategien für Anfänger und Fortgeschrittene",
    provision: "€XX",
  },
  {
    id: "656947",
    name: "Masterclass Dein Tradingplan",
    description: "Entwickle deinen persönlichen Tradingplan und Strategie",
    provision: "€XX",
  },
  {
    id: "656945",
    name: "Masterclass Technische Analyse",
    description: "Meistere die technische Analyse für erfolgreiche Trades",
    provision: "€XX",
  },
  {
    id: "656942",
    name: "Masterclass Trading und Investieren",
    description: "Umfassendes Wissen über Trading und langfristige Investitionen",
    provision: "€XX",
  },
  {
    id: "655817",
    name: "Masterclass Optionen für Fortgeschrittene",
    description: "Fortgeschrittene Optionsstrategien und Techniken",
    provision: "€XX",
  },
  {
    id: "655552",
    name: "Masterclass Optionen für Einsteiger",
    description: "Grundlagen der Optionen für Anfänger verständlich erklärt",
    provision: "€XX",
  },
  {
    id: "650936",
    name: "Masterclass Ichimoku Cloud",
    description: "Lerne das Ichimoku-System für technische Analyse",
    provision: "€XX",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Masterclass</h1>
          <div className="text-sm text-muted-foreground">Affiliate Program</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Werde mein Partner und lass uns gemeinsam wachsen!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Hey! Ich freue mich riesig, dass du meine Kurse weiterempfehlen möchtest. Auf dieser Seite erkläre ich dir Schritt für Schritt, wie du als mein Partner (Affiliate) Geld verdienst, indem du anderen Menschen hilfst, ihre Ziele mit meinen Inhalten zu erreichen.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-md"
            >
              Jetzt starten <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                Ich beteilige dich mit <strong>[X]%</strong> (z. B. 50%) an jedem Netto-Verkauf, den du vermittelst.
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
                  <li>• Klicke hier: [Link zur Digistore-Registrierung]</li>
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
                <div className="bg-card p-4 rounded-md border border-border mb-4">
                  <p className="text-sm font-mono text-foreground mb-2">
                    Der Link sieht so aus:
                  </p>
                  <code className="text-sm text-primary">
                    https://www.digistore24.com/redir/PRODUKT-ID/DEINE-ID/
                  </code>
                </div>
                <p className="text-muted-foreground text-sm">
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
                className="p-8 border border-border bg-card hover:shadow-md transition-all duration-300 hover:border-primary/30"
              >
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="text-sm font-mono text-muted-foreground mb-2">
                      Produkt-ID: {course.id}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {course.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Deine Provision
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {course.provision}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Dein Werbelink
                      </p>
                      <div className="bg-secondary/50 p-3 rounded-md border border-border">
                        <code className="text-xs md:text-sm text-foreground break-all font-mono">
                          https://www.digistore24.com/redir/{course.id}/DEINE-ID/
                        </code>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      Link kopieren
                    </Button>
                  </div>
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

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Ich möchte es dir so einfach wie möglich machen. Du musst das Rad nicht neu erfinden! Nutze gerne meine vorbereiteten Materialien:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Bilder & Banner
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hier findest du Kursbilder, Logos und Story-Grafiken.
              </p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
              >
                Zum Google Drive Ordner <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fertige Texte
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kopiere dir meine Texte einfach heraus und passe sie kurz an.
              </p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
              >
                E-Mail-Vorlagen & Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              💡 Mein Profi-Tipp für dich
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Sei authentisch! Erzähle deiner Community, warum <strong>du</strong> hinter meinen Kursen stehst. Ein persönlicher Satz wie: „Ich kenne [Dein Name] und weiß, wie viel Herzblut in diesem Kurs steckt", verkauft sich 10x besser als reine Werbesprache.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Du hast Fragen oder brauchst Hilfe?
          </h2>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
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
                  href="mailto:[Deine E-Mail-Adresse]"
                  className="text-primary hover:underline font-semibold"
                >
                  [Deine E-Mail-Adresse]
                </a>
              </p>
            </Card>

            <Card className="p-8 border border-border bg-card">
              <div className="flex items-center gap-4 mb-4">
                <Instagram className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Instagram</h3>
              </div>
              <p className="text-muted-foreground">
                <a
                  href="https://instagram.com/[Dein Handle]"
                  className="text-primary hover:underline font-semibold"
                >
                  @[Dein Handle]
                </a>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Lass uns gemeinsam durchstarten!
          </h2>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Werde jetzt Teil unseres Affiliate-Programms und verdiene mit deiner Community.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-md font-semibold"
          >
            Jetzt registrieren <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Masterclass</h4>
              <p className="text-white/70 leading-relaxed">
                Hochwertige Kurse zu Trading, Investieren und Finanzbildung.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Affiliate Program</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Registrieren
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bedingungen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="mailto:[email]" className="hover:text-white transition-colors">
                    [Deine E-Mail]
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/[handle]" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Masterclass. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
