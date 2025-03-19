import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, BarChart2, Search, Globe, MapIcon, DatabaseIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section com barra de pesquisa */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=500&width=1920"
            alt="Vista de paisagem de solo e floresta"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">SOILDATA</h1>
          <p className="mt-4 max-w-2xl text-xl text-white">O repositório SoilData é a vitrine do trabalho de campo e laboratório de quem estuda o solo brasileiro! Nele, você pode publicar dados que tenha produzido em seus projetos. Você também pode encontrar dados para utilizar em suas atividades de ensino, pesquisa e, inclusive, comerciais.</p>

          {/* Barra de pesquisa */}
          <div className="mt-8 w-full max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Pesquisar no repositório SOILDATA..."
                className="bg-white/95 pl-10 pr-4 py-6 text-base shadow-lg"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-amber-700 hover:bg-amber-800">
                Buscar
              </Button>
            </div>
            <p className="mt-2 text-sm text-white/80">
              Pesquise em mais de 200 conjuntos de dados sobre solos brasileiros
            </p>
          </div>
        </div>
      </section>

      {/* Três colunas principais - similar ao Harvard Dataverse */}
      <section className="bg-white py-10">
        <div className="container grid gap-8 md:grid-cols-3">
          <Card className="border-t-4 border-t-amber-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-amber-600" />
                Deposite e compartilhe seus dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                O SOILDATA é um repositório para dados de pesquisa sobre solos. Deposite dados e código aqui.
              </p>
              
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-green-600" />
                Cada conjunto de dados recebe um DOI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Cada conjunto de dados depositados é atribuido um DOI gratuitamente. 
              </p>
             
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-amber-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-amber-800" />
                Publicar dados é fácil no SOILDATA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Saiba mais sobre como começar a criar seu próprio repositório de dataverse.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção em destaque */}
      <section className="bg-stone-50 py-8">
        <div className="container">
          <Card className="border-l-4 border-l-amber-600 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-amber-100/50 p-4 flex items-center justify-center md:w-48">
                <span className="font-medium text-amber-800">Em Destaque</span>
              </div>
              <CardContent className="flex-1 flex items-center p-6">
                <div className="mr-4 hidden md:block">
                  {/* <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Ícone de mapa de solo"
                    width={80}
                    height={80}
                    className="rounded"
                  /> */}

                  <DatabaseIcon size={80} className="text-amber-800" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-amber-800">Mapeamento de Solos do Brasil 2023</h3>
                  <p className="text-muted-foreground">
                    Uma coleção curada de dados de mapeamento de solos depositados no repositório SOILDATA.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-stone-100 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Pronto para explorar os dados de Solos?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Entre em contato com nossa equipe para saber mais sobre como o SOILDATA pode apoiar suas necessidades
                  de pesquisa ou políticas.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">
                    Contate-nos Hoje <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

