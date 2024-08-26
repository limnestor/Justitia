$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
Get-ChildItem . -Filter *.html |
Foreach-Object {
    $str1 =  "https://limnestor.github.io/Justitia/"+$_.Name
    Write-Output $str1
} > sitemap.txt
