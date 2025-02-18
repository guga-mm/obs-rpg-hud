# Remove a pasta .next
Remove-Item -Recurse -Force ".next"

# Inicia o pocketbase.exe
Start-Process -FilePath "./pocketbase.exe" -ArgumentList "serve" -NoNewWindow -PassThru | ForEach-Object {
    $pocketbaseProcess = $_
    
    # Roda o comando npm run build
    npm run build

    # Após a execução do npm run build, encerra o processo pocketbase.exe
    Stop-Process -Id $pocketbaseProcess.Id
}
