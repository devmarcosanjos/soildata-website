"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Alternar menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Logo SOILDATA"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <span className="text-lg font-bold">SOILDATA</span>
                </Link>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/"
                    className={`text-lg ${isActive("/") ? "font-medium text-amber-700" : "text-muted-foreground"}`}
                  >
                    Início
                  </Link>
                  <Link
                    href="/statistics"
                    className={`text-lg ${isActive("/statistics") ? "font-medium text-amber-700" : "text-muted-foreground"}`}
                  >
                    Estatísticas
                  </Link>
                  <Link
                    href="/who-we-are"
                    className={`text-lg ${isActive("/who-we-are") ? "font-medium text-amber-700" : "text-muted-foreground"}`}
                  >
                    Quem Somos
                  </Link>
                  <Link
                    href="/contact"
                    className={`text-lg ${isActive("/contact") ? "font-medium text-amber-700" : "text-muted-foreground"}`}
                  >
                    Contato
                  </Link>
                </div>
                <Button asChild className="mt-4 bg-amber-700 hover:bg-amber-800">
                  <Link href="https://e4b2-170-0-219-157.ngrok-free.app/" target="_blank">
                    Acessar Repositório
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 mr-6">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo SOILDATA"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="hidden font-bold sm:inline-block">SOILDATA</span>
          </Link>
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/"
              className={`text-sm ${isActive("/") ? "font-medium text-amber-700" : "text-muted-foreground hover:text-foreground"}`}
            >
              Início
            </Link>
            <Link
              href="/statistics"
              className={`text-sm ${isActive("/statistics") ? "font-medium text-amber-700" : "text-muted-foreground hover:text-foreground"}`}
            >
              Estatísticas
            </Link>
            <Link
              href="/who-we-are"
              className={`text-sm ${isActive("/who-we-are") ? "font-medium text-amber-700" : "text-muted-foreground hover:text-foreground"}`}
            >
              Quem Somos
            </Link>
            <Link
              href="/contact"
              className={`text-sm ${isActive("/contact") ? "font-medium text-amber-700" : "text-muted-foreground hover:text-foreground"}`}
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <div className="hidden md:flex">
            <Button variant="outline" size="sm" className="mr-2">
              Entrar
            </Button>
            <Button variant="outline" size="sm" className="mr-4">
              Cadastrar
            </Button>
          </div> */}
          <Button asChild className="bg-amber-700 hover:bg-amber-800">
            <Link href="https://soildata.mapbiomas.org/" target="_blank">
              Acessar Repositório
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

