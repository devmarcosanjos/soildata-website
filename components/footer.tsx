import { Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-stone-50">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo SOILDATA"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="font-bold">SOILDATA</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Um repositório abrangente de dados de solo do MapBiomas, fornecendo a pesquisadores e formuladores de
              políticas informações ambientais valiosas.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="text-muted-foreground hover:text-foreground">
                  Estatísticas
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-muted-foreground hover:text-foreground">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Acesso à API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Dicionário de Dados
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Artigos Científicos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Licença de Dados
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Acessibilidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SOILDATA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://brasil.mapbiomas.org/"
              target="_blank"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span>MapBiomas Brasil</span>
            </Link>
            <Link
              href="https://soildata.mapbiomas.org/"
              target="_blank"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span>Repositório SOILDATA</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

