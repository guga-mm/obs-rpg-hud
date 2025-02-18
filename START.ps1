# Inicia o pocketbase.exe em segundo plano
Start-Process -FilePath "./pocketbase.exe" -ArgumentList "serve" -NoNewWindow

# Roda o comando npm run dev e aguarda
npm run start

# Abre o navegador na URL localhost:3000
Start-Process "http://localhost:3000"