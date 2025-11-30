Academia AI - scaffold gerado automaticamente

Instruções rápidas:

1. Copie .env.example para .env e ajuste variáveis se necessário.
2. Na raiz do projeto execute:
   docker compose -f devops\compose\docker-compose.yml build --no-cache
   docker compose -f devops\compose\docker-compose.yml up

Observações:
- O Dockerfile do backend instala torch via índice oficial de wheels CPU; downloads grandes podem falhar em redes com proxy.
- Para desenvolvimento rápido, o frontend roda em Vite na porta 5173.
