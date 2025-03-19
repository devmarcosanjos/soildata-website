"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

type StatusCheck = {
  timestamp: string
  status: "online" | "offline" | "error"
  responseTime: number
}

export default function StatusMonitor() {
  // Estados iniciais
  const [status, setStatus] = useState<"online" | "offline" | "loading" | "error">("loading")
  const [responseTime, setResponseTime] = useState<number>(0)
  const [lastChecked, setLastChecked] = useState<string>("")
  const [history, setHistory] = useState<StatusCheck[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Função para verificar o status
  const checkRepositoryStatus = async () => {
    setIsRefreshing(true)
    try {
      const startTime = performance.now()
      const response = await fetch("https://soildata.mapbiomas.org/api/info/metrics/datasets")
      const endTime = performance.now()

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      if (data.status === "OK") {
        setStatus("online")
      } else {
        setStatus("offline")
      }

      setResponseTime(Math.round(endTime - startTime))
      setLastChecked(new Date().toISOString())

      const newCheck: StatusCheck = {
        timestamp: new Date().toISOString(),
        status: data.status === "OK" ? "online" : "offline",
        responseTime: Math.round(endTime - startTime),
      }

      setHistory((prev) => [newCheck, ...prev].slice(0, 24))
    } catch (error) {
      console.error("Erro ao verificar status:", error)
      setStatus("error")
    } finally {
      setIsRefreshing(false)
    }
  }

  // Executa a verificação apenas no cliente
  useEffect(() => {
    checkRepositoryStatus()
  }, [])

  // Formata a data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("pt-BR")
  }

  // Retorna o ícone correspondente ao status
  const getStatusIcon = (status: "online" | "offline" | "error") => {
    switch (status) {
      case "online":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "offline":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-amber-500" />
    }
  }

  // Retorna o texto correspondente ao status
  const getStatusText = (status: "online" | "offline" | "error") => {
    switch (status) {
      case "online":
        return "Online"
      case "offline":
        return "Offline"
      case "error":
        return "Erro"
    }
  }

  // Exibe um skeleton enquanto o status está carregando
  if (status === "loading") {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-5 w-40" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    )
  }

  // Renderiza o componente com o status atual
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          {getStatusIcon(status)}
          <span className={`font-medium ${status === "online" ? "text-green-500" : "text-red-500"}`}>
            {getStatusText(status)}
          </span>
          {status === "online" && <span className="text-sm text-muted-foreground">({responseTime}ms)</span>}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Última verificação: {lastChecked ? formatDate(lastChecked) : "Nunca"}
          </span>
          <Button variant="outline" size="sm" onClick={checkRepositoryStatus} disabled={isRefreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            Verificar Agora
          </Button>
        </div>
      </div>
    </div>
  )
}