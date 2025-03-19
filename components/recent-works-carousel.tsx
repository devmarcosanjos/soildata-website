"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Users, ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

type Work = {
  id: string
  title: string
  authors: string[]
  date: string
  url: string
  description: string
  tags: string[]
}

export default function RecentWorksCarousel() {
  const [works, setWorks] = useState<Work[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Em um ambiente real, você faria uma chamada API para buscar os dados
    // Aqui estamos usando dados simulados baseados na URL fornecida
    const fetchWorks = async () => {
      setIsLoading(true)
      try {
        // Simulando uma chamada de API
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Dados baseados na URL fornecida
        const recentWorks: Work[] = [
          {
            id: "1",
            title:
              "Levantamento de reconhecimento de alta intensidade dos solos da Apa de Cafuringa-DF, escala 1:100.000",
            authors: ["Braga, Adriana Reatto dos Santos", "Martins, Éder de Souza", "Farias, Marcus Fábio Ribeiro"],
            date: "2025-01-24",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/NGA572",
            description:
              "Este trabalho apresenta o levantamento de reconhecimento de alta intensidade dos solos da APA de Cafuringa-DF, em escala 1:100.000.",
            tags: ["Levantamento de Solos", "APA Cafuringa", "Distrito Federal"],
          },
          {
            id: "2",
            title: "Guia de campo da excursão pedológica da rocha à garrafa: geologia, solos e vinhos",
            authors: ["Santos, Erico Albuquerque dos", "Lóss, Arcângelo", "Pedron, Fabrício de Araújo"],
            date: "2025-01-24",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/TXSANP",
            description:
              "Guia de campo que relaciona a geologia, solos e a produção de vinhos, com foco na excursão pedológica.",
            tags: ["Pedologia", "Viticultura", "Geologia"],
          },
          {
            id: "3",
            title: "Spatial distribution of soil physical properties in a semiarid tropical region",
            authors: ["Silva, José Railison Inácio", "Souza, Rodolfo", "Souza, Eduardo"],
            date: "2024-12-18",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/XOACC6",
            description:
              "Estudo sobre a distribuição espacial das propriedades físicas do solo em uma região tropical semiárida.",
            tags: ["Propriedades Físicas", "Semiárido", "Distribuição Espacial"],
          },
          {
            id: "4",
            title:
              "Training Field Soil Data for Mapping of Soil Particle Size Distribution (0-30 cm) in Brazil (MapBiomas Soil Collection 2, Beta Version)",
            authors: ["MapBiomas"],
            date: "2024-12-14",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/PRI332",
            description:
              "Dados de campo para mapeamento da distribuição do tamanho de partículas do solo (0-30 cm) no Brasil.",
            tags: ["Granulometria", "MapBiomas", "Brasil"],
          },
          {
            id: "5",
            title: "Mapeamento de solos e aptidão agrícola das terras do município de Luís Eduardo Magalhães, BA",
            authors: ["Lumbreras, José Francisco", "Carvalho Filho, Amaury de", "Motta, Paulo Emílio Ferreira da"],
            date: "2024-11-30",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/LEM2024",
            description:
              "Mapeamento detalhado dos solos e avaliação da aptidão agrícola das terras do município de Luís Eduardo Magalhães, Bahia.",
            tags: ["Aptidão Agrícola", "Bahia", "Mapeamento de Solos"],
          },
          {
            id: "6",
            title: "Mapa de solos do Brasil, escala 1:5.000.000",
            authors: ["EMBRAPA", "IBGE"],
            date: "2024-11-15",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/MSBR5M",
            description:
              "Mapa de solos do Brasil em escala 1:5.000.000, desenvolvido pela EMBRAPA em parceria com o IBGE.",
            tags: ["Mapa de Solos", "Brasil", "Escala Nacional"],
          },
          {
            id: "7",
            title: "Análise da fertilidade do solo em áreas de cultivo de café no sul de Minas Gerais",
            authors: ["Oliveira, Marcelo Silva", "Ferreira, Ana Cláudia", "Santos, João Paulo"],
            date: "2024-10-28",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/AFSMG",
            description:
              "Estudo sobre a fertilidade do solo em áreas de cultivo de café na região sul de Minas Gerais.",
            tags: ["Fertilidade", "Café", "Minas Gerais"],
          },
          {
            id: "8",
            title: "Estoque de carbono em solos sob diferentes usos da terra na Amazônia Oriental",
            authors: ["Costa, Juliana Ribeiro", "Almeida, Luiz Fernando", "Pires, Tânia Cristina"],
            date: "2024-10-15",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/ECSAO",
            description:
              "Avaliação dos estoques de carbono em solos sob diferentes usos da terra na região da Amazônia Oriental.",
            tags: ["Carbono no Solo", "Amazônia", "Uso da Terra"],
          },
          {
            id: "9",
            title: "Caracterização física e química de solos em áreas de restauração florestal no Cerrado",
            authors: ["Mendes, Ricardo Augusto", "Vieira, Débora Cristina", "Nogueira, Fernanda Maria"],
            date: "2024-09-22",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/CFQSRF",
            description:
              "Caracterização das propriedades físicas e químicas de solos em áreas de restauração florestal no bioma Cerrado.",
            tags: ["Restauração Florestal", "Cerrado", "Propriedades do Solo"],
          },
          {
            id: "10",
            title: "Mapeamento digital de solos da região do Vale do Paraíba, SP",
            authors: ["Pereira, Luciano César", "Gomes, Mariana Silva", "Rodrigues, Carlos Eduardo"],
            date: "2024-09-10",
            url: "https://soildata.mapbiomas.org/dataset.xhtml?persistentId=doi:10.60502/SoilData/MDSVP",
            description:
              "Mapeamento digital de solos da região do Vale do Paraíba, no estado de São Paulo, utilizando técnicas de geoprocessamento.",
            tags: ["Mapeamento Digital", "Vale do Paraíba", "São Paulo"],
          },
        ]

        setWorks(recentWorks)
      } catch (error) {
        console.error("Erro ao carregar trabalhos recentes:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWorks()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  if (isLoading) {
    return (
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(4)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-9 w-full" />
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    )
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {works.map((work) => (
          <CarouselItem key={work.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-base line-clamp-2">{work.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(work.date)}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <Users className="h-3.5 w-3.5 shrink-0" />
                    <span className="line-clamp-1">
                      {work.authors.slice(0, 2).join(", ")}
                      {work.authors.length > 2 && " et al."}
                    </span>
                  </div>
                  <p className="text-sm line-clamp-3 text-muted-foreground">{work.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {work.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-amber-50 text-amber-800 hover:bg-amber-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                    <Link href={work.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver no Repositório
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-4">
        <CarouselPrevious className="static translate-y-0 mr-2" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  )
}

