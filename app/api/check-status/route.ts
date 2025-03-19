import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Função para verificar o status do repositório
async function checkRepositoryStatus() {
  try {
    const startTime = Date.now()

    // Fazer uma requisição para o repositório usando o endpoint fornecido
    const response = await fetch("https://soildata.mapbiomas.org/dataverse/soildata?q=", {
      method: "GET",
      cache: "no-store",
    })

    const endTime = Date.now()
    const responseTime = endTime - startTime

    return {
      status: response.ok ? "online" : "offline",
      responseTime: response.ok ? responseTime : 0,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      status: "error",
      responseTime: 0,
      timestamp: new Date().toISOString(),
    }
  }
}

// Função para salvar o resultado em um arquivo CSV
async function saveToCSV(data: { status: string; responseTime: number; timestamp: string }) {
  const csvDir = path.join(process.cwd(), "data")
  const csvPath = path.join(csvDir, "status-log.csv")

  // Criar diretório se não existir
  if (!fs.existsSync(csvDir)) {
    fs.mkdirSync(csvDir, { recursive: true })
  }

  // Criar arquivo com cabeçalho se não existir
  if (!fs.existsSync(csvPath)) {
    fs.writeFileSync(csvPath, "timestamp,status,responseTime\n")
  }

  // Adicionar nova linha
  const csvLine = `${data.timestamp},${data.status},${data.responseTime}\n`
  fs.appendFileSync(csvPath, csvLine)
}

export async function GET() {
  const statusResult = await checkRepositoryStatus()

  // Salvar resultado em CSV
  await saveToCSV(statusResult)

  return NextResponse.json(statusResult)
}

