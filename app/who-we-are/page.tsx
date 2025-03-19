import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Users, BookOpen, Award } from "lucide-react"
import Image from "next/image"

export default function WhoWeArePage() {
  return (
    <div className="container py-10">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Quem Somos</h1>
        <p className="text-muted-foreground">Conheça a missão, equipe e impacto do SOILDATA</p>
      </div>

      {/* Mission Section */}
      <section className="mb-16 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <Globe className="h-5 w-5 text-amber-700" />
          </div>
          <h2 className="text-2xl font-bold">Nossa Missão</h2>
          <p className="text-lg text-muted-foreground">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis nulla ratione voluptatibus aut. Impedit assumenda porro rerum tenetur unde ut veniam, asperiores ea ratione perferendis, architecto eaque deleniti neque?
          </p>
          <p className="text-lg text-muted-foreground">
            Como parte da iniciativa MapBiomas, trabalhamos para monitorar mudanças no uso da terra, composição do solo
            e condições ambientais, criando um recurso valioso para pesquisadores, formuladores de políticas e o
            público.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Pesquisadores em campo coletando amostras de solo"
            fill
            className="object-cover"
          />
        </div>
      </section>

  

      {/* Team Section */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Nossa Equipe</h2>
          <p className="mt-2 text-muted-foreground">Conheça os especialistas por trás do SOILDATA</p>
        </div>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="leadership">Liderança</TabsTrigger>
            <TabsTrigger value="researchers">Curadores</TabsTrigger>
            <TabsTrigger value="technical">Equipe Técnica</TabsTrigger>
          </TabsList>
          <TabsContent value="leadership">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dra. Maria Silva"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Fulano</h3>
                <p className="text-sm text-muted-foreground">Cargo X</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dra. Maria Silva"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Fulano 2</h3>
                <p className="text-sm text-muted-foreground">Cargo X</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dra. Maria Silva"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Fulano 3</h3>
                <p className="text-sm text-muted-foreground">Cargo X</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>
              
             
            </div>
          </TabsContent>
          <TabsContent value="researchers">
            <div className="grid gap-8 md:grid-cols-4">

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

               <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Carlos Mendes"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Pesquisador FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>
              


            </div>
          </TabsContent>
          <TabsContent value="technical">
            <div className="grid gap-8 md:grid-cols-4">

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Pedro Alves"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">TEC FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Pedro Alves"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">TEC FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Pedro Alves"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">TEC FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Pedro Alves"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">TEC FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Pedro Alves"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">TEC FULANO</h3>
                <p className="text-sm text-muted-foreground">Cargo</p>
              </div>


             
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Partners & Collaborators */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Nossos Parceiros e Colaboradores</h2>
          <p className="mt-2 text-muted-foreground">Organizações com as quais trabalhamos para avançar nossa missão</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo MapBiomas"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">MapBiomas</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Universidade Tecnologia Federal do Paraná</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Laboratorio de Pedometria - LdP</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>


           <div className="flex flex-col items-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Logo"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <p className="text-center text-sm font-medium">Parceiro X</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-16 bg-stone-50 p-8 rounded-lg">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Nossas Conquistas</h2>
          <p className="mt-2 text-muted-foreground">Marcos importantes em nossa jornada</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <Award className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Lancamento do Repositório SoilData</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nulla nobis, eos modi cumque consectetur aliquam asperiores dicta ad cupiditate nam quam saepe ab, pariatur repudiandae magnam porro cum adipisci?
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

